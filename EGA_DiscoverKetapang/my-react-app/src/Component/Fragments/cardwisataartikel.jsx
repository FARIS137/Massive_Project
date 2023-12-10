import Card from "react-bootstrap/Card";
import CarouselWS3 from "./CarouselWisataS3";
import CarouselWS4 from "./CarouselWisataS4";
import { Link } from "react-router-dom";

const CenteredCard = () => {
  return (
    <div className="d-flex justify-content-center align-items-center ">
      <Card style={{ borderRadius: "30px" }} className="card-box">
        <div className="text-space">
          <Card.Title
            style={{ marginRight: "55px" }}
            className="mt-5 mb-4 fs-2 text-light text-end"
          ></Card.Title>
        </div>

        <div className="flex-card-box1">
          <div className="text-box1">
            <Card.Text className="fs-3 text-light text-center">
              Kabupaten Ketapang
            </Card.Text>
            <Card.Text className="text-light">
              Kabupaten Ketapang adalah salah satu Daerah Tingkat II di provinsi
              Kalimantan Barat. Ibu kota kabupaten ini terletak di Kota
              Ketapang, sebuah kota yang terletak di tepi Sungai Pawan.
              Kabupaten ini memiliki luas wilayah 31.240,74 km² dan berpenduduk
              sebesar 573.074 Jiwa (2019). Kabupaten Ketapang merupakan
              kabupaten terluas dengan pantai yang memanjang dari selatan ke
              utara. Daerah ini memiliki topografi beragam, dari dataran
              berawa-rawa hingga daerah berbukit-bukit dengan hutan yang masih
              alami.
            </Card.Text>
          </div>
          <CarouselWS3 />
        </div>
        <div className="flex-card-box1">
          <CarouselWS4 />
          <div className="text-box2">
            <Card.Text className="fs-3 text-light text-center">
              Kabupaten Ketapang
            </Card.Text>
            <Card.Text className="text-light">
              Saat ini Kabupaten Ketapang dipimpin oleh Bupati Martin Rantan,
              S.H. yang telah menjabat dari Desember 2020 (2 Periode). Kini
              kantor bupati terletak Jl. Jendral Sudirman No. 37 Ketapang. Di
              bawah kepemimpinan Bupati saat ini, Kabupaten Ketapang tidak hanya
              mengalami perkembangan dalam berbagai sektor, termasuk
              infrastruktur, pendidikan, dan kesejahteraan masyarakat, tetapi
              juga berkomitmen untuk memberikan pelayanan yang lebih baik dan
              meningkatkan kualitas hidup bagi seluruh masyarakat.
            </Card.Text>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CenteredCard;
