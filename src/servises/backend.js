const addUser = (userDetails) => {
  if (isUser(userDetails).success) {
    return { success: false, message: "this email is already used" };
  } else {
    let oldUsers = JSON.parse(localStorage.getItem("users"));
    let fullUsers = oldUsers
      ? [...oldUsers, { userDetails, cart: [], favorites: [] }]
      : [{ userDetails, cart: [], favorites: [] }];
    localStorage.setItem("users", JSON.stringify(fullUsers));
    return { success: true, message: "your are in" };
  }
};
const isUser = (user) => {
  let allUsers = JSON.parse(localStorage.getItem("users"));
  console.log(allUsers);
  console.log(user);
  if (allUsers) {
    let result = allUsers.reduce((a, b) => {
      console.log({ b });
      return (
        a ||
        (b["userDetails"]["email"] === user["email"] &&
          b["userDetails"]["password"] === user["password"])
      );
    }, false);
    return result
      ? { success: true, message: "you are signed in successfully" }
      : { success: false, message: "invalid email or password" };
  } else return { success: false, message: "invalid email or password" };
};
const isGuest = () => {
  return !localStorage.getItem("cUser");
};
const signIn = (userDetails) => {
  let result = isUser(userDetails);
  if (result.success) {
    localStorage.setItem("cUser", userDetails["email"]);
  }
  return result;
};
const logout = () => {
  localStorage.removeItem('cUser');
}
const getUserItems = (name) => {
  let cUserEmail = localStorage.getItem("cUser");
  let users = JSON.parse(localStorage.getItem("users"));
  if (users) {
    let user = users.find((user) => {
      return user["userDetails"]["email"] === cUserEmail;
    });
    return user ? user[name] : [];
  } else {
    return [];
  }
};
const changeUser = (user, name, items) => {
  let newUser = { ...user };
  newUser[name] = items;
  return newUser;
};
const updateLocalStorage = (name, items) => {
  let cUserEmail = localStorage.getItem("cUser");
  let newUsers = JSON.parse(localStorage.getItem("users")).map((user) => {
    return user["userDetails"]["email"] === cUserEmail
      ? changeUser(user, name, items)
      : user;
  });
  console.log(newUsers);
  localStorage.setItem("users", JSON.stringify(newUsers));
};

export { addUser, isUser, isGuest, getUserItems, signIn, updateLocalStorage, logout };
