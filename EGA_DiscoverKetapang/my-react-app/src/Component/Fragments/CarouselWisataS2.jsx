import image1 from "../../assets/img/wisata/wisataS/benteng1.png";

import "../../style.css";

function CarouselWS2() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-60">
      <div style={{ width: "40%", position: "absolute", marginRight: "30rem" }}>
        <div className="user d-flex gap-4 "></div>
        <img style={{boxShadow: "1px 2px 10px 4px rgba(0, 0, 0, 0.4)"}} src={image1} />
      </div>
    </div>
  );
}

export default CarouselWS2;
