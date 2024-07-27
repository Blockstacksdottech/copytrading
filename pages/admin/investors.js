import Head from "next/head";
import Navbar from "../components/panel/navbar";
import Sidebar from "./components/sidebar";
import Feed from "./components/feed";
import Footer from "../components/panel/footer";
import Headtag from "../components/panel/headtag";
import Scripttag from "../components/panel/scripttag";
import React, { useEffect } from "react";

const Investors = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/dist/js/datatable.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Head>
        <title>Investors</title>
        <meta name="description" content="Investors" />
      </Head>

      <Headtag />
      <Navbar />
      <Sidebar />

      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-12">
                <h1 className="m-0">Investors</h1>
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
                    <div className="table-responsive">
                      <table className="table table-bordered table-sm datatable projects">
                        <thead>
                          <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Country</th>
                            <th>Verification</th>
                            <th>Account</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <img
                                src="/dist/img/avatar5.png"
                                className="table-avatar"
                                alt="Investor Image"
                              />
                            </td>
                            <td>Testing1111</td>
                            <td>tt@t.com</td>
                            <td>1234567890</td>
                            <td>USA</td>
                            <td>
                              <span className="badge bg-success">Verified</span>
                            </td>
                            <td>
                              <span className="badge bg-success">Active</span>
                            </td>
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
                                      href="./investordetails"
                                    >
                                      Investor Name Details
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="./verification"
                                    >
                                      Verify Investor Name
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Ban Investor Name
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Delete Investor Name
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="/dist/img/avatar5.png"
                                className="table-avatar"
                                alt="Investor Image"
                              />
                            </td>
                            <td>Testing1111</td>
                            <td>tt@t.com</td>
                            <td>1234567890</td>
                            <td>USA</td>
                            <td>
                              <span className="badge bg-success">Verified</span>
                            </td>
                            <td>
                              <span className="badge bg-danger">Banned</span>
                            </td>
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
                                      href="./investordetails"
                                    >
                                      Investor Name Details
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="./verification"
                                    >
                                      Verify Investor Name
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Ban Investor Name
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Delete Investor Name
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="/dist/img/avatar5.png"
                                className="table-avatar"
                                alt="Investor Image"
                              />
                            </td>
                            <td>Testing1111</td>
                            <td>tt@t.com</td>
                            <td>1234567890</td>
                            <td>USA</td>
                            <td>
                              <span className="badge bg-warning">Pending</span>
                            </td>
                            <td>
                              <span className="badge bg-warning">Active</span>
                            </td>
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
                                      href="./investordetails"
                                    >
                                      Investor Name Details
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="./verification"
                                    >
                                      Verify Investor Name
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Ban Investor Name
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Delete Investor Name
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="/dist/img/avatar5.png"
                                className="table-avatar"
                                alt="Investor Image"
                              />
                            </td>
                            <td>Testing1111</td>
                            <td>tt@t.com</td>
                            <td>1234567890</td>
                            <td>USA</td>
                            <td>
                              <span className="badge bg-danger">Rejected</span>
                              <p className="mb-0 mt-1">
                                Improper Documentation
                              </p>
                            </td>
                            <td>
                              <span className="badge bg-danger">Banned</span>
                            </td>
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
                                      href="./investordetails"
                                    >
                                      Investor Name Details
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="./verification"
                                    >
                                      Verify Investor Name
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Ban Investor Name
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Delete Investor Name
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

export default Investors;
