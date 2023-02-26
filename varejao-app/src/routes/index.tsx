import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "../pages/Home";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*"  element={<Navigate replace to={"/"} />}/>
    </Routes>
  );
};
