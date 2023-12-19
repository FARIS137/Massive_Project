import React from "react";
import { Link } from "react-router-dom";
import image1 from "../../../public/images/gunung.png";
import image2 from "../../../public/images/rumah.png";
import image3 from "../../../public/images/laut.png";
const Cardtop3 = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div
          style={{
            boxShadow: "4px 1px 2px 2px rgba(0, 0, 0, 0.5 )",
            backgroundImage: `url(${image1})`,
            width: "295px",
            height: "335px",
            marginRight: "50px",
            borderRadius: "10px",
          }}
        >
          <div
            className="d-flex flex-column align-items-start "
            style={{
              paddingTop: "13.5rem",
              paddingLeft: "1rem",
            }}
          >
            <h4 className="text-light text-start">
              Paket<br></br> Eksplorasi Alam
            </h4>
            <Link to="/paketwisata1">
              <button className="p-3 rounded ">Lihat Detail &gt;</button>
            </Link>
          </div>
        </div>
        <div
          style={{
            boxShadow: "4px 1px 2px 2px rgba(0, 0, 0, 0.5 )",
            backgroundImage: `url(${image2})`,
            width: "295px",
            height: "335px",
            borderRadius: "10px",
          }}
        >
          <div
            className="d-flex flex-column align-items-start "
            style={{
              paddingTop: "13.7rem",
              paddingLeft: "1rem",
            }}
          >
            <h4 className="text-light text-start">Paket Perjalanan Waktu</h4>
            <Link to="/paketwisata1">
              <button className="p-3 rounded ">Lihat Detail &gt;</button>
            </Link>
          </div>
        </div>
        <div
          style={{
            boxShadow: "4px 2px 2px 2px rgba(0, 0, 0, 0.5 )",
            backgroundImage: `url(${image3})`,
            width: "295px",
            height: "335px",
            marginLeft: "50px",
            borderRadius: "10px",
          }}
        >
          <div
            className="d-flex flex-column align-items-start "
            style={{
              paddingTop: "13.7rem",
              paddingLeft: "1rem",
            }}
          >
            <h4 className="text-light text-start">
              Paket Petualangan dan Kuliner
            </h4>
            <Link to="/paketwisata1">
              <button className="p-3 rounded ">Lihat Detail &gt;</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cardtop3;
