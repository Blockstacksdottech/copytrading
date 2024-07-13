import React, { Component } from "react";
import Head from "next/head";
import Navbar from "./components/frontend/navbar";
import Headtag from "./components/frontend/headtag";
import Footer from "./components/frontend/footer";
import Scripttag from "./components/frontend/scripttag";

export default class Pricing extends Component {
  render() {
    return (
      <>
        <Head>
          <title>CopyTrading | Pricing</title>
        </Head>
        <Headtag />
        <Navbar />

        <section className="section-lg pricing position-relative">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="section-title">Our Pricing</h2>
                <p className="mb-50">
                  Investors, <a href="/register">Create a Free Account</a> to
                  explore hundreds of top strategies. No credit card required.
                  Cancel, Upgrade, or Change plans at any time.
                </p>
              </div>
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-md-6 col-lg-3 mb-5 mb-lg-0">
                    <div className="card h-100 rounded text-center pricing-table bg-white shadow-primary">
                      <div className="card-header">
                        <h3>Solo</h3>
                      </div>
                      <div className="card-body p-0">
                        <h1>
                          <span>$</span>49
                        </h1>
                        <p className="line-height-1">
                          You can subscribe 1 Strategies
                        </p>
                      </div>
                      <div className="card-footer">
                        <a href="#" className="btn btn-yellow primary-shadow">
                          BUY NOW
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-3 mb-5 mb-lg-0">
                    <div className="card h-100 rounded text-center pricing-table bg-white shadow-primary">
                      <div className="card-header">
                        <h3>Standard</h3>
                      </div>
                      <div className="card-body p-0">
                        <h1>
                          <span>$</span>99
                        </h1>
                        <p className="line-height-1">
                          You can subscribe upto 3 Strategies
                        </p>
                      </div>
                      <div className="card-footer">
                        <a href="#" className="btn btn-login primary-shadow">
                          Buy Now
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-3 mb-5 mb-lg-0">
                    <div className="card h-100 rounded text-center pricing-table bg-white shadow-primary">
                      <div className="card-header">
                        <h3>Portfolio</h3>
                      </div>
                      <div className="card-body p-0">
                        <h1>
                          <span>$</span>199
                        </h1>
                        <p className="line-height-1">
                          You can subscribe upto 5 Strategies
                        </p>
                      </div>
                      <div className="card-footer">
                        <a href="#" className="btn btn-yellow primary-shadow">
                          BUY NOW
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-3 mb-5 mb-lg-0">
                    <div className="card h-100 rounded text-center pricing-table bg-white shadow-primary">
                      <div className="card-header">
                        <h3>Portfolio Plus</h3>
                      </div>
                      <div className="card-body p-0">
                        <h1>
                          <span>$</span>299
                        </h1>
                        <p className="line-height-1">
                          You can subscribe unlimited Strategies
                        </p>
                      </div>
                      <div className="card-footer">
                        <a href="#" className="btn btn-yellow primary-shadow">
                          BUY NOW
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <img
            className="pricing-bg-shape-1 up-down-animation"
            src="../frontend/images/background-shape/seo-ball-1.png"
            alt="background-shape"
          />
          <img
            className="pricing-bg-shape-2 up-down-animation"
            src="../frontend/images/background-shape/seo-half-cycle.png"
            alt="background-shape"
          />
          <img
            className="pricing-bg-shape-3 left-right-animation"
            src="../frontend/images/background-shape/team-bg-triangle.png"
            alt="background-shape"
          />
        </section>
        <Footer />
        <Scripttag />
      </>
    );
  }
}
