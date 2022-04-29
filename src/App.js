import { Link, Outlet } from "react-router-dom";

import NavHeader from "./components/NavHeader/NavHeader";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavHeader>
        <Link to="/">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </NavHeader>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
