import Head from "next/head";
import Navbar from "../components/panel/navbar";
import Sidebar from "./components/sidebar";
import Feed from "./components/feed";
import Footer from "../components/panel/footer";
import Headtag from "../components/panel/headtag";
import Scripttag from "../components/panel/scripttag";
import React, { useEffect } from "react";
import Checker from "../components/utils/Checker";

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


      
      <Checker only_manager={true}>
      <Headtag />
      <Navbar />
      <Sidebar />

      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Dashboard</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="card card-primary shadow-none">
                  <div className="card-body">
                    <div className="table-responsive p-0">
                      <table className="table table-bordered table-sm datatable">
                        <thead>
                          <tr>
                            <th>STRATEGY</th>
                            <th>
                              TODAY P/L
                              <br />
                              <span className="small font-italic">
                                Change %
                              </span>
                            </th>
                            <th>
                              ALL TIME
                              <br />
                              <span className="small font-italic">
                                Change %
                              </span>
                            </th>
                            <th>
                              SIMULATIONS <br />
                              <span className="small font-italic">Today</span>
                            </th>
                            <th>
                              SUBSCRIBERS <br />
                              <span className="small font-italic">Today</span>
                            </th>
                            <th>
                              AUM <br />
                              <span className="small font-italic">Today</span>
                            </th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <a
                                className="fas fa-external-link-alt mr-2"
                                href="/manager/strategydetails"
                              ></a>
                              <span className="h6 mb-0">Easiest</span>
                            </td>
                            <td>$0</td>
                            <td>$0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>$0</td>
                            <td>
                              <div className="btn-group">
                                <button
                                  type="button"
                                  className="btn btn-secondary dropdown-toggle"
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
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
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
      </Checker>


      
    </>
  );
};

export default Dashboard;
