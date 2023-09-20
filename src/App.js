import "./App.css";
import GenderHomePage from "./pages/GenderHomePage";
import { women, men, kids } from "./servises/mainpage";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import smiFinalFooter from "./components/footer/smi final footer";
import verySmallContainer from "./components/footer/very samll container";
import ImgWithText from "./components/footer/ImgWithText";
function App() {
  return (
    <>
      {/*    <Header />
      <BrowserRouter>
        <Routes>
          <Route
            path="/women"
            element={<GenderHomePage genderData={women} />}
          />
          <Route path="/men" element={<GenderHomePage genderData={men} />} />
          <Route path="/kids" element={<GenderHomePage genderData={kids} />} />
        </Routes>
      </BrowserRouter> */}
      <div>
        <Footer />
      </div>
    </>
  );
}
export default App;
