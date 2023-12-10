import image1 from "../../assets/img/wisata/wisataS/lambang.png";

import "../../style.css";

function CarouselWS3() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-60">
      <div
        style={{
          width: "30%",
          position: "absolute",
          marginRight: "20rem",
          paddingRight: "100px",
        }}
      >
        <div className="user d-flex gap-4 "></div>
        <img src={image1} />
      </div>
    </div>
  );
}

export default CarouselWS3;
