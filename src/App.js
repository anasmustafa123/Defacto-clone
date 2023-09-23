// // <<<<<<< HEAD
// // <<<<<<< HEAD
// import './App.css'; 
// // import HomeView from './components/HomeView';
// // import BasketView from './components/shoppingCart/BasketView';
// // import ShoppingCart from './components/shoppingCart/ShoppingCart';
// // import HomePage from './pages/HomePage';

// // =======
// // import "./App.css";
// // import Header from "./components/Header";
// // import Women from "./pages/Women";
// // import Man from "./pages/Man";
// // import Kids from "./pages/Kids";
// // import { BrowserRouter, Route, Routes } from "react-router-dom";
// // import ImageSlider from "./components/clothes-page/ImageSlider";
// import ShoppingCart from "./components/shoppingCart/ShoppingCart";
// import ProductsView from "./components/ProductsView/ProductsView";

// // >>>>>>> da58b7ee0e4e48a5b332d1f2d98a1e319ef211ba
// function App() {
  
//    return (
// <>
    
//     <ShoppingCart/>
//     <ProductsView/>
    
    





// </>



// // <<<<<<< HEAD
// //     <div className="App">
    
// //       <HomePage/>
// //     </div>
    
// // =======
// //     <>
// //       <Header />
// //       {/*     <BrowserRouter>
// //       <Routes>
// //         <Route path="/" element={"home page"}/>
// //         <Route  path="/woman" element={<Women bg ={bg} headerFont = {headerFont} setbg = {setbg} />}/>
// //         <Route path="/man" element={<Man />}/>
// //         <Route path="/kids" element={<Kids />}/>
// //       </Routes>
// //     </BrowserRouter>
// //  */}
// //       <ShoppingCart />
// //     </>
// // >>>>>>> da58b7ee0e4e48a5b332d1f2d98a1e319ef211ba
  




// )
// =======
import "./App.css";
import GenderHomePage from "./pages/GenderHomePage";
import { women, men, kids } from "./servises/mainpage";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import smiFinalFooter from "./components/footer/FooterPart3";
import verySmallContainer from "./components/footer/FooterPart2";
import ImgWithText from "./components/footer/ImgWithText";
import HomePage from "./pages/HomePage";
import { useState,useEffect } from "react";
import ProductsView from "./components/ProductsView/ProductsView";
// <<<<<<< HEAD
import ShoppingCart from "./components/shoppingCart/ShoppingCart";
import Man from "./pages/Man"
import "./App.css";
import Login from "./components/login/Login";

// >>>>>>> 78bcedca6a31f3dea78b1d441017e114b7b3aa15
function App() {
  let [genderChoosed, setGenderChoosed] = useState(0);
  
  const [DarkTheme, setDarkTheme] = useState(localStorage.getItem("Dark") ? true : false )

  const element = document.documentElement


  useEffect(() => { if (DarkTheme)
                    {
                      localStorage.setItem("Dark", true)  
                      element.classList.add("dark")
                    }
                    else
                    {
                      localStorage.removeItem("Dark")
                      element.classList.remove("dark")
                    }


                  }, [DarkTheme])
  
  

  return (
    <>
      <Header genderChoosed = {genderChoosed} setGenderChoosed ={setGenderChoosed} DarkModeprops = {setDarkTheme} isDarkTheme = {DarkTheme} />
        <Routes>
          <Route path="/" element={<HomePage setGenderChoosed ={setGenderChoosed} />} />
          <Route
            path="/women"
            element={<GenderHomePage genderData={women} />}
          />
          <Route path="/men" element={<GenderHomePage genderData={men} />} />
          <Route path="/kids" element={<GenderHomePage genderData={kids} />} />
          <Route path="/products" element={<ProductsView />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
        <Footer />
    </>
  );
// >>>>>>> ff1cb6712470df7837841c2069e69a5e07be90c4
}
export default App;
