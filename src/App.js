import "./App.css";
import GenderHomePage from "./pages/GenderHomePage";
import { women, men, kids } from "./servises/mainpage";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import smiFinalFooter from "./components/footer/FooterPart3";
import verySmallContainer from "./components/footer/FooterPart2";
import ImgWithText from "./components/footer/ImgWithText";
import HomePage from "./pages/HomePage";
import { useState } from "react";
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
          <Route path= "/:itemId" element ={<ProductContainer />}  />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
        <Footer />
    </>
  );
}
export default App;
