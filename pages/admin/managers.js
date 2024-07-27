import Head from "next/head";
import Navbar from "../components/panel/navbar";
import Sidebar from "./components/sidebar";
import Feed from "./components/feed";
import Footer from "../components/panel/footer";
import Headtag from "../components/panel/headtag";
import Scripttag from "../components/panel/scripttag";
import React, { useEffect } from "react";

const Managers = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/dist/js/datatable.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Head>
        <title>Managers</title>
        <meta name="description" content="Managers" />
      </Head>

      <Headtag />
      <Navbar />
      <Sidebar />

      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-12">
                <h1 className="m-0">Managers</h1>
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
                                alt="Manager Image"
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
                                      href="./managerdetails"
                                    >
                                      <i className="fas fa-info-circle mr-1"></i>{" "}
                                      Details
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="./verification"
                                    >
                                      <i className="fas fa-user-check mr-1"></i>
                                      Verify
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      <i className="fas fa-ban mr-1"></i>
                                      Ban
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item text-danger"
                                      href="#"
                                    >
                                      <i className="fas fa-trash-alt mr-1"></i>
                                      Delete
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
                                alt="Manager Image"
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
                                      href="./managerdetails"
                                    >
                                      <i className="fas fa-info-circle mr-1"></i>{" "}
                                      Details
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="./verification"
                                    >
                                      <i className="fas fa-user-check mr-1"></i>
                                      Verify
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      <i className="fas fa-ban mr-1"></i>
                                      Ban
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item text-danger"
                                      href="#"
                                    >
                                      <i className="fas fa-trash-alt mr-1"></i>
                                      Delete
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
                                alt="Manager Image"
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
                                      href="./managerdetails"
                                    >
                                      <i className="fas fa-info-circle mr-1"></i>{" "}
                                      Details
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="./verification"
                                    >
                                      <i className="fas fa-user-check mr-1"></i>
                                      Verify
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      <i className="fas fa-ban mr-1"></i>
                                      Ban
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item text-danger"
                                      href="#"
                                    >
                                      <i className="fas fa-trash-alt mr-1"></i>
                                      Delete
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
                                alt="Manager Image"
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
                                      href="./managerdetails"
                                    >
                                      <i className="fas fa-info-circle mr-1"></i>{" "}
                                      Details
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="./verification"
                                    >
                                      <i className="fas fa-user-check mr-1"></i>
                                      Verify
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      <i className="fas fa-ban mr-1"></i>
                                      Ban
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item text-danger"
                                      href="#"
                                    >
                                      <i className="fas fa-trash-alt mr-1"></i>
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

export default Managers;
