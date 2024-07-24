import Head from "next/head";
import Navbar from "../components/panel/navbar";
import Sidebar from "./components/sidebar";
import Feed from "./components/feed";
import Footer from "../components/panel/footer";
import Headtag from "../components/panel/headtag";
import Scripttag from "../components/panel/scripttag";
import React, { useEffect } from "react";

const Dashboard = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/dist/js/datatable.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard" />
      </Head>

      <Headtag />
      <Navbar />
      <Sidebar />

      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Simulation Account</h1>
              </div>
              <div className="col-sm-6">
                <div className="d-flex">
                  <p className="ml-auto d-flex flex-column text-center">
                    <span className="text-dark">462.2</span>
                    <span className="text-muted">Portfolio Health</span>
                  </p>
                  <p className="ml-auto d-flex flex-column text-center">
                    <span className="text-dark">$661,600</span>
                    <span className="text-muted">Allocated</span>
                  </p>
                  <p className="ml-auto d-flex flex-column text-center">
                    <span className="text-danger">
                      <i className="fas fa-arrow-down"></i> $1,179
                    </span>
                    <span className="text-muted">1-Day Change</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="card card-primary">
                  <div className="card-body">
                    {/* Message to show if there no any simulation */}
                    <div className="text-center py-5">
                      <p className="font-weight-light">
                        Your Simulation Account is empty.
                      </p>
                      <p>Pick Strategies to add to your Simulation Account.</p>
                    </div>

                    <div className="table-responsive p-0">
                      <table className="table table-bordered table-hover table-sm datatable">
                        <thead>
                          <tr className="bg-light">
                            <th>STRATEGY</th>
                            <th>STARTED</th>
                            <th colSpan="2">
                              ALLOCATION <br /> (Starting | Latest)
                            </th>
                            <th>
                              TODAY
                              <br />{" "}
                              <span className="small font-italic">
                                Change %
                              </span>
                            </th>
                            <th>
                              ALL TIME <br />{" "}
                              <span className="small font-italic">
                                Change %
                              </span>
                            </th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <a
                                className="fas fa-external-link-alt mr-2"
                                href="/investor/strategydetails"
                              ></a>
                              <span className="h6 mb-0">Easiest</span>
                            </td>
                            <td>09-06-2024</td>
                            <td>$67,000</td>
                            <td>$68,000</td>
                            <td>
                              <span className="text-danger underline">
                                $150
                              </span>
                              <br />
                              <span className=" text-danger">0.2%</span>
                            </td>
                            <td>
                              <span className="text-success underline">
                                $1000
                              </span>
                              <br />
                              <span className=" text-success">1.5%</span>
                            </td>
                            <td>
                              <div className="btn-group">
                                <button
                                  type="button"
                                  className="btn btn-default dropdown-toggle"
                                  data-toggle="dropdown"
                                >
                                  <i className="fas fa-cog"></i>
                                </button>
                                <ul className="dropdown-menu">
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Stop Sim
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Change Sim Allocation
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Message to Leader
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr className="bg-light">
                            <td colSpan="3"></td>
                            <td>Total</td>
                            <td className="text-danger">$150</td>
                            <td className="text-success">$1000</td>
                            <td></td>
                          </tr>
                        </tfoot>
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

export default Dashboard;
