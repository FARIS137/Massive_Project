import Footercomponent from "../Component/Fragments/Footercomponent";
import Navbarcomponent from "../Component/Fragments/Navbarwisata";
import Pemanduimg from "../assets/img/pemanduimg.png";
import P1 from "../assets/img/pemandu/p1.jpg";
import P2 from "../assets/img/pemandu/p2.jpg";
import P3 from "../assets/img/pemandu/p3.jpg";
import P4 from "../assets/img/pemandu/p4.jpg";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Datapemandu = () => {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);

  const handleScroll = () => {
    const element1 = document.querySelector(".animate-in-1");
    const element2 = document.querySelector(".animate-in-2");
    const element3 = document.querySelector(".animate-in-3");
    const element4 = document.querySelector(".animate-in-4");

    if (element1) {
      const elementTop1 = element1.getBoundingClientRect().top;
      setIsVisible1(elementTop1 < window.innerHeight - 100);
    }

    if (element2) {
      const elementTop2 = element2.getBoundingClientRect().top;
      setIsVisible2(elementTop2 < window.innerHeight - 100);
    }

    if (element3) {
      const elementTop3 = element3.getBoundingClientRect().top;
      setIsVisible3(elementTop3 < window.innerHeight - 100);
    }

    if (element4) {
      const elementTop4 = element4.getBoundingClientRect().top;
      setIsVisible4(elementTop4 < window.innerHeight - 100);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const resetScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="pemandu h-vh-100">
        <div
          className="bg-image"
          style={{
            backgroundImage: `url(${Pemanduimg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            height: "100vh",
          }}
        >
          <Navbarcomponent></Navbarcomponent>
          <div className="d-flex  justify-content-center align-items-center h-100 ">
            <h1 className="text-white fw-bold w-50  ">
              Eksplorasi Wisata Terbaik Bersama Pemandu Profesional
            </h1>
          </div>
          <div className="d-flex justify-content-center align-items-center ">
            <h6 className="text-center mx-auto w-50 text-white fw-bold">
              Jadikan perjalanan Anda lebih berarti dengan pemandu wisata kami.
              Hubungi kami sekarang dan buat rencana petualangan Anda!
            </h6>
          </div>
          <div className="mt-4 justify-content-center align-items-center d-flex">
            <h3 className="pemandu-prof text-center mx-auto w-75 text-white fw-bold  p-2 rounded-2">
              PEMANDU WISATA PROFESIONAL
            </h3>
          </div>
        </div>
        <div className="container d-flex justify-content-between align-items-center w-100  mt-5">
          <div
            className={`animate-in-1 ${
              isVisible1 ? "show" : ""
            } row mt-5 mx-auto px-5`}
            onClick={resetScroll}
          >
            <div className="col-8 ">
              <div>
                <h4 className="fw-bold">Nurhayati</h4>
                <h6>Salah satu pemandu wisata terbaik</h6>
                <hr className="w-50" />
                <p className="w-100 ">
                  Nurhayati ialah seorang pemandu wisata profesional dengan
                  pengalaman selama 4 tahun. Memberi informasi dan membimbing
                  pengunjung . Bakat unggul untuk menghibur penonton dan
                  memberikan layanan pelanggan tingkat tinggi. Pengetahuan luas
                  tentang sejarah dan seni visual; mampu mempelajari, menyimpan,
                  dan mengingat sejumlah besar informasi dengan cepat.
                </p>
                <Link to="/profilpemandu">
                  <button className="rounded-2 btn-more ">Selengkapnya</button>
                </Link>
              </div>
            </div>
            <div style={{ paddingLeft: "150px" }} className="col-4">
              <div className="img-pemandu  ">
                <img className="rounded-2" src={P1} alt="dina nf" />
              </div>
            </div>
          </div>
        </div>

        <div className="container  justify-content-center align-items-center w-100  mt-5">
          <hr className="mx-5" />
          <div
            className={`animate-in-2 ${
              isVisible2 ? "show" : ""
            } row mt-5 mx-auto px-5`}
            onClick={resetScroll}
          >
            <div className="col-4 ">
              <div className="img-pemandu  ">
                <img className="rounded-2" src={P2} alt="ika" />
              </div>
            </div>
            <div className="col-8 ">
              <div className=" float-end ">
                <h4 className="fw-bold ">Rendiansyah</h4>
                <h6>Salah satu pemandu wisata terbaik</h6>
                <hr className="w-50 " />
                <p className="w-100 ">
                  Kecemerlangan Rendiansyah sebagai operator tur tercermin dalam
                  sikapnya yang ramah, positif, dan peduli terhadap pengalaman
                  pengunjung, juga mahir bahasa Inggris dan Madarin. Dia mampu
                  menciptakan atmosfer yang hangat dan mengundang, dan selalu
                  siap untuk menjawab pertanyaan serta membantu pengunjung
                  dengan segala kebutuhan mereka. Keberadaannya selama
                  perjalanan tidak hanya memberikan panduan yang kompeten,
                  tetapi juga menciptakan hubungan yang akrab dan bersahabat.
                </p>
                <Link to="/profilpemandu1">
                  <button className="rounded-2 btn-more">Selengkapnya</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container d-flex justify-content-center align-items-center w-100  mt-5">
          <hr className="mx-5" />
          <div
            className={`animate-in-3 ${
              isVisible3 ? "show" : ""
            } row mt-5 mx-auto px-5`}
            onClick={resetScroll}
          >
            <div className="col-8">
              <div>
                <h4 className="fw-bold">Oktavia Putri</h4>
                <h6>Salah satu pemandu wisata terbaik</h6>
                <hr className="w-50" />
                <p className=" ">
                  Sebagai pemandu wisata, Oktavia Putri memiliki pengetahuan
                  yang luas tentang kekayaan alam, budaya, dan sejarah Pulau
                  Ketapang. Dia tumbuh di lingkungan ini dan telah menghabiskan
                  sebagian besar hidupnya untuk menjelajahi setiap sudut pulau
                  tersebut. Dia memiliki wawasan yang dalam tentang ekosistem
                  yang unik di sekitarnya, serta mampu menjelaskan dengan penuh
                  antusiasme mengenai flora, fauna, dan situs-situs wisata yang
                  menakjubkan.
                </p>
                <Link to="/profilpemandu2">
                  <button className="rounded-2 btn-more">Selengkapnya</button>
                </Link>
              </div>
            </div>
            <div className="col-4">
              <div className="img-pemandu  ">
                <img className="rounded-2" src={P3} alt="mila" />
              </div>
            </div>
          </div>
        </div>

        <div className="container  justify-content-center align-items-center w-100  mt-5">
          <hr className="mx-5" />
          <div
            className={`animate-in-4 ${
              isVisible4 ? "show" : ""
            } row mt-5 mx-auto px-5`}
            onClick={resetScroll}
          >
            <div className="col-4 ">
              <div className="img-pemandu  ">
                <img className="rounded-2" src={P4} alt="aldi" />
              </div>
            </div>
            <div className="col-8 ">
              <div className=" float-end ">
                <h4 className="fw-bold ">Agustinus Putra Pamungkas</h4>
                <hr className="w-50 " />
                <p className=" ">
                  Agustinus Putra Pamungkas adalah seorang pemandu wisata yang
                  telah mengakumulasi pengalaman berharga selama 2,5 tahun dalam
                  profesi ini. Dengan latar belakang yang kaya dalam memandu
                  wisatawan, ia menjadi sumber daya berharga untuk setiap
                  perjalanan wisata. Keberadaannya membawa kepercayaan dan
                  kenyamanan bagi pengunjung yang mencari pengalaman yang
                  menarik dan informatif.
                </p>
                <Link to="/profilpemandu3">
                  <button className="rounded-2 btn-more">Selengkapnya</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footercomponent></Footercomponent>
    </>
  );
};

export default Datapemandu;
