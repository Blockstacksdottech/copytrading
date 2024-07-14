import React, { Component } from "react";
import Head from "next/head";
import Navbar from "./components/frontend/navbar";
import Headtag from "./components/frontend/headtag";
import Footer from "./components/frontend/footer";
import Scripttag from "./components/frontend/scripttag";

export default class Supportedbrokers extends Component {
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
                <h2 className="section-title text-center">Supported Brokers</h2>
                <p>
                  Our technology is compatible with many brokerage firms.
                  Remember that the broker you choose will depend on the kind of
                  strategy you want to trade. To trade a forex strategy, for
                  example, you’ll need a broker that allows forex trading.
                </p>
                <p>
                  To AutoTrade using a CopyTrading supported broker you will
                  need an Investor <a href="./pricing">AutoTrade Plan</a>. There
                  are no per-trade AutoTrade charges. (Of course regular broker
                  commissions apply.)
                </p>
              </div>
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-md-6 col-lg-4 mx-auto mb-5 mb-lg-0">
                    <div className="card h-100 rounded text-center pricing-table bg-white shadow-primary">
                      <div className="card-header">
                        <img
                          src="../frontend/images/clients-logo/interactiveBroker.png"
                          className="img-fluid"
                        />
                      </div>
                      <div className="card-body p-0">
                        <p className="mt-3">
                          <span className="badge bg-primary text-white mr-2">
                            STOCKS
                          </span>
                          <span className="badge bg-primary text-white mr-2">
                            OPTIONS
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
                          href="https://gdcdyn.interactivebrokers.com/Universal/servlet/Application.ApplicationSelector?ct=US&ibsrp=32"
                          target="_blank"
                          className="btn btn-secondary primary-shadow"
                        >
                          Open Account
                        </a>
                        <p className="mt-1 mb-0">
                          <a
                            className="small"
                            href="https://www.interactivebrokers.com/"
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
                          src="../frontend/images/clients-logo/stonex.png"
                          className="img-fluid"
                        />
                      </div>
                      <div className="card-body p-0">
                        <p className="mt-3">
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
                          href="https://portal.stonex.com/prefill/index/StoneXStandard2571564"
                          className="btn btn-login primary-shadow"
                          target="_blank"
                        >
                          Open Account
                        </a>
                        <p className="mt-1 mb-0">
                          <a
                            className="small"
                            href="https://www.stonex.com/foreign-exchange-market/"
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
