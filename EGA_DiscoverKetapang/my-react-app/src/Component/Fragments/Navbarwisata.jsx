import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";
import Imguser from "../../assets/img/pemandu/user-icon-on-transparent-background-free-png.webp";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const Navbarwisata = () => {
  const [navBackground, setNavBackground] = useState(false);
  const [userData, setUserData] = useState(null);
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    refreshToken();
  }, []);
  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:5000/token");
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
      setName(decoded.name);
      setExpire(decoded.exp);
    } catch (error) {
      if (error.response) {
        navigate("/");
      }
    }
  };

  const Logout = async () => {
    try {
      await axios.delete("http://localhost:5000/logout");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const changeBackground = () => {
    if (window.scrollY >= 70) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);
  const activeStyle = {
    backgroundColor: "gray",
    color: "blue",
    transition: "background-color 0.3s ease-in-out",
  };
  return (
    <Navbar
      className={`Nav ${navBackground ? "bg-blue" : ""}`}
      expand="lg"
      fixed="top"
    >
      <Container>
        <div className="container-fluid">
          <a className="navbar-brand text-white fw-bold" href="#">
            <span style={{ color: "#5BBCFC" }}>Discover</span> <br />
            <span style={{ color: "white" }}>Ketapang</span>
          </a>
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/home"
                style={{ color: "white", marginRight: "30px" }}
                activeStyle={activeStyle}
              >
                Beranda
              </Nav.Link>
            </Nav.Item>
            <NavDropdown
              id="wisata-dropdown"
              title="Wisata"
              menuVariant="white"
              style={{ marginRight: "30px" }}
            >
              <NavDropdown.Item as={Link} to="/wisataA">
                Alam
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/wisataS">
                Sejarah
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/wisata">
                Budaya
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              id="pemandu-dropdown"
              title="Pemandu"
              menuVariant="white"
              style={{ marginRight: "30px" }}
            >
              <NavDropdown.Item as={Link} to="/datapemandu">
                Data pemandu
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/daftarpemandu">
                Daftar
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/testimoni"
                style={{ color: "white", marginRight: "30px" }}
                activeStyle={activeStyle}
              >
                Testimoni
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/artikel"
                style={{ color: "white", marginRight: "30px" }}
                activeStyle={activeStyle}
              >
                Artikel
              </Nav.Link>
            </Nav.Item>
            <img
              src={Imguser}
              alt="Chesa"
              className="mt-2"
              style={{ height: "24px", width: "100%" }}
            />
            <NavDropdown id="user-dropdown" title={name} menuVariant="white" style={{marginRight: "2rem"}}>
              <NavDropdown.Item as={Link} to="/akunsaya">
                Akun saya
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} onClick={Logout}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarwisata;
