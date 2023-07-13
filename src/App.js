import { NavLink } from "react-router-dom";
import "./App.css";
import AppRouter from "./AppRouter";

function App() {
  return (
    <div className="App">
      <NavLink to="/">Home</NavLink>
      <AppRouter />
    </div>
  );
}

export default App;
