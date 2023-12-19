
import image1 from "../../assets/img/wisata/wisataS/Carousel1.png";

import "../../style.css";

function CarouselWS() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-60">
      <div style={{ width: "70%" }}>
        <img style={{ width: "70%", marginBottom: "4rem" , boxShadow: "1px 2px 10px 4px rgba(0, 0, 0, 0.6)" }} src={image1} alt="First slide" />
      </div>
    </div>
  );
}

export default CarouselWS;
