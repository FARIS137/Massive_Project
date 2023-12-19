import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../Component/Elements/Buttons/Button";
import Bgimage from "../assets/img/welcomeimg.png";

const RegisterPages = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [componentMounted, setComponentMounted] = useState(false);

  const navigation = useNavigate();

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name,
        email,
        password,
      });

      // Set the user name in state
      navigation("/login");
    } catch (error) {
      if (error.response) {
        const { data } = error.response;
        let errorMessage = "";

        if (data.error.includes("email")) {
          errorMessage = "Email sudah terdaftar";
        } else {
          errorMessage = "Email atau Nama sudah terdaftar";
        }

        setErrorMsg(errorMessage);

        setTimeout(() => {
          setErrorMsg("");
        }, 3000);
      } else {
        setErrorMsg("Gagal melakukan registrasi");
      }
    }
  };

  useEffect(() => {
    setComponentMounted(true);
  }, []);

  return (
    <div className="register h-vh-100">
      <div
        className="bg-image"
        style={{
          backgroundImage: `url(${Bgimage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          height: "100vh",
        }}
      >
        <div className={`body ${componentMounted ? "fade-in" : ""} h-vh-100`}>
          <div className="login-container">
            <div className="text-center text-white lh-1 mb-5">
              <h2 className="fw-bold">
                <span style={{ color: "#5BBCFC" }}>Discover</span> <br />
                <span style={{ color: "white" }}>Ketapang</span>
              </h2>
              <p className="small">
                Eksplorasi Keindahan Alam dan
                <br /> Kekayaan Budaya di Ketapang
              </p>
            </div>
            {errorMsg && (
              <p
                className={`has text-centered ${
                  componentMounted ? "fade-in" : ""
                }`}
                style={{
                  color: "white",
                  fontSize: "15px",
                  padding: "10px",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "red",
                  transition: "opacity 0.5s ease-in-out",
                }}
              >
                {errorMsg}
              </p>
            )}
            <form onSubmit={registerUser} className="login-form">
              <div className="form-group">
                <label htmlFor="username">Nama Pengguna</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Masukkan nama"
                  required
                  maxLength={10}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Masukkan email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Kata sandi</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Masukkan kata sandi"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <h6 className="text-white">
                Sudah punya akun?{" "}
                <Link to="/login" className="text-decoration-none">
                  Masuk sekarang
                </Link>
              </h6>
              <Button type="submit">Register</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPages;
