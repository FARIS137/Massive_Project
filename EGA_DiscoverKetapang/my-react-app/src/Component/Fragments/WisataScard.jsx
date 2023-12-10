import Card from "react-bootstrap/Card";
import CarouselWS2 from "./CarouselWisataS2";
import { Link } from "react-router-dom";

const CenteredCard = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center "
      style={{ height: "35vh" }}
    >
      <Card className="card-box">
        <div className="text-space">
          <Card.Title
            style={{ marginRight: "55px" }}
            className="mt-5 mb-4 fs-2 text-light text-end"
          >
            POPULER
          </Card.Title>
        </div>

        <div className="flex-card-box1">
          <div className="text-box1">
            <Card.Text className="fs-3 text-light text-center">
              Keraton Matan
            </Card.Text>
            <Card.Text className="text-light">
              Keraton Matan merupakan Keraton bekas Kerajaan Tanjungpura yakni
              salah satu kerajaan Melayu tertua di Kalimantan Barat yang sudah
              ada sejak abad ke-8. Kerajaan ini mengalalmi beberapa kali
              perpindahan ibukota Kerajaan, pertama kali terletak di Negeri Baru
              (nama desa saat ini) Kabupaten Ketapang, kemudian pindah ke
              Sukadana (saat ini ibu kota Kabupaten Kayong Utara) pada abad
              ke-14 m dan pada abad ke 15 M berubah nama menjadi Kerajaan Matan,
              sejak Rajanya Sorgi (Giri Kesuma) memeluk Islam.
            </Card.Text>
            <Link
              style={{ textDecoration: "none" }}
              to="/detailwisataS1"
              className="d-flex justify-content-center"
            >
              <button className="rounded-2 btn-more">Selengkapnya</button>
            </Link>
          </div>
          <CarouselWS2 />
        </div>
      </Card>
    </div>
  );
};

export default CenteredCard;
