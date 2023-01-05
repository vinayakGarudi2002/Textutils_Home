import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.css";
const Navbar = (props) => {
  const [bg, setBg] = useState(false);

  const background = () => {
    if (props.mode === "light") {
      setBg(true);
    }
    if (props.mode !== "light") {
      props.darkmode("white");
    }
      if(bg){
        setBg(false);
      }
    // props.darkmode()
  };

  const clr = {
    green: "success",
    light: "light",
    grey: "secondary",
  };
  // var vclr = props.mode;
  return (
    <>
      <nav
        className={` navbar navbar-expand-lg bg-${clr.vclr} navbar-${
          props.mode
        } text-${props.mode === "light" ? "dark" : "light"}`}
      >
        <div className="container-fluid ">
          {/* <Link className={"navbar-brand "} to="/">
            {props.title}
          </Link> */}
          <a className={"navbar-brand "} href="#">{props.title}</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              
            </ul>
            <form className="d-flex" role="search">
              {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button> */}
             
                <button
                  className="btn btn-secondary btn-bg-controler"
                  onClick={(e) => {
                    e.preventDefault();
                    background();
                  }}
                >
                  {props.mode === "light"?"Enable":"Disable"} Dark Mode
                </button>
                {/* <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"  onClick={background}

  /> */}
                {/* <label className="form-check-label" htmlfor="flexSwitchCheckDefault">Enable Dark Mode</label> */}
              
              {bg && (
                <select
                  className="form-select bgoptions"
                  size="3"
                  aria-label="size 3 select example"
                  onChange={(e) => {
                    console.log(e.target.value);
                    // props.setBgColor()
                    props.darkmode(e.target.value);

                    setBg(false);
                  }}
                >
                  <option value="green">green</option>
                  <option value="grey">Grey</option>
                  <option value="black">Black</option>
                </select>
              )}
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Title",
  about: "About us",
};