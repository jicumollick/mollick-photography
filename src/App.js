import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Home></Home>
      <Routes>
        <Route to={"/"} element={<Home></Home>}></Route>
        <Route to={"/home"} element={<Home></Home>}></Route>
        <Route to={"/blog"} element={<Home></Home>}></Route>
        <Route to={"/about"} element={<Home></Home>}></Route>
        <Route to={"/checkout"} element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
