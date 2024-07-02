import React, { Component } from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar2";
import Feed from "../components/feed";
import Footer from "../components/footer";

export default class Investordetails extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Investors Details</title>
          <meta name="description" content="Investors Details" />
        </Head>

        <Navbar />
        <Sidebar />

        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-12">
                  <h1 className="m-0">Investors Details</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card card-primary card-outline">
                    <div className="card-header">
                      <h5 className="mb-0">Profile</h5>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-3 m-auto">
                          <img
                            src="/dist/img/avatar5.png"
                            alt="Testing111"
                            className="img-circle img-fluid w-50"
                          />
                        </div>
                        <div className="col-lg-3 m-auto">
                          <div className="form-group">
                            <label>Name:</label>
                            <span className="ml-2">Testing111 asdf</span>
                          </div>
                          <div className="form-group">
                            <label>Mobile:</label>
                            <span className="ml-2">1234567890</span>
                          </div>
                          <div className="form-group">
                            <label>City:</label>
                            <span className="ml-2">xyz</span>
                          </div>
                          <div className="form-group">
                            <label>Country:</label>
                            <span className="ml-2">xyz</span>
                          </div>
                        </div>
                        <div className="col-lg-3 m-auto">
                          <div className="form-group">
                            <label>Email:</label>
                            <span className="ml-2">test@email.com</span>
                          </div>
                          <div className="form-group">
                            <label>Zip / Postal Code:</label>
                            <span className="ml-2">2365</span>
                          </div>
                          <div className="form-group">
                            <label>State:</label>
                            <span className="ml-2">tyuio</span>
                          </div>
                          <div className="form-group">
                            <label>Address:</label>
                            <span className="ml-2">Demo Street 123, Demo</span>
                          </div>
                        </div>
                        <div className="col-lg-3 m-auto">
                          <div class="info-box">
                            <span class="info-box-icon bg-primary">
                              <h1 className="mb-0">S</h1>
                            </span>
                            <div class="info-box-content">
                              <span class="info-box-text">
                                Subscription Plan
                              </span>
                              <span class="info-box-number">$499/month</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 mx-auto">
                  <div className="card card-primary card-outline">
                    <div className="card-header">
                      <h5>Strategy Subscribed</h5>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive p-0">
                        <table
                          id="Subscribedstrategy"
                          className="table table-bordered table-hover table-sm"
                        >
                          <thead>
                            <tr className="bg-light">
                              <th>STRATEGY</th>
                              <th>Date | Time</th>
                              <th>Manager</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <a
                                  className="fas fa-external-link-alt mr-2"
                                  href="/admin/strategydetails"
                                ></a>
                                <span className="h6 mb-0">Easiest</span>
                              </td>
                              <td>09-06-2024 | 01:58 AM</td>
                              <td>CopyTrading</td>
                              <td>
                                <a
                                  type="button"
                                  className="btn btn-default"
                                  href="/admin/strategydetails"
                                >
                                  <i className="fas fa-external-link-alt"></i>
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <a
                                  className="fas fa-external-link-alt mr-2"
                                  href="/admin/strategydetails"
                                ></a>
                                <span className="h6 mb-0">Easiest</span>
                              </td>
                              <td>09-06-2024 | 01:58 AM</td>
                              <td>CopyTrading</td>
                              <td>
                                <a
                                  type="button"
                                  className="btn btn-default"
                                  href="/admin/strategydetails"
                                >
                                  <i className="fas fa-external-link-alt"></i>
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
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
