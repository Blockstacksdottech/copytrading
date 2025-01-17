import Head from "next/head";
import Navbar from "../components/panel/navbar";
import Sidebar from "./components/sidebar";
import Feed from "./components/feed";
import Footer from "../components/panel/footer";
import Headtag from "../components/panel/headtag";
import Scripttag from "../components/panel/scripttag";
import React, { useEffect } from "react";

const PlatformTransmit = () => {
  return (
    <>
      <Head>
        <title>Platform Transmit</title>
        <meta name="description" content="Platform Transmit" />
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
                  PlatformTransmit: Use popular trading software to be a Trade
                  Leader
                </h1>
                <p>
                  If you'd like to become a Trade Leader, you can use popular
                  trading software to manage your Model Account here on
                  Collective2. This means that you can attract "followers"
                  (subscribers) to your strategy, and their brokerage accounts
                  will closely mirror the trades generated by your TradeStation
                  (or NinjaTrader or MetaTrader or AlgoTerminal).
                </p>
                <p>
                  You'll build your strategy track record here on Collective2
                  just like other strategy managers do. Except, instead of
                  typing your trade signals directly into Collective2, you can
                  use popular trading software packages to drive your
                  Collective2 Model Account.
                </p>

                <p>
                  Your track record here on Collective2 will not exactly match
                  the trade prices generated by your software. It will be a
                  close facsimile of your trade performance, but not an
                  identical one. Rather, your record here on Collective2 will
                  resemble how your followers perform when they copy your trades
                  (as opposed to your trades themselves).
                </p>

                <p>Let's get started!</p>
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="card shadow-none">
                  <div className="card-body">
                    <div className="table-responsive p-0">
                      <table className="table table-bordered table-sm">
                        <thead>
                          <tr>
                            <th>Platform</th>
                            <th>Status</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>NINJATRADER</td>
                            <td>
                              <span className="badge badge-danger">
                                Not Connected
                              </span>
                            </td>
                            <td>
                              <a className="btn btn-dark btn-sm">
                                Setup Platform
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>TradeStation</td>
                            <td>
                              <span className="badge badge-danger">
                                Not Connected
                              </span>
                            </td>
                            <td>
                              <a className="btn btn-dark btn-sm">
                                Setup Platform
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

export default PlatformTransmit;
