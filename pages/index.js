import React, { Component } from "react";
import Head from "next/head";
import Navbar from "./components/frontend/navbar";
import Headtag from "./components/frontend/headtag";
import Footer from "./components/frontend/footer";
import Scripttag from "./components/frontend/scripttag";

export default class Index extends Component {
  render() {
    return (
      <>
        <Head>
          <title></title>
        </Head>
        <Headtag />
        <Navbar />
        {/* Hero Section */}
        <section
          class="hero-section hero"
          data-background=""
          style={{
            "background-image":
              "url(../frontend/images/hero-area/banner-bg.png)",
          }}
        >
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center zindex-1">
                <h1 class="mb-3">
                  Take Control of your
                  <br />
                  Project and Team
                </h1>
                <p class="mb-4 text-white">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum
                  <br />
                  dolore eu fugiat nulla pariatur.
                </p>
                <a href="#" class="btn btn-secondary btn-lg ">
                  explore us
                </a>

                <img
                  class="img-fluid w-100 banner-image"
                  src="../frontend/images/hero-area/banner-img.png"
                  alt="banner-img"
                />
              </div>
            </div>
          </div>
          <div id="scene">
            <img
              class="img-fluid hero-bg-1 up-down-animation"
              src="../frontend/images/background-shape/feature-bg-2.png"
              alt=""
            />
            <img
              class="img-fluid hero-bg-2 left-right-animation"
              src="../frontend/images/background-shape/seo-ball-1.png"
              alt=""
            />
            <img
              class="img-fluid hero-bg-3 left-right-animation"
              src="../frontend/images/background-shape/seo-half-cycle.png"
              alt=""
            />
            <img
              class="img-fluid hero-bg-4 up-down-animation"
              src="../frontend/images/background-shape/green-dot.png"
              alt=""
            />
            <img
              class="img-fluid hero-bg-5 left-right-animation"
              src="../frontend/images/background-shape/blue-half-cycle.png"
              alt=""
            />
            <img
              class="img-fluid hero-bg-6 up-down-animation"
              src="../frontend/images/background-shape/seo-ball-1.png"
              alt=""
            />
            <img
              class="img-fluid hero-bg-7 left-right-animation"
              src="../frontend/images/background-shape/yellow-triangle.png"
              alt=""
            />
            <img
              class="img-fluid hero-bg-8 up-down-animation"
              src="../frontend/images/background-shape/service-half-cycle.png"
              alt=""
            />
            <img
              class="img-fluid hero-bg-9 up-down-animation"
              src="../frontend/images/background-shape/team-bg-triangle.png"
              alt=""
            />
          </div>
        </section>

        <Footer />
        <Scripttag />
      </>
    );
  }
}
