import Head from "next/head";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Feed from "../components/feed";
import Footer from "../components/footer";
import Admheadtag from "../components/admheadtag";
import Admscripttag from "../components/admscripttag";
import React, { Component, useEffect, useRef, memo } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const tradedata = [
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

export class Trade extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Trade</title>
          <meta name="description" content="Trade" />
        </Head>

        <Admheadtag />
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
                    <AreaChart data={tradedata}>
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
                            className="btn btn-secondary w-100 mt-2"
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
                            className="btn btn-secondary w-100 mt-2"
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
        <Admscripttag />
      </>
    );
  }
}

export default Trade;
