import Head from "next/head";
import Navbar from "../components/panel/navbar";
import Sidebar from "./components/sidebar";
import Feed from "./components/feed";
import Footer from "../components/panel/footer";
import Headtag from "../components/panel/headtag";
import Scripttag from "../components/panel/scripttag";
import React, { useEffect } from "react";

const MyStrategy = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/dist/js/datatable.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Head>
        <title>My Strategy</title>
        <meta name="description" content="My Strategy" />
      </Head>

      <Headtag />
      <Navbar />
      <Sidebar />

      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">My Strategy</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="card shadow-none">
                  <div className="card-body">
                    <div className="table-responsive p-0">
                      <table className="table table-bordered table-sm datatable">
                        <thead>
                          <tr>
                            <th>Strategy</th>
                            <th>Started On</th>
                            <th>Trade</th>
                            <th>Account Size</th>
                            <th>Platform</th>
                            <th>Broker</th>
                            <th>Subscription Charge</th>
                            <th>
                              SUBSCRIBERS <br />
                              <span className="small font-italic">Total</span>
                            </th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <a href="/manager/strategydetails">
                                <i className="fas fa-external-link-alt mr-2"></i>
                              </a>
                              <span className="h6 mb-0">Easiest</span>
                            </td>
                            <td>22/11/2024</td>
                            <td>Futures</td>
                            <td>$10000</td>
                            <td>TradeStation</td>
                            <td>Interactive Brokers</td>
                            <td>$199</td>
                            <td>0</td>
                            <td>
                              <div className="btn-group">
                                <a
                                  type="button"
                                  className="text-dark dropdown-toggle"
                                  data-toggle="dropdown"
                                >
                                  <i className="fas fa-ellipsis-v"></i>
                                </a>
                                <ul className="dropdown-menu">
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="./subscribers"
                                    >
                                      <i class="fas fa-user-tag mr-1"></i>
                                      Subscribers
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      <i class="fas fa-bullhorn mr-1"></i>
                                      Broadcast
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      <i class="fas fa-stream mr-1"></i>
                                      Featured
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      <i class="fas fa-eye-slash mr-1"></i>Hide
                                      From Strategy List
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="./createstrategy"
                                    >
                                      <i class="fas fa-edit mr-1"></i>
                                      Edit
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      class="dropdown-item text-danger"
                                      href="#"
                                    >
                                      <i class="fas fa-trash-alt mr-1"></i>
                                      Delete
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span class="badge badge-warning">Featured</span>
                              <br />
                              <a href="/manager/strategydetails">
                                <i className="fas fa-external-link-alt mr-2"></i>
                              </a>
                              <span className="h6 mb-0">JingleTrade</span>
                            </td>
                            <td>22/11/2024</td>
                            <td>Futures</td>
                            <td>$10000</td>
                            <td>TradeStation</td>
                            <td>Interactive Brokers</td>
                            <td>$199</td>
                            <td>0</td>
                            <td>
                              <div className="btn-group">
                                <a
                                  type="button"
                                  className="text-dark dropdown-toggle"
                                  data-toggle="dropdown"
                                >
                                  <i className="fas fa-ellipsis-v"></i>
                                </a>
                                <ul className="dropdown-menu">
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="./subscribers"
                                    >
                                      <i class="fas fa-user-tag mr-1"></i>
                                      Subscribers
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      <i class="fas fa-bullhorn mr-1"></i>
                                      Broadcast
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      <i class="fas fa-stream mr-1"></i>
                                      Featured
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      <i class="fas fa-eye-slash mr-1"></i>Hide
                                      From Strategy List
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="./createstrategy"
                                    >
                                      <i class="fas fa-edit mr-1"></i>
                                      Edit
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      class="dropdown-item text-danger"
                                      href="#"
                                    >
                                      <i class="fas fa-trash-alt mr-1"></i>
                                      Delete
                                    </a>
                                  </li>
                                </ul>
                              </div>
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
      <Scripttag />
    </>
  );
};

export default MyStrategy;
