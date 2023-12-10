import { Link } from "react-router-dom";

const Navbarcomponent = () => {
  return (
    <>
      <div className="container pt-3">
        <nav className="d-flex space-between align-items-center">
          <div className="container-fluid">
            <a className="navbar-brand text-white fw-bold" href="#">
              <span style={{ color: "#5BBCFC" }}>Discover</span> <br />
              <span style={{ color: "white" }}>Ketapang</span>
            </a>
          </div>
          <Link to="/login">
            <button className="bg-transparent px-3 py-1 text-white border rounded">
              Masuk
            </button>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbarcomponent;
