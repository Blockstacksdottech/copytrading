import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <section className="fixed-top navigation">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light">
              <a className="navbar-brand" href="./">
                <img src="../logo.png" alt="logo" className="img-fluid w-20" />{" "}
                COPYTRADING
              </a>
              <button
                className="navbar-toggler border-0"
                type="button"
                data-toggle="collapse"
                data-target="#navbar"
                aria-controls="navbar"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse text-center" id="navbar">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="./">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Supported Brokers
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Supported Platforms
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="./pricing">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="./contact">
                      Contact
                    </a>
                  </li>
                </ul>
                <div className="btn-group">
                  <a href="./login" className="btn btn-login primary-shadow">
                    LOGIN
                  </a>
                  <a
                    href="./register"
                    className="btn btn-yellow primary-shadow"
                  >
                    JOIN US
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </section>
      </>
    );
  }
}
