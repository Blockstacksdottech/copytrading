import Head from "next/head";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Feed from "../components/feed";
import Footer from "../components/footer";
import Admheadtag from "../components/admheadtag";
import Admscripttag from "../components/admscripttag";
import React, { Component } from "react";

export default class Subscribedstrategy extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Subscribed Strategy</title>
          <meta name="description" content="Subscribed Strategy" />
        </Head>

        <Admheadtag />
        <Navbar />
        <Sidebar />

        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-12">
                  <h1 className="m-0 text-center">Subscribed Strategy</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12 mx-auto">
                  <div className="card card-primary card-outline">
                    <div className="card-body">
                      <div className="table-responsive p-0">
                        <table
                          id="datatable"
                          className="table table-bordered table-hover table-sm"
                        >
                          <thead>
                            <tr className="bg-light">
                              <th>STRATEGY</th>
                              <th>Date | Time</th>
                              <th>Manager</th>
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
                              <td>09-06-2024 | 01:58 AM</td>
                              <td>CopyTrading</td>
                              <td>
                                <button
                                  type="button"
                                  className="btn btn-danger"
                                >
                                  Unsubsribe
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
        <Admscripttag />
      </>
    );
  }
}
