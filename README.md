# Defacto Clone
## Team Leader
- Fatma yasser

## Team Members
- Mariam
- Anas
- Abanoub
- Daghash 
- Doha
- Abdallah

### 1. Todo

**Pages**
- [x] Home Page  (Abdallah / Anas)
- [x] Women Page (Anas)
- [x] Men Page (Anas)
- [x] kids Page (Anas)
- [ ] Products Page
- [x] Product Page  (Anas)
- [x] Favorites Page (Doha)
- [ ] Help Page
- [ ] Admin Page
- [x] Stores Page (Doha)
- [ ] Shoppign cart page

**Components**
- [x] Header (Abanoub / Anas)
- [x] Footer (Daghash / Anas)
- [x] Image Slider (Anas)
- [x] Trends  (Anas)
- [ ] Collections   (Doha)
- [x] Shopping Cart dropdown (Anas)
- [ ] items in cart  (Abdallah)  
- [ ] Sidebar Filters
- [ ] Register (Mariam)
- [ ] Login   (Mariam)
- [x] Products View Images (Abdallah / Anas)
- [ ] collections
- [ ] appreals
- [ ] accessories


**Adding Functionality**
- [ ]


**Data Collecting**
- collecting the data from zappos api  (Anas)
- collecting data from decota website  (Abanoub)

# problems
- **problem1**
- loading  the items from local storage using   useEffect to the react state to retrieve lost data after refreshing 
```
const [cart, setCart] = useState([]);
  useEffect(() => {
    if (!isGuest) {
      setCart(getUserItems);
      //setCart get data from local storage
    }
  }, []);
```
the page and at the same time using useEffect to change the localStorage data after the state changes:
```
  useEffect(() => {
    console.log("cart changed");
    if (!isGuest()) {
      updateLocalStorage("cart", cart);
    }
  }, [cart]);

```
 which causes conflict because the useEffect runs asychronously and when the page refreash the state changes to its intial value so the somtimes the localStorage is cleared

 # solution 
 instead if changing intializing the state with [] and waiting and changing it with localstorage data after refresh just intialize it with localstorage data
 ```
 const [cart, setCart] = useState(() => {
    return !isGuest() ? getUserItems("cart") : [];
  });
 ```
 **problem2** random numbers used in creating items changes after each reload making
 **solution**  using seeded random number using (seedrandom.js) 