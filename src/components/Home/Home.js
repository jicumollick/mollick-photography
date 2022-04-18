import React from "react";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Services></Services>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
