import Head from "next/head";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Feed from "../components/feed";
import Footer from "../components/footer";
import React, { Component } from "react";

export default class Subscribe extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Subscribe - Easiest</title>
          <meta name="description" content="Subscribe" />
        </Head>

        <Navbar />
        <Sidebar />

        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-12">
                  <h1 className="m-0 text-center">
                    Subscribe to <strong className="text-blue">Easiest</strong>
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 mx-auto">
                  <div className="card card-primary">
                    <div className="card-header border-0 text-center">
                      You will be charged <br />
                      <h3 className="mb-0">$499/Month</h3>
                    </div>
                    <div className="card-body">
                      <ul className="products-list product-list-in-card text-center">
                        <li className="item">
                          Receive real-time buy/sell signals.
                        </li>
                        <li className="item">
                          See real-time profit/loss and open positions.
                        </li>
                        <li className="item">
                          Set up live Trading at a supported broker (You can do
                          this after you subscribe).
                        </li>
                      </ul>
                      <div className="my-2">
                        <div className="form-group">
                          <label>Subscription Method</label>
                          <select className="form-control">
                            <option>Choose</option>
                            <option>American Express</option>
                            <option>Master Card</option>
                            <option>Visa</option>
                            <option>Discover</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label>Card Number</label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Card Number"
                          />
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label>Expiration Date</label>
                              <div className="input-group">
                                <input
                                  type="number"
                                  className="form-control"
                                  placeholder="Month"
                                />
                                <input
                                  type="number"
                                  className="form-control"
                                  placeholder="Year"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label>CVV</label>
                              <input
                                type="number"
                                className="form-control"
                                placeholder="CVV"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group text-center mb-0">
                          <a
                            type="submit"
                            className="btn btn-primary"
                            href="/investor/trade"
                          >
                            Subscribe
                          </a>
                        </div>
                      </div>
                      <p className="mb-0 alert alert-light">
                        No trading will happen now. You will be able to set up
                        Trade after you subscribe.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Feed />
        <Footer />
      </>
    );
  }
}
