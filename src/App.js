import "./App.css";
import GenderHomePage from "./pages/GenderHomePage";
import { women, men, kids } from "./servises/mainpage";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route
            path="/women"
            element={<GenderHomePage genderData={women} />}
          />
          <Route path="/men" element={<GenderHomePage genderData={men} />} />
          <Route path="/kids" element={<GenderHomePage genderData={kids} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
