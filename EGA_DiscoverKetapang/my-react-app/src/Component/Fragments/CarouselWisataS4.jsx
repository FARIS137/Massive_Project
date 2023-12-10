import image1 from "../../assets/img/wisata/wisataS/gambar4.png";

import "../../style.css";

function CarouselWS4() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-60">
      <div
        style={{
          width: "55%",
          position: "absolute",
          marginLeft: "20rem",
          paddingLeft: "200px",
        }}
      >
        <div className="user d-flex gap-4 "></div>
        <img src={image1} />
      </div>
    </div>
  );
}

export default CarouselWS4;
