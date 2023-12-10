import Carousel from "react-bootstrap/Carousel";
import React from "react";
import image1 from "../../assets/img/wisata/wisataS/Carousel1.png";
import image2 from "../../assets/img/wisata/wisataS/Carousel2.png";
import image3 from "../../assets/img/wisata/wisataS/Carousel3.png";
import image4 from "../../assets/img/wisata/wisataS/Carousel4.png";
import "../../style.css";

function CarouselWS() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-60">
      <div style={{ width: "70%" }}>
        <img style={{ width: "70%" }} src={image1} alt="First slide" />
      </div>
    </div>
  );
}

export default CarouselWS;
