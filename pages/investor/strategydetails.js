import Head from "next/head";
import Navbar from "../components/panel/navbar";
import Sidebar from "./components/sidebar";
import Feed from "./components/feed";
import Footer from "../components/panel/footer";
import Headtag from "../components/panel/headtag";
import Scripttag from "../components/panel/scripttag";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const hypotheticalData = [
  {
    name: "Jan '24",
    Price: 80,
  },
  {
    name: "Feb '24",
    Price: 90,
  },
  {
    name: "Mar '24",
    Price: 50,
  },
  {
    name: "Apr '24",
    Price: 100,
  },
  {
    name: "May '24",
    Price: 10,
  },
  {
    name: "Jun '24",
    Price: 130,
  },
];

const StrategyDetails = () => {
  return (
    <>
      <Head>
        <title>Easiest</title>
        <meta name="description" content="Easiest" />
      </Head>

      <Headtag />
      <Navbar />
      <Sidebar />

      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-12">
                <div className="alert alert-light alert-dismissible fade show">
                  These are hypothetical performance results that have certain
                  inherent limitations.
                </div>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-sm-5 mb-2">
                <p className="small mb-0">(142728137)</p>
                <h1 className="m-0">Easiest</h1>
                <p className="mb-0">
                  Created by:{" "}
                  <a href="" className="strong">
                    AuxillatronTrade
                  </a>
                </p>
                <p>Started: 11/2022 | Futures | Last trade: 8 days ago</p>
              </div>
              <div className="col-sm-3 mb-2">
                <a className="btn btn-success btn-block btn-sm">
                  <span className="h6">Simulate This</span> <br /> Track at
                  simulated broker
                </a>
                <a
                  className="btn btn-warning btn-block btn-sm"
                  href="/investor/subscribe"
                >
                  <span className="h6">Subscribe</span> <br /> Full access for
                  $499/Month
                </a>
              </div>
              <div className="col-sm-4 mb-2 m-auto">
                <p className="text-center">
                  Trading Category: <span className="h6">Futures</span>
                </p>
                <div className="inner text-center text-green">
                  <i className="fas fa-circle"></i>
                  <p>Short Term</p>
                </div>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-lg-2 col-4">
                <div className="small-box bg-light">
                  <div className="inner text-center">
                    <h4 className="text-success">46.9%</h4>
                    <p className="mb-0">Annual Return</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-4">
                <div className="small-box bg-light">
                  <div className="inner text-center">
                    <h4 className="text-danger">13.3%</h4>
                    <p className="mb-0">Max Drawdown</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-4">
                <div className="small-box bg-light">
                  <div className="inner text-center">
                    <h4 className="text-dark">100</h4>
                    <p className="mb-0">Num Trades</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-4">
                <div className="small-box bg-light">
                  <div className="inner text-center">
                    <h4 className="text-dark">69.0%</h4>
                    <p className="mb-0">Win Trades</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-4">
                <div className="small-box bg-light">
                  <div className="inner text-center">
                    <h4>
                      <span className="text-success">2.0</span> :{" "}
                      <small>1</small>
                    </h4>
                    <p className="mb-0">Profit Factor</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-4">
                <div className="small-box bg-light">
                  <div className="inner text-center">
                    <h4 className="text-success">55.6%</h4>
                    <p className="mb-0">Win Months</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-sm-12">
                <div className="card card-primary card-outline mb-3">
                  <div className="card-body p-0">
                    <div className="table-responsive">
                      <table className=" table table-bordered mb-0">
                        <thead>
                          <tr>
                            <th></th>
                            <th>Jan</th>
                            <th>Feb</th>
                            <th>Mar</th>
                            <th>Apr</th>
                            <th>May</th>
                            <th>Jun</th>
                            <th>Jul</th>
                            <th>Aug</th>
                            <th>Sep</th>
                            <th>Oct</th>
                            <th>Nov</th>
                            <th>Dec</th>
                            <th>YTD</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>2022</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                              <span className="text-danger">2.3%</span>
                            </td>
                            <td>
                              <span className="text-success">+25.9%</span>
                            </td>
                            <td>
                              <span className="text-success font-weight-bold">
                                +25.9%
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>2023</td>
                            <td>
                              <span className="text-danger">2.3%</span>
                            </td>
                            <td>
                              <span className="text-success">+25.9%</span>
                            </td>
                            <td>
                              <span className="text-danger">2.3%</span>
                            </td>
                            <td>
                              <span className="text-danger">2.3%</span>
                            </td>
                            <td>
                              <span className="text-success">+25.9%</span>
                            </td>
                            <td>
                              <span className="text-danger">2.3%</span>
                            </td>
                            <td>
                              <span className="text-danger">2.3%</span>
                            </td>
                            <td>
                              <span className="text-success">+25.9%</span>
                            </td>
                            <td>
                              <span className="text-success">+25.9%</span>
                            </td>
                            <td>
                              <span className="text-success">+25.9%</span>
                            </td>
                            <td>
                              <span className="text-danger">2.3%</span>
                            </td>
                            <td>
                              <span className="text-danger">2.3%</span>
                            </td>
                            <td>
                              <span className="text-success font-weight-bold">
                                +25.9%
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>2024</td>
                            <td>
                              <span className="text-danger">2.3%</span>
                            </td>
                            <td>
                              <span className="text-success">+25.9%</span>
                            </td>
                            <td>
                              <span className="text-danger">2.3%</span>
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                              <span className="text-success font-weight-bold">
                                +25.9%
                              </span>
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

        <div className="content">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-9">
                <div className="mb-2">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">CUMULATIVE P&L (ALL DATES)</h3>
                      <div className="card-tools">
                        <a>
                          <i className="fas fa-info-circle"></i>
                        </a>
                      </div>
                    </div>
                    <div className="card-body">
                      <ResponsiveContainer width="100%" height={500}>
                        <AreaChart data={hypotheticalData}>
                          <CartesianGrid strokeDasharray="5 5" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Area
                            type="monotone"
                            dataKey="Price"
                            stroke="#0909ff"
                            fill="#0909ff"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="card card-primary card-outline">
                  <div className="card-body box-profile">
                    <div className="text-center">
                      <h5>SUMMARY STATISTICS</h5>
                      <select className="form-control">
                        <option>Typical Broker Commissions</option>

                        <option>
                          Gain Capital commiss. and AutoTrade fees
                        </option>

                        <option>
                          Interactive Brokers commiss. and AutoTrade fees
                        </option>

                        <option>
                          Interactive Brokers commiss. (no monthly AutoTrade
                          fees)
                        </option>

                        <option>
                          Tradovate with monthly Tradovate membership
                        </option>

                        <option>
                          Infinity Futures commiss. and AutoTrade fees
                        </option>
                      </select>
                    </div>
                    <ul className="list-group list-group-unbordered mt-3">
                      <li className="list-group-item">
                        <span>Strategy began</span>
                        <b className="float-right">2022-11-30</b>
                      </li>
                      <li className="list-group-item">
                        <span>Suggested Min Capital</span>
                        <b className="float-right">$25,000</b>
                      </li>
                      <li className="list-group-item">
                        <span>Rank at C2 %</span>
                        <span className="float-right">
                          <sub>TOP</sub>
                          <b>0.4%</b>
                        </span>
                      </li>
                      <li className="list-group-item">
                        <span>Rank#</span>
                        <b className="float-right">#3</b>
                      </li>
                      <li className="list-group-item">
                        <span>#Trades</span>
                        <b className="float-right">100</b>
                      </li>
                      <li className="list-group-item">
                        <span>#Profitable</span>
                        <b className="float-right text-success">69</b>
                      </li>
                      <li className="list-group-item">
                        <span>%Profitable</span>
                        <b className="float-right">69.0</b>
                      </li>
                      <li className="list-group-item">
                        <span>Correlation S&P500</span>
                        <b className="float-right">-0.136</b>
                      </li>
                      <li className="list-group-item">
                        <span>Sharpe Ratio</span>
                        <b className="float-right">1.65</b>
                      </li>
                      <li className="list-group-item">
                        <span>Sortino Ratio</span>
                        <b className="float-right">2.78</b>
                      </li>
                      <li className="list-group-item">
                        <span>Beta</span>
                        <b className="float-right">-0.23</b>
                      </li>
                      <li className="list-group-item">
                        <span>Alpha</span>
                        <b className="float-right">0.13</b>
                      </li>
                      <li className="list-group-item">
                        <span>Leverage</span>
                        <b className="float-right">
                          2.08(Avg)
                          <span className="ml-2">2.44(Max)</span>
                        </b>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-sm-12">
                {/* All Records */}

                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#trade"
                    >
                      Trading Record
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#statistics"
                    >
                      Statistics
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#description"
                    >
                      Description
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade show active" id="trade">
                    <div className="card">
                      <div className="card-body">
                        <div className="table-responsive">
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                <td>Opened Date/Time</td>
                                <td>Symbol</td>
                                <td>Description</td>
                                <td>Side</td>
                                <td>Qty</td>
                                <td>Avg Price</td>
                                <td>Closed Date/Time</td>
                                <td>Avg Price</td>
                                <td>Drawdown</td>
                                <td>P/L</td>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>4/17/24 9:52 </td>
                                <td>@MNQM4</td>
                                <td>MICRO E-MINI NASDAQ 100</td>
                                <td>SHORT</td>
                                <td>12</td>
                                <td>17895.00</td>
                                <td>4/17 15:55</td>
                                <td>17681.76</td>
                                <td>0.27%</td>
                                <td>$5,107</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="statistics">
                    <div className="card mb-2">
                      <div className="card-body">
                        <ul className="list-group list-group-unbordered">
                          <li className="list-group-item">
                            Strategy began
                            <span className="float-right">9/12/2020</span>
                          </li>
                          <li className="list-group-item">
                            Suggested Minimum Cap
                            <span className="float-right">$80,000</span>
                          </li>
                          <li className="list-group-item">
                            Age
                            <span className="float-right">44 months ago</span>
                          </li>
                          <li className="list-group-item">
                            What it trades
                            <span className="float-right">Futures</span>
                          </li>
                          <li className="list-group-item">
                            # Trades
                            <span className="float-right">500</span>
                          </li>
                          <li className="list-group-item">
                            # Profitable
                            <span className="float-right">180</span>
                          </li>
                          <li className="list-group-item">
                            % Profitable
                            <span className="float-right">36.00%</span>
                          </li>
                          <li className="list-group-item">
                            Avg trade duration
                            <span className="float-right">2.3 hours</span>
                          </li>
                          <li className="list-group-item">
                            Max peak-to-valley drawdown
                            <span className="float-right">14.1%</span>
                          </li>
                          <li className="list-group-item">
                            Drawdown period
                            <span className="float-right">
                              Oct 05, 2021 - Nov 26, 2021
                            </span>
                          </li>
                          <li className="list-group-item">
                            Annual Return (Compounded)
                            <span className="float-right">39.4%</span>
                          </li>
                          <li className="list-group-item">
                            Avg win
                            <span className="float-right">$992.57</span>
                          </li>
                          <li className="list-group-item">
                            Avg loss
                            <span className="float-right">$356.85</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="description">
                    <div className="card">
                      <div className="card-body">
                        <p>
                          System ares trades MNQ Future long and short. Risk per
                          trade is 1% of equity. No overnight. Always with stop.
                        </p>
                        <p>The system is backtested and is 100% automated.</p>
                        <p>
                          For deeper information of the backtest results you can
                          pm me.
                        </p>
                        <p>
                          TOS not possible because of the Tax Regulations for
                          derivatives in Germany.
                        </p>
                      </div>
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
      <Scripttag />
    </>
  );
};

export default StrategyDetails;
