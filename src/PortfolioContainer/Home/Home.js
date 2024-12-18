import React from "react";
import Profile from "./Profile/Profile";
import "./Home.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function Home(props) {
  return (
    <div className="home-container" id={props.id || ""}>
      <Header />
      <Profile />
      <Footer />
    </div>
  );
}

export default Home;
