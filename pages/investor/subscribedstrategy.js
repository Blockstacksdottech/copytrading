import Head from "next/head";
import Navbar from "../components/panel/navbar";
import Sidebar from "./components/sidebar";
import Feed from "./components/feed";
import Footer from "../components/panel/footer";
import Headtag from "../components/panel/headtag";
import Scripttag from "../components/panel/scripttag";
import React, { useEffect } from "react";

const Subscribedstrategy = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/dist/js/datatable.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Head>
        <title>Subscribed Strategy</title>
        <meta name="description" content="Subscribed Strategy" />
      </Head>

      <Headtag />
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
                      <table className="table table-bordered table-hover table-sm datatable">
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
                              <button type="button" className="btn btn-danger">
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
      <Scripttag />
    </>
  );
};

export default Subscribedstrategy;
