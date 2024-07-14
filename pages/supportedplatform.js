import React, { Component } from "react";
import Head from "next/head";
import Navbar from "./components/frontend/navbar";
import Headtag from "./components/frontend/headtag";
import Footer from "./components/frontend/footer";
import Scripttag from "./components/frontend/scripttag";

export default class Supportedplatform extends Component {
  render() {
    return (
      <>
        <Head>
          <title>CopyTrading | Supported Broker</title>
        </Head>
        <Headtag />
        <Navbar />

        <section className="section-lg about position-relative">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="section-title text-center">
                  Supported Platform
                </h2>
                <p>
                  We support a growing list of platforms, and many new ones will
                  be added soon. Remember that the platform you choose will
                  depend on what kind of strategy you want to trade. To trade a
                  forex strategy, you'll need a platform that allows forex
                  trading, for example.
                </p>
                <p>
                  In most instances, these platforms apply to Trade Leaders,
                  users that are managing strategies. Investors do not require a
                  platform or need to have any software running to AutoTrade
                  CopyTrading strategies.
                </p>
                <p>
                  CopyTrading PlatformTransmit connectors have no broker
                  requirements and let you manage a model portfolio strategy on
                  Collective2 using a Simulated account.
                </p>
              </div>
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-md-6 col-lg-4 mx-auto mb-5 mb-lg-0">
                    <div className="card h-100 rounded text-center pricing-table bg-white shadow-primary">
                      <div className="card-header">
                        <img
                          src="../frontend/images/clients-logo/ninjatrader_logo.png"
                          className="img-fluid"
                        />
                      </div>
                      <div className="card-body p-0">
                        <p className="mt-3">
                          <span className="badge bg-primary text-white mr-2">
                            STOCKS
                          </span>
                          <span className="badge bg-primary text-white mr-2">
                            FUTURES
                          </span>
                          <span className="badge bg-primary text-white">
                            FOREX
                          </span>
                        </p>
                      </div>
                      <div className="card-footer">
                        <a
                          href="./register"
                          className="btn btn-secondary primary-shadow"
                        >
                          Get Started
                        </a>
                        <p className="mt-1 mb-0">
                          <a
                            className="small"
                            href="./supportedplatform_plugin/Ninjatradingplatform.zip"
                            download
                          >
                            Download Plugin
                          </a>
                        </p>
                        <p className="mt-1 mb-0">
                          <a
                            className="small"
                            href="https://ninjatrader.com/"
                            target="_blank"
                          >
                            Website
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-4 mx-auto mb-5 mb-lg-0">
                    <div className="card h-100 rounded text-center pricing-table bg-white shadow-primary">
                      <div className="card-header">
                        <img
                          src="../frontend/images/clients-logo/tradestation.png"
                          className="img-fluid"
                        />
                      </div>
                      <div className="card-body p-0">
                        <p className="mt-3">
                          <span className="badge bg-primary text-white mr-2">
                            STOCKS
                          </span>
                          <span className="badge bg-primary text-white mr-2">
                            FUTURES
                          </span>
                          <span className="badge bg-primary text-white">
                            FOREX
                          </span>
                        </p>
                      </div>
                      <div className="card-footer">
                        <a
                          href="./register"
                          className="btn btn-login primary-shadow"
                          target="_blank"
                        >
                          Get Started
                        </a>
                        <p className="mt-1 mb-0">
                          <a
                            className="small"
                            href="./supportedplatform_plugin/Tradestationplatform.zip"
                            download
                          >
                            Download Plugin
                          </a>
                        </p>
                        <p className="mt-1 mb-0">
                          <a
                            className="small"
                            href="https://www.tradestation.com/"
                            target="_blank"
                          >
                            Website
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <img
            src="../frontend/images/background-shape/green-dot.png"
            alt="background-shape"
            class="about-bg-1 up-down-animation"
          />
          <img
            src="../frontend/images/background-shape/blue-dot.png"
            alt="background-shape"
            class="about-bg-2 left-right-animation"
          />
          <img
            src="../frontend/images/background-shape/green-half-cycle.png"
            alt="background-shape"
            class="about-bg-3 up-down-animation"
          />
          <img
            src="../frontend/images/background-shape/seo-ball-1.png"
            alt="background-shape"
            class="about-bg-4 left-right-animation"
          />
          <img
            src="../frontend/images/background-shape/team-bg-triangle.png"
            alt="background-shape"
            class="about-bg-5 up-down-animation"
          />
          <img
            src="../frontend/images/background-shape/service-half-cycle.png"
            alt="background-shape"
            class="about-bg-6 left-right-animation"
          />
        </section>
        <Footer />
        <Scripttag />
      </>
    );
  }
}
