import Head from "next/head";
import Navbar from "../components/panel/navbar";
import Sidebar from "./components/sidebar";
import Feed from "./components/feed";
import Footer from "../components/panel/footer";
import Headtag from "../components/panel/headtag";
import Scripttag from "../components/panel/scripttag";
import React from "react";

const BrokerTransmit = () => {
  return (
    <>
      <Head>
        <title>Broker Transmit</title>
        <meta name="description" content="Broker Transmit" />
      </Head>

      <Headtag />
      <Navbar />
      <Sidebar />

      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-12">
                <h1 className="mb-3">
                  BrokerTransmit: Use your broker account to be a trade leader
                </h1>
                <p>
                  If you'd like to become a trade leader here on CopyTrading,
                  you can use your brokerage account to do it. This means that
                  you can attract "followers" (subscribers) to your strategy,
                  and their brokerage accounts will closely mirror yours.
                </p>
                <p>
                  You'll build your strategy track record here on CopyTrading
                  just like other strategy managers do. Except, instead of
                  typing your trade signals directly into CopyTrading, we'll
                  automatically post your trade signals based on what your
                  brokerage account trades.
                </p>

                <p>
                  Note: Your track record here on CopyTrading will not exactly
                  match your brokerage account performance. It will be a close
                  facsimile of your broker performance, but not an identical
                  one. Rather, your record here on CopyTrading will resemble how
                  your followers perform when they copy your trades (as opposed
                  to your trades themselves).
                </p>
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
                      <table className="table table-bordered table-sm">
                        <thead>
                          <tr>
                            <th>Broker</th>
                            <th>Status</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>STONEX</td>
                            <td>
                              <span className="badge badge-danger">
                                Not Connected
                              </span>
                            </td>
                            <td>
                              <a className="btn btn-dark btn-sm">
                                Setup Broker Account
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>Interactive Brokers</td>
                            <td>
                              <span className="badge badge-danger">
                                Not Connected
                              </span>
                            </td>
                            <td>
                              <a className="btn btn-dark btn-sm">
                                Setup Broker Account
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

export default BrokerTransmit;
