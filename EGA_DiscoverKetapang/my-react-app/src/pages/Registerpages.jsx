import Button from "../Component/Elements/Buttons/Button";
import Bgimage from "../assets/img/welcomeimg.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Registerpages = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigation = useNavigate();

  const Register = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/users', {
        name: name,
        email: email,
        password: password
      });

      // Redirect to login page after successful registration
      navigation('/login');
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data);
      }
    }
  }

  return (
    <>
      <div className="register  h-vh-100">
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
              <div className="text-center text-white lh-1 mb-5">
                <h2 className="fw-bold">
                  <span style={{ color: "#5BBCFC" }}>Discover</span> <br />
                  <span style={{ color: "white" }}>Ketapang</span>
                </h2>
                <p className="small ">
                  Eksplorasi Keindahan Alam dan<br /> Kekayaan Budaya di Ketapang
                </p>
              </div>
              <p className="has text-centered">{msg}</p>
              <form onSubmit={Register} className="login-form">
                <div className="form-group">
                  <label htmlFor="username">Nama Pengguna</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="masukan nama"
                    required
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
                    placeholder="Masukan Email "
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
                    placeholder="masukan kata sandi"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <h6 className="text-white">
                  Sudah punya Akun?{" "}
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
    </>
  );
};

export default Registerpages;
