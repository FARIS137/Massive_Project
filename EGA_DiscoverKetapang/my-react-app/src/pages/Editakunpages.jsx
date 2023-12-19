import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Navbarwisata from "../Component/Fragments/Navbarwisata";
import Footercomponent from "../Component/Fragments/Footercomponent";
import Bgimage from "../assets/img/pemandu/BgAkun.png";
import image1 from "../assets/img/pemandu/user-icon-on-transparent-background-free-png.webp";
import image2 from "../assets/img/pemandu/scrollleft.png";

const Editakunpages = () => {
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newpassword, setnewPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigation = useNavigate();

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
    } catch (error) {
      // Handle error
      console.error("Error refreshing token:", error);
    }
  };

  const Simpan = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put("http://localhost:5000/users", {
        name,
        email,
        password,
        newpassword,
      });

      setSuccessMessage("Password berhasil diubah!");
      

      console.log(response.data);
    } catch (error) {
      setMsg(error.response.data.error);
    }
  };

  const closeSuccessMessage = () => {
    setSuccessMessage("");

    window.location.reload();
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
            className="text-wrapper"
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
            <div className="backakun d-block">
              <Link to="/akunsaya">
                <img src={image2} alt="" />
              </Link>
            </div>

            <div className="d-flex gap-5">
              <div className="kotak col-md-4 text-center text-gray mt-5 ms-2">
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
                </div>
              </div>

              <div className="col-md-7 text-center text-white ml-auto">
                <h2 className="mb-4 fw-bold">Edit Data</h2>
                <form className="login-form" onSubmit={Simpan}>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      id="name"
                      name="email"
                      placeholder="Masukkan username"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Masukkan email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="passwordL">Password Lama</label>
                    <input
                      type="password"
                      id="passwordL"
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      placeholder="Masukkan password lama"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">Password Baru</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Masukkan password baru"
                      value={newpassword}
                      onChange={(e) => setnewPassword(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="ms-auto rounded-2">
                    Simpan
                  </button>
                </form>
              </div>
              {successMessage && (
                <div className="success-message">
                  <p>{successMessage}</p>
                  <button onClick={closeSuccessMessage}>Tutup</button>
                </div>
              )}
            </div>

            <div className="button" style={{ marginLeft: "860px" }}></div>
          </div>
        </div>

        <Footercomponent />
      </div>
    </>
  );
};

export default Editakunpages;