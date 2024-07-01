import Head from "next/head";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Feed from "../components/feed";
import Footer from "../components/footer";
import React, { Component } from "react";

export default class Chat extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Support</title>
          <meta name="description" content="Support" />
        </Head>

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
                      class="btn btn-primary btn-sm"
                      href="/investor/submitrequest"
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
              <div className="row pt-3">
                <div className="col-lg-12">
                  <div class="card card-primary card-outline">
                    <div class="card-body p-0">
                      <div class="table-responsive mailbox-messages">
                        <table class="table table-hover mb-0">
                          <tbody>
                            <tr>
                              <td class="mailbox-name td-chat">
                                <a href="/investor/chat">
                                  <h6 className="text-dark">
                                    Lorem ipsum dolor sit amet, consectetuer
                                    adipiscing elit. Aenean commodo ligula eget
                                    dolor.
                                  </h6>
                                  <p className="text-dark mb-0">5 mins ago</p>
                                  <span class="badge bg-success text-white">
                                    Open
                                  </span>
                                </a>
                              </td>
                              <td>
                                <button
                                  type="button"
                                  class="btn btn-danger btn-sm"
                                >
                                  <i class="far fa-trash-alt"></i>
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td class="mailbox-name td-chat">
                                <a href="/investor/chat">
                                  <h6 className="text-dark">
                                    Lorem ipsum dolor sit amet, consectetuer
                                    adipiscing elit. Aenean commodo ligula eget
                                    dolor.
                                  </h6>
                                  <p className="text-dark mb-0">5 mins ago</p>
                                  <span class="badge bg-info text-white">
                                    Closed
                                  </span>
                                </a>
                              </td>
                              <td>
                                <button
                                  type="button"
                                  class="btn btn-danger btn-sm"
                                >
                                  <i class="far fa-trash-alt"></i>
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
      </>
    );
  }
}
