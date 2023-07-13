import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import EventPage from "./pages/eventPage/eventPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:id" element={<EventPage />} />
    </Routes>
  );
}
