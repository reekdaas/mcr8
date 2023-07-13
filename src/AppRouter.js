import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
