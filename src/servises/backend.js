const addUser = (userData) => {
  console.log(userData);
  console.log(JSON.parse(localStorage.getItem("users")));
  if (isUser(userData).success) {
    return { success: false, message: "this email is already used" };
  } else {
    let arr = JSON.parse(localStorage.getItem("users"));
    let finalArr = arr ? [...arr, userData] : [userData];
    localStorage.setItem("users", JSON.stringify(finalArr));
    return { success: true, message: "your are in" };
  }
};
const isUser = (userData) => {
  console.log(userData);
  let allUsers = JSON.parse(localStorage.getItem("users"));
  console.log(allUsers);
  if (allUsers) {
    let result = allUsers.reduce((a, b) => {
      return (
        a ||
        (b["email"] === userData["email"] &&
          b["password"] === userData["password"])
      );
    }, false);
    return result
      ? { success: true, message: "you are signed in successfully" }
      : { success: false, message: "invalid email or password" };
  } else return { success: false, message: "invalid email or password" };
};

export { addUser, isUser };
