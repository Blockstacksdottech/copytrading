import Head from "next/head";
import Navbar from "../components/panel/navbar";
import Sidebar from "./components/sidebar";
import Feed from "./components/feed";
import Footer from "../components/panel/footer";
import Headtag from "../components/panel/headtag";
import Scripttag from "../components/panel/scripttag";
import React, { useEffect } from "react";

const CreateStrategy = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/dist/js/datatable.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Head>
        <title>Create Strategy</title>
        <meta name="description" content="Create Strategy" />
      </Head>

      <Headtag />
      <Navbar />
      <Sidebar />

      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-12">
                <h1 className="m-0 text-center">
                  Create your Trading Strategy
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="card card-primary">
                  <div className="card-body">
                    <form>
                      <div className="form-group">
                        <label>Name your Strategy</label>
                        <input className="form-control" />
                        <span className="form-text">
                          The strategy name is your "brand." Make it short and
                          memorable.
                        </span>
                      </div>
                      <div className="form-group">
                        <label>What will you trade?</label>
                        <div className="row">
                          <div className="col-sm-3">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                              />
                              <label className="form-check-label">Stocks</label>
                            </div>
                          </div>
                          <div className="col-sm-3">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                              />
                              <label className="form-check-label">
                                Options
                              </label>
                            </div>
                          </div>
                          <div className="col-sm-3">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                              />
                              <label className="form-check-label">
                                Futures
                              </label>
                            </div>
                          </div>
                          <div className="col-sm-3">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                              />
                              <label className="form-check-label">Forex</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Model Account Size</label>
                        <select className="form-control">
                          <option>Choose Model Account</option>
                          <option>$10000</option>
                          <option>$25000</option>
                          <option>$50000</option>
                          <option>$100000</option>
                        </select>
                        <span className="form-text">
                          Your Model Account will increase or decrease as you
                          issue trades.
                        </span>
                      </div>
                      <div className="form-group">
                        <label>How you will control your Model Account?</label>
                        <div className="row">
                          <div className="col-sm-3">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                              />
                              <label className="form-check-label">
                                NinjaTrader
                              </label>
                            </div>
                          </div>
                          <div className="col-sm-3">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                              />
                              <label className="form-check-label">
                                TradeStation
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>How much to charge?</label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">$</span>
                          </div>
                          <input type="text" className="form-control" />
                        </div>
                        <span className="form-text">Price per month </span>
                      </div>
                      <div className="form-group">
                        <label>Brief Description</label>
                        <textarea
                          className="form-control"
                          maxlength="20"
                          rows="3"
                          placeholder="Brief description, 20 words or fewer"
                        ></textarea>
                      </div>
                      <div className="form-group">
                        <label>Detailed Description</label>
                        <textarea
                          className="form-control"
                          rows="6"
                          placeholder="More detailed description if any"
                        ></textarea>
                      </div>
                      <div className="form-group">
                        <label>Auto-Close Positions at End of Day?</label>
                        <div className="form-text">
                          If you want to close out a positions at the end of the
                          day, we encourage you to explicitly enter a trade
                          signal. However, you can also specify a "fail-safe"
                          time for each day, at which time specific open
                          positions in your system will be closed at the market
                          price. Please specify all times as Eastern USA time
                          (New York City), using a 24-hour clock, in HH:MM
                          format. (Note: Please allow at least 2 minutes for
                          positions to be closed.)
                        </div>
                        <div className="input-group my-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Symbol or ALL"
                          />
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Auto-Close Time 24HH:MM"
                          />
                          <div className="input-group-append">
                            <button className="btn btn-secondary" type="button">
                              Add
                            </button>
                          </div>
                        </div>
                        <div className="form-text mb-3">
                          You can type a specific symbol, or you can type ALL to
                          tell Collective2 to close all symbols at a certain
                          time of day.
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="table-responsive">
                              <table className="table table-sm table-bordered">
                                <thead>
                                  <tr>
                                    <th>Symbol</th>
                                    <th>Daily Auto-Close Time (ET)</th>
                                    <th></th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>ALL</td>
                                    <td>01:49 PM</td>
                                    <td>
                                      <a className="btn btn-sm btn-danger">
                                        <i className="fas fa-trash-alt"></i>
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Subscriber Control</label>
                        <div className="form-text">
                          Some strategy developers want to cap the number of
                          subscribers allowed for a trading strategy.
                          Alternately, some developers want to create a trading
                          strategy, but they do not want to allow subscribers
                          (yet). You can specify that here.
                        </div>
                        <input
                          type="number"
                          className="form-control my-3"
                          placeholder="Max # Subscribers"
                        />
                        <div className="form-text">
                          Leave blank to establish no subscriber limits. Type 0
                          to allow no subscribers. Strategy developer is always
                          allowed to subscribe.
                        </div>
                      </div>
                      <div className="form-group">
                        <label>
                          Delay Closed-Trade Reporting for Non-Subscribers
                        </label>
                        <div className="form-text">
                          We always hide your open trades from non-subscribers.
                          When a trade is closed, it becomes visible in your
                          trading record. This works well for most systems,
                          since it protects your trading system while allowing
                          people to get a sense of your recent trades (thus
                          increasing your subscription rate).
                        </div>
                        <div className="form-text">
                          However, some systems may wish to delay closed-trade
                          reporting. For example, if a system is always in the
                          market - either long or short - then displaying a
                          closed trade immediately will "give away" the open
                          position, even if it is not displayed. Therefore, you
                          can specify a time, in hours, to delay the display of
                          recently closed trades.
                        </div>
                        <input
                          type="number"
                          className="form-control my-3"
                          placeholder="Delay Hours"
                        />
                        <div className="form-text">
                          Leave blank to make trades visible as soon as they are
                          closed. Enter 24 to delay trade record for one day.
                          (Maximum allowed delay = 168)
                        </div>
                      </div>
                      <div className="form-group">
                        <label>AutoTrade Fill Algorithm - Limit Orders</label>
                        <div className="form-text">
                          By default, whenever your strategy issues a limit
                          order, CopyTrading will recognize that your limit is
                          "filled" whenever we see the price is touched anywhere
                          in the market.
                        </div>
                        <div className="form-text">
                          Alternately, you can choose that Collective2 should
                          refuse to fill your limit orders until at least one
                          real-life AutoTrader of your strategy is filled in his
                          or her brokerage account.
                        </div>
                        <div
                          className="alert alert-light mt-2 text-left"
                          role="alert"
                        >
                          <h6 className="alert-heading">
                            Which one would you choose?
                          </h6>
                          <p className="mb-0">
                            There is no "better" or "worse" choice. The best
                            choice depends on your strategy's trading style, and
                            the instruments it trades and their market
                            liquidity. Generally speaking, select "Wait for
                            AutoTraders" if you trade instruments with less
                            liquidity, or if you try to scalp limit orders.
                          </p>
                        </div>
                        <div className="my-3">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              name="autoTrade"
                              type="radio"
                            />
                            <label className="form-check-label">
                              <strong>Fill when touched:</strong> Limit orders
                              fill as soon as price is touched anywhere in the
                              market
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              name="autoTrade"
                              type="radio"
                            />
                            <label className="form-check-label">
                              <strong>Wait for AutoTraders:</strong> Limit
                              orders do not fill until first real-life
                              AutoTrader subscriber fills
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <a className="btn btn-primary float-right">
                          Create Strategy
                        </a>
                      </div>
                    </form>
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

export default CreateStrategy;
