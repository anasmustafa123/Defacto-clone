import "./App.css";
import { Fav } from "./pages/Fav";
import { HeaderMenu } from "./pages/HeaderMenu";
import { Sto } from "./pages/Sto";
import "./App.css";
import GenderHomePage from "./pages/GenderHomePage";
import { women, men, kids } from "./servises/mainpage";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/HomePage";
import { useState } from "react";
import "./App.css";
import Login from "./components/login/Login";

import "./App.css";
import ProductsView from "./components/ProductsView/ProductsView";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";
import Man from "./pages/Man";
import ProductViewPage from "./pages/ProductViewPage";
import ProductContainer from "./components/ProductPageComponents/ProductContainer";
function App() {
  let [genderChoosed, setGenderChoosed] = useState('w');
  return (
    <>
      <Header genderChoosed = {genderChoosed} setGenderChoosed ={setGenderChoosed}  />
        <Routes>
          <Route path="/" element={<HomePage setGenderChoosed ={setGenderChoosed} />} />
          <Route
            element={<GenderHomePage gender={genderChoosed}  genderData={women} />}
            path="/women"
          />
          <Route path="/men" element={<GenderHomePage gender={genderChoosed}  genderData={men} />} />
          <Route path="/kids" element={<GenderHomePage gender={genderChoosed} genderData={kids} />} />
          <Route path="/products/:query" element={<ProductViewPage />} />
          <Route path= "/:itemId" element ={<ProductContainer />}/>
             <Route path="/stores" element={<Sto />} />
             <Route path="/favorites" element={<Fav />} /> 
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
        <Footer />
    </>
  );
}
export default App;
