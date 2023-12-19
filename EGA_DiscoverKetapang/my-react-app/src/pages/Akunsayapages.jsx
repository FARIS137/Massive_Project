import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footercomponent from "../Component/Fragments/Footercomponent";
import Navbarwisata from "../Component/Fragments/Navbarwisata";
import Bgimage from "../assets/img/pemandu/BgAkun.png";
import image1 from "../assets/img/pemandu/user-icon-on-transparent-background-free-png.webp";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const Akunsayapages = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    refreshToken();
  }, []);
  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:5000/token");
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
      setName(decoded.name);
      setEmail(decoded.email);
    } catch (error) {}
  };

  return (
    <>
      <div className="editakun h-vh-100">
        <div
          className="bg-image"
          style={{
            backgroundImage: `url(${Bgimage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center top",
            height: "110vh",
          }}
        >
          <Navbarwisata />

          <div
            className="text-wrapper "
            style={{
              color: "white",
              fontSize: "64px",
              fontWeight: "700",
              lineHeight: "30px",
              textAlign: "center",
              paddingTop: "370px",
              fontFamily: "poppins",
            }}
          >
            Halaman Profil
          </div>
        </div>

        <div className="akun-container justify-content-center align-items-center">
          <div className="akun row mx-auto p-4 gap-3">
            <div className="backakun d-block"></div>
            <div className="d-flex gap-5">
              <div className="kotak col-md-4 text-center text-gray mt-5  ms-2 ">
                <div className="mb-4">
                  <img
                    src={image1}
                    alt="Profil Aldi"
                    className="img-fluid rounded-circle"
                    style={{
                      width: "200px",
                      height: "200px",
                      objectFit: "cover",
                      paddingBottom: "7px",
                    }}
                  />
                  <p className="text-white display-6 fw-bold mt-3">{name}</p>
                </div>
              </div>
              <div className="col-md-7 text-center text-white ml-auto">
                <h2 className="mb-4 fw-bold">Akun Saya</h2>
                <form className="login-form mt-5">
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={name}
                      readOnly
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      readOnly
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="button" style={{ marginLeft: "880px" }}>
              <Link
                to="/edit"
                smooth={true}
                duration={300}
                className="button ms-auto rounded-2"
              >
                <button className="ms-auto rounded-2">Edit</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footercomponent />
    </>
  );
};

export default Akunsayapages;
