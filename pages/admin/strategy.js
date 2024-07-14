import Head from "next/head";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar2";
import Feed from "../components/feed";
import Footer from "../components/footer";
import Admheadtag from "../components/admheadtag";
import Admscripttag from "../components/admscripttag";
import React, { Component } from "react";

export default class Strategy extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "/dist/js/datatable.js";
    script.async = true;
    document.body.appendChild(script);
  }
  render() {
    return (
      <>
        <Head>
          <title>Strategy</title>
          <meta name="description" content="Strategy" />
        </Head>

        <Admheadtag />
        <Navbar />
        <Sidebar />

        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-12">
                  <div className="alert alert-warning alert-dismissible fade show">
                    All performance results are hypothetical. Trading is risky
                    and you can lose money.
                  </div>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-sm-12">
                  <h1 className="m-0">Strategy</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card card-primary card-outline">
                    <div className="card-body">
                      <div className="table-responsive p-0">
                        <table className="table table-bordered table-hover table-sm datatable">
                          <thead>
                            <tr className="bg-light">
                              <th>Strategy Name</th>
                              <th>Trades</th>
                              <th>Sub Fee</th>
                              <th>
                                <select className="form-control form-control-sm">
                                  <option>All Time</option>
                                  <option>1 Month</option>
                                  <option>3 Months</option>
                                  <option>6 Months</option>
                                </select>
                              </th>
                              <th>
                                <select className="form-control form-control-sm">
                                  <option>Strategy Age</option>
                                  <option>Avg Leverage</option>
                                  <option>Heart Attack Index</option>
                                  <option>W:L Ratio</option>
                                  <option>Sharpe Ratio</option>
                                  <option>% Profitable</option>
                                  <option>Suggested Capital</option>
                                </select>
                              </th>
                              <th>Max DD</th>
                              <th>Return</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <span className="badge badge-warning">
                                  Featured
                                </span>
                                <h6 className="mb-0">Easiest</h6>
                                <p className="mb-0">
                                  Manager: PatienceToInvest_com
                                </p>
                              </td>
                              <td>
                                <span className="badge badge-light">
                                  Futures
                                </span>
                              </td>
                              <td>$20/month</td>
                              <td>
                                <h6 className="text-success mb-0">+110.5%</h6>
                                $34,600
                              </td>
                              <td>
                                <h6 className="mb-0">1 Year</h6>
                              </td>
                              <td>16.65%</td>
                              <td>
                                <h6 className="text-success mb-0">+110.5%</h6>
                                Annual Return since March 31, 2023
                              </td>
                              <td>
                                <a
                                  className="fas fa-external-link-alt"
                                  href="/admin/strategydetails"
                                ></a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h6 className="mb-0">Easiest</h6>
                                <p className="mb-0">
                                  Manager: PatienceToInvest_com
                                </p>
                              </td>
                              <td>
                                <span className="badge badge-light">
                                  Futures
                                </span>
                              </td>
                              <td>$20/month</td>
                              <td>
                                <h6 className="text-success mb-0">+110.5%</h6>
                                $34,600
                              </td>
                              <td>
                                <h6 className="mb-0">1 Year</h6>
                              </td>
                              <td>16.65%</td>
                              <td>
                                <h6 className="text-success mb-0">+110.5%</h6>
                                Annual Return since March 31, 2023
                              </td>
                              <td>
                                <a
                                  className="fas fa-external-link-alt"
                                  href="/admin/strategydetails"
                                ></a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h6 className="mb-0">Easiest</h6>
                                <p className="mb-0">
                                  Manager: PatienceToInvest_com
                                </p>
                              </td>
                              <td>
                                <span className="badge badge-light">
                                  Futures
                                </span>
                              </td>
                              <td>$20/month</td>
                              <td>
                                <h6 className="text-success mb-0">+110.5%</h6>
                                $34,600
                              </td>
                              <td>
                                <h6 className="mb-0">1 Year</h6>
                              </td>
                              <td>16.65%</td>
                              <td>
                                <h6 className="text-success mb-0">+110.5%</h6>
                                Annual Return since March 31, 2023
                              </td>
                              <td>
                                <a
                                  className="fas fa-external-link-alt"
                                  href="/admin/strategydetails"
                                ></a>
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
        <Admscripttag />
      </>
    );
  }
}
