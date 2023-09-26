import "./App.css";
import { Fav } from "./pages/Fav";
import { HeaderMenu } from "./pages/HeaderMenu";
import { Sto } from "./pages/Sto";
import "./App.css";
import GenderHomePage from "./pages/GenderHomePage";
import { women, men, kids } from "./servises/mainpage";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/HomePage";
import { useState, useEffect } from "react";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";
import ProductContainer from "./components/ProductPageComponents/ProductContainer";
import ProductViewPage from "./pages/ProductViewPage";
import ScrollToTop from "./components/utilities/ScrollToTop";


function App() {
  const [genderChoosed, setGenderChoosed] = useState(0);
  const [DarkTheme, setDarkTheme] = useState(
    localStorage.getItem("Dark") ? true : false
  );

  const [searchField, setSearchField] = useState("")
  const element = document.documentElement;

  useEffect(() => {
    if (DarkTheme) {
      localStorage.setItem("Dark", true);
      element.classList.add("dark");
    } else {
      localStorage.removeItem("Dark");
      element.classList.remove("dark");
    }
  }, [DarkTheme]);

  return (
    <ScrollToTop>
      <div className="dark:bg-zinc-900">
        <Header
          genderChoosed={genderChoosed}
          setGenderChoosed={setGenderChoosed}
          DarkModeprops={setDarkTheme}
          isDarkTheme={DarkTheme}
          setSearchField={setSearchField}
        />
        <Routes>
          <Route
            path="/"
            element={<HomePage setGenderChoosed={setGenderChoosed} />}
          />
          <Route
            element={
              <GenderHomePage gender={genderChoosed} genderData={women} />
            }
            path="/women"
          />
          <Route
            path="/men"
            element={<GenderHomePage gender={genderChoosed} genderData={men} />}
          />
          <Route
            path="/kids"
            element={
              <GenderHomePage gender={genderChoosed} genderData={kids} />
            }
          />
          <Route path="/products/:query" element={<ProductViewPage searchField={searchField} />} />
          <Route path="/:itemId" element={<ProductContainer />} />
          <Route path="/stores" element={<Sto />} />
          <Route path="/favorites" element={<Fav />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
        <Footer />
      </div>
    </ScrollToTop>
  );
}
export default App;
