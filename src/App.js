import './App.css';
import { Fav } from './pages/Fav';
import { HeaderMenu } from './pages/HeaderMenu';
import { Sto } from './pages/Sto';
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
function App() {
  let [genderChoosed, setGenderChoosed] = useState(0);
  return (
    <>
    <Fav/>
    </>
  );
}
export default App;
