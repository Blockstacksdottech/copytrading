import Head from "next/head";
import Navbar from "../components/panel/navbar";
import Sidebar from "./components/sidebar";
import Feed from "./components/feed";
import Footer from "../components/panel/footer";
import Headtag from "../components/panel/headtag";
import Scripttag from "../components/panel/scripttag";
import React, { useEffect } from "react";

const Subscribers = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/dist/js/datatable.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Head>
        <title>Subscribers</title>
        <meta name="description" content="Subscribers" />
      </Head>

      <Headtag />
      <Navbar />
      <Sidebar />

      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Subscribers</h1>
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
                            <th>Name</th>
                            <th>Strategy Subscribed</th>
                            <th>Date</th>
                            <th>Trade</th>
                            <th>Account Size</th>
                            <th>Subscription Paid</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Investor Name</td>
                            <td>
                              <a href="/manager/strategydetails">
                                <i className="fas fa-external-link-alt mr-2"></i>
                              </a>
                              <span className="h6 mb-0">Easiest</span>
                            </td>
                            <td>22/11/2024</td>
                            <td>Futures</td>
                            <td>$10000</td>
                            <td>$199</td>
                            <td>
                              <a className="btn btn-sm btn-danger">
                                <i class="fas fa-trash-alt"></i>
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
      <Scripttag />
    </>
  );
};

export default Subscribers;
