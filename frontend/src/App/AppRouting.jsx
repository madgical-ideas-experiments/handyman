import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginMain from "./LoginMain";
import UserMenu from "./UserMenu";
import App from "./App";
import { useSelector } from "react-redux";
const AppRouting = () => {
  const { isLogin } = useSelector((state) => state.user);
  console.log(isLogin);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLogin ? <App /> : <LoginMain></LoginMain>} />
        <Route path="/LoginMain" element={isLogin ? <App /> : <LoginMain />} />
        <Route path="/UserMenu" element={<UserMenu />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouting;
