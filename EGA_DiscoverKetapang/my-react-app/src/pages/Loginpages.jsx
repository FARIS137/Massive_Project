import Button from "../Component/Elements/Buttons/Button";
import Bgimage from "../assets/img/welcomeimg.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Loginpages = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [submitted, setSubmitted] = useState(false); // Track if the form is submitted
  const navigation = useNavigate();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/login", {
        email: email,
        password: password,
      });
      navigation("/home");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
        setSubmitted(true); // Set submitted to true after form submission
        setTimeout(() => {
          setMsg(""); // Reset msg state after 5 seconds
        }, 2000);
      }
    }
  };

  return (
    <>
      <div className="login">
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
          {" "}
          <div className="body">
            <div className="login-container">
              <div className="text-center text-white lh-1 mb-2">
                <h2 className="fw-bold">
                  <span style={{ color: "#5BBCFC" }}>Discover</span> <br />
                  <span style={{ color: "white" }}>Ketapang</span>
                </h2>
                <p className="small ">
                  Eksplorasi Keindahan Alam dan <br /> Kekayaan Budaya di
                  Ketapang
                </p>
              </div>
              <form onSubmit={Auth} className="login-form">
                <p
                  style={{
                    color: "white",
                    fontSize: "15px",
                    padding: "10px",
                    borderRadius: "8px",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                    backgroundColor: submitted && msg ? "red" : "transparent", // Updated condition
                    transition: "opacity 0.5s ease-in-out",
                  }}
                  className="has text-centered"
                >
                  {msg}
                </p>
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
                <h6 className="text-white text-start w-100">
                  Belum punya akun?{" "}
                  <Link to="/register" className="text-decoration-none ">
                    Daftar di sini
                  </Link>
                </h6>

                <Button type="submit">Login</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loginpages;
