import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    title: "Rumah Adat Melayu Ketapang",
    // desc: "Desa Gumanano, Kec. Mawasangka",
    images: "/images/Rumahadatmelayu.png",
    url: "/wisataA",
  },
  {
    id: 2,
    title: "Pantai Pecal",
    // desc: "Bau Bau, Kel. Wolio",
    images: "/images/PantaiPecal.jpg",
    url: "/wisataS",
  },
  {
    id: 3,
    title: "Tari Pedang Mualang",
    // desc: "Kel. Watolo, Kec. Mawasangka",
    images: "/images/taripedang.jpg",
    url: "/wisata",
  },
];

const Homecard = () => {
  return (
    <>
      {products.map((product) => (
        <div className="cardhome d-grid g-lg-1">
          <div className="cardhome-container " key={product.id}>
            <div className="text-center ">
              <Link to={product.url}>
                <img
                  src={product.images}
                  className="img-fluid"
                  alt="Gambar Wisata"
                />
                <div className="cardhome-body">
                  <h5 className="text-white fs-6 fw-semibold ">
                    {product.title}
                  </h5>
                  <p className="text-white justify-content-center mt-1">
                    {product.desc}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Homecard;
