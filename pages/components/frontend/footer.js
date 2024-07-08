import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer
          class="footer-section footer"
          style={{
            "background-image":
              "url(../frontend/images/backgrounds/footer-bg.png)",
          }}
        >
          <div class="container">
            <div class="row">
              <div class="col-lg-4 text-center text-lg-left mb-4 mb-lg-0">
                <a href="#">
                  <img
                    class="img-fluid"
                    src="../frontend/images/logo.png"
                    alt="logo"
                  />
                </a>
              </div>

              <nav class="col-lg-8 align-self-center mb-5">
                <ul class="list-inline text-lg-right text-center footer-menu">
                  <li class="list-inline-item active">
                    <a href="#">Home</a>
                  </li>
                  <li class="list-inline-item">
                    <a class="page-scroll" href="#feature">
                      Feature
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="about.html">About</a>
                  </li>
                  <li class="list-inline-item">
                    <a class="page-scroll" href="#team">
                      Team
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="page-scroll" href="#pricing">
                      Pricing
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </nav>

              <nav class="col-12">
                <ul class="list-inline text-lg-right text-center social-icon">
                  <li class="list-inline-item">
                    <a class="facebook" href="#">
                      <i class="ti-facebook"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="twitter" href="#">
                      <i class="ti-twitter-alt"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="linkedin" href="#">
                      <i class="ti-linkedin"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="black" href="#">
                      <i class="ti-github"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
