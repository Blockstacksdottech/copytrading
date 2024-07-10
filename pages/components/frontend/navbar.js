import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <section class="fixed-top navigation">
          <div class="container-fluid">
            <nav class="navbar navbar-expand-lg navbar-light">
              <a class="navbar-brand" href="index.html">
                <img src="../logo.png" alt="logo" className="img-fluid w-20" />{" "}
                COPYTRADING
              </a>
              <button
                class="navbar-toggler border-0"
                type="button"
                data-toggle="collapse"
                data-target="#navbar"
                aria-controls="navbar"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse text-center" id="navbar">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="./">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Supported Brokers
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Supported Platforms
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Pricing
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Blog
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
                <a href="#" class="btn btn-light ml-lg-3 primary-shadow">
                  JOIN US
                </a>
              </div>
            </nav>
          </div>
        </section>
      </>
    );
  }
}
