import Head from "next/head";
import Navbar from "../components/panel/navbar";
import Sidebar from "./components/sidebar";
import Feed from "./components/feed";
import Footer from "../components/panel/footer";
import Headtag from "../components/panel/headtag";
import Scripttag from "../components/panel/scripttag";
import React, { Component } from "react";

const Support = () => {
  return (
    <>
      <Head>
        <title>Support</title>
        <meta name="description" content="Support" />
      </Head>

      <Headtag />
      <Navbar />
      <Sidebar />

      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6">
                <h1 className="m-0">Support</h1>
              </div>
              <div className="col-sm-6">
                <div className="float-right">
                  <a
                    type="button"
                    className="btn btn-primary btn-sm"
                    href="/manager/submitrequest"
                  >
                    Submit a Request
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="card shadow-none">
                  <div className="card-body p-0">
                    <div className="table-responsive mailbox-messages">
                      <table className="table mb-0">
                        <tbody>
                          <tr>
                            <td className="mailbox-name td-chat">
                              <a href="/manager/chat">
                                <h6 className="text-dark">
                                  Lorem ipsum dolor sit amet, consectetuer
                                  adipiscing elit. Aenean commodo ligula eget
                                  dolor.
                                </h6>
                                <p className="text-dark mb-0">5 mins ago</p>
                                <span className="badge bg-success text-white">
                                  Open
                                </span>
                              </a>
                            </td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-danger btn-sm"
                              >
                                <i className="far fa-trash-alt"></i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td className="mailbox-name td-chat">
                              <a href="/investor/chat">
                                <h6 className="text-dark">
                                  Lorem ipsum dolor sit amet, consectetuer
                                  adipiscing elit. Aenean commodo ligula eget
                                  dolor.
                                </h6>
                                <p className="text-dark mb-0">5 mins ago</p>
                                <span className="badge bg-info text-white">
                                  Closed
                                </span>
                              </a>
                            </td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-danger btn-sm"
                              >
                                <i className="far fa-trash-alt"></i>
                              </button>
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

export default Support;
