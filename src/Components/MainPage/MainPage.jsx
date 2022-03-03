import React from "react";
import LogoPng from "../../pics/list.png";

const MainPage = () => {
  return (
    <div className="MainPageDiv">
      <div className="MainPageHeader">
        <h1> Main Page </h1>
      </div>
      <div className="LogoTextDiv">
        <div className="LogoSvgImg">
          <img src={LogoPng} alt="fireSpot" />
        </div>
        <div className="MainPageAbout">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aut beatae
            delectus dolorem, doloribus error harum, iusto libero mollitia nisi,
            nostrum obcaecati quia sit tempora voluptatem voluptatum.Dolorem ea
            eos modi. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit.Aut beatae delectus dolorem, doloribus error harum, iusto
            libero mollitia nisi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
