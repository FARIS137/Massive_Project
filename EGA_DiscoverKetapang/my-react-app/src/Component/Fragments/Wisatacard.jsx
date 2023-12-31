import Card from "react-bootstrap/Card";
import pic1 from "../../assets/img/WisataB1.png";
import pic2 from "../../assets/img/WisataB2.png";
import pic3 from "../../assets/img/WisataB3.png";
import "../../style.css";
const CenteredCard = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center "
      style={{ height: "75vh" }}
    >
      <Card className="card-box">
        <div className="text-space">
          <Card.Title className="mt-5 mb-4 fs-2 text-light text-center">
            Wisata Budaya
          </Card.Title>
          <div className="title-desc">
            <Card.Text className="text-light text-center">
              Ketapang adalah salah satu kabupaten di Provinsi Kalimantan Barat
            </Card.Text>
            <Card.Text className="text-light text-center">
              Indonesia. Kabupaten ini memiliki beragam potensi wisata budaya
              yang
            </Card.Text>
            <Card.Text className="text-light text-center">menarik.</Card.Text>
          </div>
        </div>
        <div className="flex-card-box">
          <div className="text-box">
            <Card.Text
              style={{ fontWeight: "700" }}
              className="fs-3 fst-italic  text-light text-center"
            >
              Festival
            </Card.Text>
            <Card.Text className="text-light me-4">
              Festival Budaya Ketapang biasanya menampilkan beragam kegiatan dan
              pertunjukan budaya, seperti tarian tradisional, musik tradisional,
              pameran seni, pameran kerajinan tangan, serta kuliner khas daerah
              tersebut. Acara ini juga dapat mencakup berbagai lomba seperti
              lomba memasak, lomba tari, dan kompetisi seni.
            </Card.Text>
          </div>
          <img
            style={{ boxShadow: "1px 2px 10px 4px rgba(0, 0, 0, 0.6 )" }}
            src={pic1}
          ></img>
          <img
            style={{ boxShadow: "1px 2px 10px 4px rgba(0, 0, 0, 0.6 )" }}
            src={pic3}
          ></img>
          <img
            style={{ boxShadow: "1px 2px 10px 4px rgba(0, 0, 0, 0.6 )", marginRight: "2rem" }}
            src={pic2}
          ></img>
        </div>
      </Card>
    </div>
  );
};

export default CenteredCard;
