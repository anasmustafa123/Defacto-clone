import "./App.css";
import Header from "./components/Header";
import Women from "./pages/Women";
import Man from "./pages/Man";
import Kids from "./pages/Kids";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ImageSlider from "./components/clothes-page/ImageSlider";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";
function App() {
  return (
    <>
      <Header />
      {/*     <BrowserRouter>
      <Routes>
        <Route path="/" element={"home page"}/>
        <Route  path="/woman" element={<Women bg ={bg} headerFont = {headerFont} setbg = {setbg} />}/>
        <Route path="/man" element={<Man />}/>
        <Route path="/kids" element={<Kids />}/>
      </Routes>
    </BrowserRouter>
 */}
      <ShoppingCart />
    </>
  );
}

export default App;
