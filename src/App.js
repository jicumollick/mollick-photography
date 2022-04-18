import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Checkout from "./components/Checkout/Checkout";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path={"/"} element={<Home></Home>}></Route>
        <Route path={"home"} element={<Home></Home>}></Route>
        <Route path={"blog"} element={<Blog></Blog>}></Route>
        <Route path={"about"} element={<About></About>}></Route>
        <Route
          path={"checkout"}
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }
        ></Route>
        <Route path={"login"} element={<Login></Login>}></Route>
        <Route path={"*"} element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
