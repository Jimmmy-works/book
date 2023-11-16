import "./App.css";
import HomePage from "./page/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PATHS } from "./contants/path";
import MainLayout from "./layout/MainLayout";
import AboutPage from "./page/AboutPage";
import ContactPage from "./page/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATHS.HOME} element={<MainLayout />}>
          <Route index element={<HomePage />}></Route>
          <Route path={PATHS.ABOUT} element={<AboutPage />}></Route>
          <Route path={PATHS.CONTACT} element={<ContactPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
