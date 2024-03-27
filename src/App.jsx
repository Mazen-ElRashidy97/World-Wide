import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { themeSettings } from "./themes";
import { useMemo } from "react";
import HomePage from "./pages/homePage/HomePage";
import ProfilePage from "./pages/profilePage/ProfilePage";
import Login from "./pages/loginPage/Login";
import Register from "./pages/regPage/Register";
import ErrorPage from "./pages/errorPage/errorPage";
import { useSelector } from "react-redux";
import Navbar from "./components/navbar/navbar";
import { useEffect } from "react";

function App() {
  const Mode = useSelector((state) => state.auth.mode);

  const theme = useMemo(() => {
    return createTheme(themeSettings(Mode));
  }, [Mode]);
  const isHome = location.pathname === "/";

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar/>
          {/* {!isHome && <Navbar></Navbar>} */}
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/home" element={<HomePage />}></Route>
            <Route path="/profile/:userId" element={<ProfilePage />}></Route>
            <Route path="/reg" element={<Register />}></Route>
            <Route path="*" element={<ErrorPage />}></Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
