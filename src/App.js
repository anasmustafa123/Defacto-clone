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
function App() {
  let [genderChoosed, setGenderChoosed] = useState(0);
  return (
    <>
      <BrowserRouter>
      <Header genderChoosed = {genderChoosed} setGenderChoosed ={setGenderChoosed}  />
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
      </BrowserRouter>
    </>
  );
}
export default App;
