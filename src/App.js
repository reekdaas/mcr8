import { NavLink } from "react-router-dom";
import "./App.css";
import AppRouter from "./AppRouter";
import { data } from "./data/data";
import Header from "./component/header/header";

function App() {
  console.log(data);
  return (
    <div className="App">
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;
