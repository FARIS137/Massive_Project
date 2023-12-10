import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import imageAdat from "../../assets/img/wisata/wisataS/RumahAdatMelayu.png";
import imageMakam from "../../assets/img/wisata/wisataS/imagemakam.png";
import "./WisataScard.css";

const CenteredCard2 = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "37vh" }}
    >
      <Card className="card-box2 mx-3">
        <div className="flex-card-box2">
          <div className="text-box">
            <Card.Text className="fs-4 text-light text-center">
              Rumah Adat Melayu
            </Card.Text>
            <img src={imageAdat} alt="Wisata Image" />
            <Link
              to="/detailwisataS2"
              className="d-flex justify-content-center"
              style={{ textDecoration: "none" }}
            >
              <button className="rounded-2 btn-more">Selengkapnya</button>
            </Link>
          </div>
        </div>
      </Card>

      <Card className="card-box2 mx-3">
        <div className="flex-card-box2">
          <div className="text-box">
            <Card.Text className="fs-4 text-light text-center">
              Rumah Adat Dayak
            </Card.Text>
            <img src={imageMakam} alt="Wisata Image" />
            <Link
              to="/detailwisataS3"
              className="d-flex justify-content-center"
              style={{ textDecoration: "none" }}
            >
              <button className="rounded-2 btn-more">Selengkapnya</button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CenteredCard2;
