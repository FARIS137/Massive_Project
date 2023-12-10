import image1 from "../../assets/img/wisata/wisataS/benteng1.png";

import "../../style.css";

function CarouselWS2() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-60">
      <div style={{ width: "40%", position: "absolute", marginRight: "30rem" }}>
        <div className="user d-flex gap-4 "></div>
        <img src={image1} />
      </div>
    </div>
  );
}

export default CarouselWS2;
