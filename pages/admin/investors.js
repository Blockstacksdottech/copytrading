import React, { Component } from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar2";
import Feed from "../components/feed";
import Footer from "../components/footer";

export default class Investors extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Investors</title>
          <meta name="description" content="Investors" />
        </Head>

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
                      <div className="table-responsive p-0">
                        <table
                          id="datatable-Investors"
                          className="table table-bordered table-sm"
                        >
                          <thead>
                            <tr className="bg-light">
                              <th className="w-5"></th>
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
                                  className="img-circle elevation-1 img-fluid"
                                  alt="Investor Image"
                                />
                              </td>
                              <td>Testing1111</td>
                              <td>tt@t.com</td>
                              <td>1234567890</td>
                              <td>USA</td>
                              <td>
                                <span className="badge bg-success">
                                  Verified
                                </span>
                              </td>
                              <td>
                                <span className="badge bg-success">Active</span>
                              </td>
                              <td>
                                <a
                                  className="btn-default btn mr-2"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Investor Details"
                                  href="/admin/investordetails"
                                >
                                  <i className="fas fa-eye"></i>
                                </a>
                                <a
                                  className="btn-success btn mr-2"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Verification"
                                  href="/admin/verification"
                                >
                                  <i className="fas fa-user-check"></i>
                                </a>
                                <a
                                  className="btn-danger btn"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Ban"
                                  href="#"
                                >
                                  <i className="fas fa-ban"></i>
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="/dist/img/avatar5.png"
                                  className="img-circle elevation-1 img-fluid"
                                  alt="Investor Image"
                                />
                              </td>
                              <td>Testing1111</td>
                              <td>tt@t.com</td>
                              <td>1234567890</td>
                              <td>USA</td>
                              <td>
                                <span className="badge bg-success">
                                  Verified
                                </span>
                              </td>
                              <td>
                                <span className="badge bg-danger">Banned</span>
                              </td>
                              <td>
                                <a
                                  className="btn-default btn mr-2"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Investor Details"
                                  href="/admin/investordetails"
                                >
                                  <i className="fas fa-eye"></i>
                                </a>
                                <a
                                  className="btn-success btn mr-2"
                                  href="/admin/verification"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Verification"
                                >
                                  <i className="fas fa-user-check"></i>
                                </a>
                                <a
                                  className="btn-danger btn"
                                  href="#"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Ban"
                                >
                                  <i className="fas fa-ban"></i>
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="/dist/img/avatar5.png"
                                  className="img-circle elevation-1 img-fluid"
                                  alt="Investor Image"
                                />
                              </td>
                              <td>Testing1111</td>
                              <td>tt@t.com</td>
                              <td>1234567890</td>
                              <td>USA</td>
                              <td>
                                <span className="badge bg-warning">
                                  Pending
                                </span>
                              </td>
                              <td>
                                <span className="badge bg-warning">Active</span>
                              </td>
                              <td>
                                <a
                                  className="btn-default btn mr-2"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Investor Details"
                                  href="/admin/investordetails"
                                >
                                  <i className="fas fa-eye"></i>
                                </a>
                                <a
                                  className="btn-warning btn mr-2"
                                  href="/admin/verification"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Verification"
                                >
                                  <i className="fas fa-user-check"></i>
                                </a>
                                <a
                                  className="btn-danger btn"
                                  href="#"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Ban"
                                >
                                  <i className="fas fa-ban"></i>
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="/dist/img/avatar5.png"
                                  className="img-circle elevation-1 img-fluid"
                                  alt="Investor Image"
                                />
                              </td>
                              <td>Testing1111</td>
                              <td>tt@t.com</td>
                              <td>1234567890</td>
                              <td>USA</td>
                              <td>
                                <span className="badge bg-danger">
                                  Rejected
                                </span>
                                <p className="mb-0 mt-1">
                                  Improper Documentation
                                </p>
                              </td>
                              <td>
                                <span className="badge bg-danger">Banned</span>
                              </td>
                              <td>
                                <a
                                  className="btn-default btn mr-2"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Investor Details"
                                  href="/admin/investordetails"
                                >
                                  <i className="fas fa-eye"></i>
                                </a>
                                <a
                                  className="btn-danger btn mr-2"
                                  href="/admin/verification"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Verification"
                                >
                                  <i className="fas fa-user-check"></i>
                                </a>
                                <a
                                  className="btn-danger btn"
                                  href="#"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Ban"
                                >
                                  <i className="fas fa-ban"></i>
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