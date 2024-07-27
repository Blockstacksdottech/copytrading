import Head from "next/head";
import Navbar from "../components/panel/navbar";
import Sidebar from "./components/sidebar";
import Feed from "./components/feed";
import Footer from "../components/panel/footer";
import Headtag from "../components/panel/headtag";
import Scripttag from "../components/panel/scripttag";
import React, { useEffect, useRef, memo } from "react";
import {
  BarChart,
  Bar,
  Brush,
  Legend,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const tradedata = [
  { name: "1", uv: 300, pv: 456 },
  { name: "2", uv: -145, pv: 230 },
  { name: "3", uv: -100, pv: 345 },
  { name: "4", uv: -8, pv: 450 },
  { name: "5", uv: 100, pv: 321 },
  { name: "6", uv: 9, pv: 235 },
  { name: "7", uv: 53, pv: 267 },
  { name: "8", uv: 252, pv: -378 },
  { name: "9", uv: 79, pv: -210 },
  { name: "10", uv: 294, pv: -23 },
  { name: "12", uv: 43, pv: 45 },
  { name: "13", uv: -74, pv: 90 },
  { name: "14", uv: -71, pv: 130 },
  { name: "15", uv: -117, pv: 11 },
  { name: "16", uv: -186, pv: 107 },
  { name: "17", uv: -16, pv: 926 },
  { name: "18", uv: -125, pv: 653 },
  { name: "19", uv: 222, pv: 366 },
  { name: "20", uv: 372, pv: 486 },
  { name: "21", uv: 182, pv: 512 },
  { name: "22", uv: 164, pv: 302 },
  { name: "23", uv: 316, pv: 425 },
  { name: "24", uv: 131, pv: 467 },
  { name: "25", uv: 291, pv: -190 },
  { name: "26", uv: -47, pv: 194 },
  { name: "27", uv: -415, pv: 371 },
  { name: "28", uv: -182, pv: 376 },
  { name: "29", uv: -93, pv: 295 },
  { name: "30", uv: -99, pv: 322 },
  { name: "31", uv: -52, pv: 246 },
  { name: "32", uv: 154, pv: 33 },
  { name: "33", uv: 205, pv: 354 },
  { name: "34", uv: 70, pv: 258 },
  { name: "35", uv: -25, pv: 359 },
  { name: "36", uv: -59, pv: 192 },
  { name: "37", uv: -63, pv: 464 },
  { name: "38", uv: -91, pv: -2 },
  { name: "39", uv: -66, pv: 154 },
  { name: "40", uv: -50, pv: 186 },
];

const Trade = () => {
  return (
    <>
      <Head>
        <title>Trade</title>
        <meta name="description" content="Trade" />
      </Head>

      <Headtag />
      <Navbar />
      <Sidebar />

      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-12">
                <h1 className="m-0">Trade</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="container-fluid">
            <div className="row my-4">
              <div className="col-md-12">
                <p className="text-center">
                  Proper Graph will be implemented during functionality
                  development
                </p>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart width={500} height={300} data={tradedata}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend
                      verticalAlign="top"
                      wrapperStyle={{ lineHeight: "40px" }}
                    />
                    <ReferenceLine y={0} stroke="#000" />
                    <Brush dataKey="name" height={30} stroke="#0909ff" />
                    <Bar dataKey="pv" fill="#0909ff" />
                    <Bar dataKey="uv" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="row mt-2 gx-2">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                    <h6 className="mb-0">LIMIT</h6>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-text ps-1 pb-2">
                          <small>Avbl 0.000000000 USDT</small>
                        </div>
                        <div class="input-group mb-2">
                          <div class="input-group-prepend">
                            <span class="input-group-text input-group-text-trade">
                              Price
                            </span>
                          </div>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="0"
                          />
                          <div class="input-group-append">
                            <span class="input-group-text input-group-text-trade">
                              USDT
                            </span>
                          </div>
                        </div>
                        <div class="input-group mb-2">
                          <div class="input-group-prepend">
                            <span class="input-group-text input-group-text-trade">
                              Amount
                            </span>
                          </div>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="0"
                          />
                          <div class="input-group-append">
                            <span class="input-group-text input-group-text-trade">
                              FDUSD
                            </span>
                          </div>
                        </div>
                        <div class="input-group mb-2">
                          <div class="input-group-prepend">
                            <span class="input-group-text input-group-text-trade">
                              Total
                            </span>
                          </div>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="0"
                          />
                          <div class="input-group-append">
                            <span class="input-group-text input-group-text-trade">
                              USDT
                            </span>
                          </div>
                        </div>

                        <div className="form-text ps-1">
                          <small>Max Buy: 0 FDUSD</small>
                        </div>
                        <div className="form-text ps-1">
                          <small>Est. Fee: 0 USDT</small>
                        </div>

                        <button
                          type="submit"
                          className="btn btn-primary w-100 mt-2"
                        >
                          Buy FDUSD
                        </button>
                      </div>
                      <div className="col-md-6">
                        <div className="form-text ps-1 pb-2">
                          <small>Avbl 0.98652314 FDUSD</small>
                        </div>
                        <div class="input-group mb-2">
                          <div class="input-group-prepend">
                            <span class="input-group-text input-group-text-trade">
                              Price
                            </span>
                          </div>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="0"
                          />
                          <div class="input-group-append">
                            <span class="input-group-text input-group-text-trade">
                              USDT
                            </span>
                          </div>
                        </div>
                        <div class="input-group mb-2">
                          <div class="input-group-prepend">
                            <span class="input-group-text input-group-text-trade">
                              Amount
                            </span>
                          </div>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="0"
                          />
                          <div class="input-group-append">
                            <span class="input-group-text input-group-text-trade">
                              FDUSD
                            </span>
                          </div>
                        </div>
                        <div class="input-group mb-2">
                          <div class="input-group-prepend">
                            <span class="input-group-text input-group-text-trade">
                              Total
                            </span>
                          </div>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="0"
                          />
                          <div class="input-group-append">
                            <span class="input-group-text input-group-text-trade">
                              USDT
                            </span>
                          </div>
                        </div>

                        <div className="form-text ps-1">
                          <small>Max Sell: 0 FDUSD</small>
                        </div>
                        <div className="form-text ps-1">
                          <small>Est. Fee: 0 USDT</small>
                        </div>

                        <button
                          type="submit"
                          className="btn btn-danger w-100 mt-2"
                        >
                          Sell FDUSD
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                    <h6 className="mb-0">Market</h6>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-text ps-1 pb-2">
                          <small>Avbl 0.000000000 USDT</small>
                        </div>
                        <div class="input-group mb-2">
                          <div class="input-group-prepend">
                            <span class="input-group-text input-group-text-trade">
                              Price
                            </span>
                          </div>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="0"
                          />
                          <div class="input-group-append">
                            <span class="input-group-text input-group-text-trade">
                              USDT
                            </span>
                          </div>
                        </div>
                        <div class="input-group mb-2">
                          <div class="input-group-prepend">
                            <span class="input-group-text input-group-text-trade">
                              Amount
                            </span>
                          </div>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="0"
                          />
                          <div class="input-group-append">
                            <span class="input-group-text input-group-text-trade">
                              FDUSD
                            </span>
                          </div>
                        </div>
                        <div class="input-group mb-2">
                          <div class="input-group-prepend">
                            <span class="input-group-text input-group-text-trade">
                              Total
                            </span>
                          </div>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="0"
                          />
                          <div class="input-group-append">
                            <span class="input-group-text input-group-text-trade">
                              USDT
                            </span>
                          </div>
                        </div>

                        <div className="form-text ps-1">
                          <small>Max Buy: 0 FDUSD</small>
                        </div>
                        <div className="form-text ps-1">
                          <small>Est. Fee: 0 USDT</small>
                        </div>

                        <button
                          type="submit"
                          className="btn btn-primary w-100 mt-2"
                        >
                          Buy FDUSD
                        </button>
                      </div>
                      <div className="col-md-6">
                        <div className="form-text ps-1 pb-2">
                          <small>Avbl 0.98652314 FDUSD</small>
                        </div>
                        <div class="input-group mb-2">
                          <div class="input-group-prepend">
                            <span class="input-group-text input-group-text-trade">
                              Price
                            </span>
                          </div>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="0"
                          />
                          <div class="input-group-append">
                            <span class="input-group-text input-group-text-trade">
                              USDT
                            </span>
                          </div>
                        </div>
                        <div class="input-group mb-2">
                          <div class="input-group-prepend">
                            <span class="input-group-text input-group-text-trade">
                              Amount
                            </span>
                          </div>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="0"
                          />
                          <div class="input-group-append">
                            <span class="input-group-text input-group-text-trade">
                              FDUSD
                            </span>
                          </div>
                        </div>
                        <div class="input-group mb-2">
                          <div class="input-group-prepend">
                            <span class="input-group-text input-group-text-trade">
                              Total
                            </span>
                          </div>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="0"
                          />
                          <div class="input-group-append">
                            <span class="input-group-text input-group-text-trade">
                              USDT
                            </span>
                          </div>
                        </div>

                        <div className="form-text ps-1">
                          <small>Max Sell: 0 FDUSD</small>
                        </div>
                        <div className="form-text ps-1">
                          <small>Est. Fee: 0 USDT</small>
                        </div>

                        <button
                          type="submit"
                          className="btn btn-danger w-100 mt-2"
                        >
                          Sell FDUSD
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-12">
                <div className="card">
                  <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link active"
                        id="open-order-tab"
                        data-toggle="tab"
                        data-target="#open-order"
                        type="button"
                        role="tab"
                        aria-controls="open-order"
                        aria-selected="true"
                      >
                        Open Orders(0)
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="order-history-tab"
                        data-toggle="tab"
                        data-target="#order-history"
                        type="button"
                        role="tab"
                        aria-controls="order-history"
                        aria-selected="false"
                      >
                        Order History
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="trade-history-tab"
                        data-toggle="tab"
                        data-target="#trade-history"
                        type="button"
                        role="tab"
                        aria-controls="trade-history"
                        aria-selected="false"
                      >
                        Trade History
                      </button>
                    </li>
                  </ul>
                  <div class="tab-content" id="myTabContent">
                    <div
                      class="tab-pane fade show active"
                      id="open-order"
                      role="tabpanel"
                      aria-labelledby="open-order-tab"
                    >
                      <div className="table-responsive">
                        <table className="table table-sm">
                          <thead>
                            <tr>
                              <th scope="col">Order</th>
                              <th scope="col">DateTime</th>
                              <th scope="col">Type</th>
                              <th scope="col">Price</th>
                              <th scope="col">Amount</th>
                              <th scope="col">Total</th>
                              <th scope="col">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="small">
                                <span className="text-green font-weight-bold">
                                  Buy
                                </span>
                                <br />
                                USDT/FDUSD
                              </td>
                              <td className="small">
                                15 April 2024
                                <br />
                                01:28 AM
                              </td>
                              <td className="small">Market</td>
                              <td className="small">0.00001 USDT</td>
                              <td className="small">0.00032 FDUSD</td>
                              <td className="small">0.12345 USDT</td>
                              <td className="small">
                                <span className="badge bg-info">Open</span>
                              </td>
                            </tr>
                            <tr>
                              <td className="small">
                                <span className="text-danger font-weight-bold">
                                  Sell
                                </span>
                                <br />
                                USDT/FDUSD
                              </td>
                              <td className="small">
                                15 April 2024
                                <br />
                                01:28 AM
                              </td>
                              <td className="small">Market</td>
                              <td className="small">0.00001 USDT</td>
                              <td className="small">0.00032 FDUSD</td>
                              <td className="small">0.12345 USDT</td>
                              <td className="small">
                                <span className="badge bg-warning">
                                  Pending
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="small">
                                <span className="text-danger font-weight-bold">
                                  Sell
                                </span>
                                <br />
                                USDT/FDUSD
                              </td>
                              <td className="small">
                                15 April 2024
                                <br />
                                01:28 AM
                              </td>
                              <td className="small">Market</td>
                              <td className="small">0.00001 USDT</td>
                              <td className="small">0.00032 FDUSD</td>
                              <td className="small">0.12345 USDT</td>
                              <td className="small">
                                <span className="badge bg-success">
                                  Success
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="small">
                                <span className="text-danger font-weight-bold">
                                  Sell
                                </span>
                                <br />
                                USDT/FDUSD
                              </td>
                              <td className="small">
                                15 April 2024
                                <br />
                                01:28 AM
                              </td>
                              <td className="small">Market</td>
                              <td className="small">0.00001 USDT</td>
                              <td className="small">0.00032 FDUSD</td>
                              <td className="small">0.12345 USDT</td>
                              <td className="small">
                                <span className="badge bg-danger">
                                  Declined
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="order-history"
                      role="tabpanel"
                      aria-labelledby="order-history-tab"
                    >
                      <div className="table-responsive">
                        <table className="table table-sm">
                          <thead>
                            <tr>
                              <th scope="col">Order</th>
                              <th scope="col">DateTime</th>
                              <th scope="col">Type</th>
                              <th scope="col">Price</th>
                              <th scope="col">Amount</th>
                              <th scope="col">Total</th>
                              <th scope="col">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="small">
                                <span className="text-green font-weight-bold">
                                  Buy
                                </span>
                                <br />
                                USDT/FDUSD
                              </td>
                              <td className="small">
                                15 April 2024
                                <br />
                                01:28 AM
                              </td>
                              <td className="small">Market</td>
                              <td className="small">0.00001 USDT</td>
                              <td className="small">0.00032 FDUSD</td>
                              <td className="small">0.12345 USDT</td>
                              <td className="small">
                                <span className="badge bg-info">Open</span>
                              </td>
                            </tr>
                            <tr>
                              <td className="small">
                                <span className="text-danger font-weight-bold">
                                  Sell
                                </span>
                                <br />
                                USDT/FDUSD
                              </td>
                              <td className="small">
                                15 April 2024
                                <br />
                                01:28 AM
                              </td>
                              <td className="small">Market</td>
                              <td className="small">0.00001 USDT</td>
                              <td className="small">0.00032 FDUSD</td>
                              <td className="small">0.12345 USDT</td>
                              <td className="small">
                                <span className="badge bg-warning">
                                  Pending
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="small">
                                <span className="text-danger font-weight-bold">
                                  Sell
                                </span>
                                <br />
                                USDT/FDUSD
                              </td>
                              <td className="small">
                                15 April 2024
                                <br />
                                01:28 AM
                              </td>
                              <td className="small">Market</td>
                              <td className="small">0.00001 USDT</td>
                              <td className="small">0.00032 FDUSD</td>
                              <td className="small">0.12345 USDT</td>
                              <td className="small">
                                <span className="badge bg-success">
                                  Success
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="small">
                                <span className="text-danger font-weight-bold">
                                  Sell
                                </span>
                                <br />
                                USDT/FDUSD
                              </td>
                              <td className="small">
                                15 April 2024
                                <br />
                                01:28 AM
                              </td>
                              <td className="small">Market</td>
                              <td className="small">0.00001 USDT</td>
                              <td className="small">0.00032 FDUSD</td>
                              <td className="small">0.12345 USDT</td>
                              <td className="small">
                                <span className="badge bg-danger">
                                  Declined
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="trade-history"
                      role="tabpanel"
                      aria-labelledby="trade-history-tab"
                    >
                      <div className="table-responsive">
                        <table className="table table-sm">
                          <thead>
                            <tr>
                              <th scope="col">Order</th>
                              <th scope="col">DateTime</th>
                              <th scope="col">Type</th>
                              <th scope="col">Price</th>
                              <th scope="col">Amount</th>
                              <th scope="col">Total</th>
                              <th scope="col">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="small">
                                <span className="text-green font-weight-bold">
                                  Buy
                                </span>
                                <br />
                                USDT/FDUSD
                              </td>
                              <td className="small">
                                15 April 2024
                                <br />
                                01:28 AM
                              </td>
                              <td className="small">Market</td>
                              <td className="small">0.00001 USDT</td>
                              <td className="small">0.00032 FDUSD</td>
                              <td className="small">0.12345 USDT</td>
                              <td className="small">
                                <span className="badge bg-info">Open</span>
                              </td>
                            </tr>
                            <tr>
                              <td className="small">
                                <span className="text-danger font-weight-bold">
                                  Sell
                                </span>
                                <br />
                                USDT/FDUSD
                              </td>
                              <td className="small">
                                15 April 2024
                                <br />
                                01:28 AM
                              </td>
                              <td className="small">Market</td>
                              <td className="small">0.00001 USDT</td>
                              <td className="small">0.00032 FDUSD</td>
                              <td className="small">0.12345 USDT</td>
                              <td className="small">
                                <span className="badge bg-warning">
                                  Pending
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="small">
                                <span className="text-danger font-weight-bold">
                                  Sell
                                </span>
                                <br />
                                USDT/FDUSD
                              </td>
                              <td className="small">
                                15 April 2024
                                <br />
                                01:28 AM
                              </td>
                              <td className="small">Market</td>
                              <td className="small">0.00001 USDT</td>
                              <td className="small">0.00032 FDUSD</td>
                              <td className="small">0.12345 USDT</td>
                              <td className="small">
                                <span className="badge bg-success">
                                  Success
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="small">
                                <span className="text-danger font-weight-bold">
                                  Sell
                                </span>
                                <br />
                                USDT/FDUSD
                              </td>
                              <td className="small">
                                15 April 2024
                                <br />
                                01:28 AM
                              </td>
                              <td className="small">Market</td>
                              <td className="small">0.00001 USDT</td>
                              <td className="small">0.00032 FDUSD</td>
                              <td className="small">0.12345 USDT</td>
                              <td className="small">
                                <span className="badge bg-danger">
                                  Declined
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
        </div>
      </div>

      <Feed />
      <Footer />
      <Scripttag />
    </>
  );
};

export default Trade;
