import React from "react";
import { ReactComponent as LogoSVG } from "../../pics/image2vector.svg";

const MainPage = () => {
  return (
    <div className="MainPageDiv">
      <div className="MainPageHeader">
        <h1> Main Page </h1>
      </div>
      <div className="LogoTextDiv">
        <div className="LogoSvgImg">
          <LogoSVG />
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
