import React, { Component } from "react";
import Head from "next/head";
import Navbar from "./components/frontend/navbar";
import Headtag from "./components/frontend/headtag";
import Footer from "./components/frontend/footer";
import Scripttag from "./components/frontend/scripttag";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const hypotheticalData = [
  {
    Year: "2017",
    Price: 80,
  },
  {
    Year: "2018",
    Price: 90,
  },
  {
    Year: "2019",
    Price: 50,
  },
  {
    Year: "2020",
    Price: 100,
  },
  {
    Year: "2021",
    Price: 10,
  },
  {
    Year: "2022",
    Price: 130,
  },
  {
    Year: "2023",
    Price: 400,
  },
  {
    Year: "2024",
    Price: 10,
  },
];

export default class Index extends Component {
  render() {
    return (
      <>
        <Head>
          <title>CopyTrading | Index</title>
        </Head>
        <Headtag />
        <Navbar />
        {/* Hero Section */}
        <section className="hero-section hero">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center zindex-1">
                <h1 className="mb-3 text-white">
                  The alternative alternative investment.
                </h1>
                <p className="mb-4 text-white">
                  For that tiny, risky, “I'll-try-anything-once” portion of your
                  portfolio. Turn on an automated trading strategy inside your
                  regular brokerage account.
                </p>
                <a href="#" className="btn btn-yellow">
                  HOW IT WORKS
                </a>
              </div>
            </div>
          </div>
          <div id="scene">
            <img
              className="img-fluid hero-bg-1 up-down-animation"
              src="../frontend/images/background-shape/feature-bg-2.png"
            />
            <img
              className="img-fluid hero-bg-2 left-right-animation"
              src="../frontend/images/background-shape/seo-ball-1.png"
            />
            <img
              className="img-fluid hero-bg-3 left-right-animation"
              src="../frontend/images/background-shape/seo-half-cycle.png"
            />
            <img
              className="img-fluid hero-bg-4 up-down-animation"
              src="../frontend/images/background-shape/green-dot.png"
            />
            <img
              className="img-fluid hero-bg-5 left-right-animation"
              src="../frontend/images/background-shape/blue-half-cycle.png"
            />
            <img
              className="img-fluid hero-bg-6 up-down-animation"
              src="../frontend/images/background-shape/seo-ball-1.png"
            />
            <img
              className="img-fluid hero-bg-7 left-right-animation"
              src="../frontend/images/background-shape/yellow-triangle.png"
            />
            <img
              className="img-fluid hero-bg-8 up-down-animation"
              src="../frontend/images/background-shape/service-half-cycle.png"
            />
            <img
              className="img-fluid hero-bg-9 up-down-animation"
              src="../frontend/images/background-shape/team-bg-triangle.png"
            />
          </div>
        </section>

        <section className="section-lg feature mb-0" id="feature">
          <div className="container">
            <div className="row">
              <div className="col-md-4 mb-80">
                <div className="d-flex feature-item">
                  <div>
                    <i className="ti-bar-chart-alt feature-icon mr-4"></i>
                  </div>
                  <div>
                    <h4>2,166</h4>
                    <p>Trading Strategies Tracked</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-80">
                <div className="d-flex feature-item">
                  <div>
                    <i className="ti-direction-alt feature-icon mr-4"></i>
                  </div>
                  <div>
                    <h4>1,310</h4>
                    <p>Brokerage Accounts using CopyTrading.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-80">
                <div className="d-flex feature-item">
                  <div>
                    <i className="ti-user feature-icon mr-4"></i>
                  </div>
                  <div>
                    <h4>52,486</h4>
                    <p>Strategy Managers Evaluated</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <h2 className="section-title text-center my-5">
                  $94.8 Million Dollars of Assets Connected
                </h2>

                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={hypotheticalData}>
                    <CartesianGrid strokeDasharray="5 5" />
                    <XAxis dataKey="Year" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="Price"
                      stroke="#0909ff"
                      fill="#0909ff"
                    />
                  </AreaChart>
                </ResponsiveContainer>
                <p className="mt-3 text-center">
                  Typically, alternative investments tell you how much money
                  they've “raised.” They tout their “assets under management.”
                  At CopyTrading, your money never leaves your brokerage
                  account. So, instead, we show off about how much capital has
                  been “connected” to CopyTrading by investors like you.
                </p>
              </div>
            </div>
          </div>
          <img
            className="feature-bg-1 up-down-animation"
            src="../frontend/images/background-shape/feature-bg-1.png"
            alt="bg-shape"
          />
          <img
            className="feature-bg-2 left-right-animation"
            src="../frontend/images/background-shape/feature-bg-2.png"
            alt="bg-shape"
          />
        </section>

        <section className="section-lg seo">
          <div className="container">
            <div className="row py-5">
              <div className="col m-auto">
                <a href="#" className="text-center">
                  <img
                    className="img-fluid"
                    src="../frontend/images/clients-logo/press-barrons-logo.png"
                    alt="press-barrons-logo"
                  />
                </a>
              </div>
              <div className="col m-auto">
                <a href="#" className="text-center">
                  <img
                    className="img-fluid"
                    src="../frontend/images/clients-logo/press-benzinga-logo.png"
                    alt="press-benzinga-logo"
                  />
                </a>
              </div>
              <div className="col m-auto">
                <a href="#" className="text-center">
                  <img
                    className="img-fluid"
                    src="../frontend/images/clients-logo/press-bloomberg-logo.png"
                    alt="press-bloomberg-logo"
                  />
                </a>
              </div>
              <div className="col m-auto">
                <a href="#" className="text-center">
                  <img
                    className="img-fluid"
                    src="../frontend/images/clients-logo/press-ft-logo.png"
                    alt="press-ft-logo"
                  />
                </a>
              </div>
              <div className="col m-auto">
                <a href="#" className="text-center">
                  <img
                    className="img-fluid"
                    src="../frontend/images/clients-logo/press-huffpost-logo.png"
                    alt="press-huffpost-logo"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section-lg seo">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 className="section-title text-center">
                  Featured Strategies
                </h2>

                <div className="my-4">
                  <div className="rounded bg-white p-4 shadow-primary">
                    <div className="table-responsive p-0">
                      <table
                        id="datatable"
                        className="table table-borderless table-sm"
                      >
                        <tbody>
                          <tr>
                            <td>
                              <h6 className="mb-0">Easiest</h6>
                              <p className="mb-0">Manager: CopyTrading</p>
                            </td>
                            <td>
                              <span className="badge badge-primary">
                                Futures
                              </span>
                            </td>
                            <td>
                              <h6 className="text-success mb-0">+110.5%</h6>
                              <p className="mb-0">
                                Annual Return since March 31, 2023
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h6 className="mb-0">Easiest</h6>
                              <p className="mb-0">Manager: CopyTrading</p>
                            </td>
                            <td>
                              <span className="badge badge-primary">
                                Futures
                              </span>
                            </td>
                            <td>
                              <h6 className="text-success mb-0">+110.5%</h6>
                              <p className="mb-0">
                                Annual Return since March 31, 2023
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h6 className="mb-0">Easiest</h6>
                              <p className="mb-0">Manager: CopyTrading</p>
                            </td>
                            <td>
                              <span className="badge badge-primary">
                                Futures
                              </span>
                            </td>
                            <td>
                              <h6 className="text-success mb-0">+110.5%</h6>
                              <p className="mb-0">
                                Annual Return since March 31, 2023
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h6 className="mb-0">Easiest</h6>
                              <p className="mb-0">Manager: CopyTrading</p>
                            </td>
                            <td>
                              <span className="badge badge-primary">
                                Futures
                              </span>
                            </td>
                            <td>
                              <h6 className="text-success mb-0">+110.5%</h6>
                              <p className="mb-0">
                                Annual Return since March 31, 2023
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h6 className="mb-0">Easiest</h6>
                              <p className="mb-0">Manager: CopyTrading</p>
                            </td>
                            <td>
                              <span className="badge badge-primary">
                                Futures
                              </span>
                            </td>
                            <td>
                              <h6 className="text-success mb-0">+110.5%</h6>
                              <p className="mb-0">
                                Annual Return since March 31, 2023
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <p className="text-center mt-3">
                  All results on CopyTrading are hypothetical. Trading is risky,
                  and you can lose money. Sure, these pictures look great, but
                  remember we're showing you only the best strategies. There
                  were others that frankly stunk up the place. CopyTrading is
                  not appropriate for everyone. If you can't afford to lose
                  money, CopyTrading probably isn't right for you. Please see
                  important warnings and disclosures at the bottom of this page.
                </p>
              </div>
            </div>
          </div>
          <img
            className="seo-bg-shape-1 left-right-animation"
            src="../frontend/images/background-shape/seo-ball-1.png"
            alt="bg-shape"
          />
          <img
            className="seo-bg-shape-2 up-down-animation"
            src="../frontend/images/background-shape/seo-half-cycle.png"
            alt="bg-shape"
          />
          <img
            className="seo-bg-shape-3 left-right-animation"
            src="../frontend/images/background-shape/seo-ball-2.png"
            alt="bg-shape"
          />
        </section>

        <section className="section-lg service">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-4 mb-80 text-center">
                <i className="ti-shield feature-icon mb-3"></i>
                <p>Money stays in your brokerage account at all times</p>
              </div>

              <div className="col-md-4 mb-80 text-center">
                <i className="ti-power-off feature-icon mb-3"></i>
                <p>Start and stop at any time</p>
              </div>

              <div className="col-md-4 mb-80 text-center">
                <i className="ti-world feature-icon mb-3"></i>
                <p>We are a U.S.-regulated company, based in New York</p>
              </div>
            </div>
          </div>

          <img
            className="service-bg-shape-1 up-down-animation"
            src="../frontend/images/background-shape/service-half-cycle.png"
            alt="background-shape"
          />
          <img
            className="service-bg-shape-2 left-right-animation"
            src="../frontend/images/background-shape/feature-bg-2.png"
            alt="background-shape"
          />
        </section>

        <section className="section-lg service-bottom">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="section-title">Is CopyTrading for you?</h2>
              </div>

              <div className="col-sm-6 mb-4">
                <div className="rounded bg-white p-4 shadow-primary">
                  <h4>Multiple Instruments</h4>
                  <p>
                    CopyTrading offers automated strategies that trade stocks,
                    options, futures, and forex.
                  </p>
                </div>
              </div>

              <div className="col-sm-6 mb-4 translate-y-150">
                <div className="rounded bg-primary p-4 shadow-primary">
                  <h4 className="text-white">Flat Monthly Fees</h4>
                  <p className="text-white">
                    One thing we hate about hedge funds: they charge a
                    percentage of any profits they generate. We don’t. Every
                    strategy at CopyTrading can be rented for a flat monthly
                    fee. If a strategy generates profits, you pay $0 extra.
                  </p>
                </div>
              </div>

              <div className="col-sm-6 mb-4">
                <div className="rounded bg-white p-4 shadow-primary">
                  <h4>Money stays in your account</h4>
                  <p>
                    Another thing we hate about hedge funds: when you want your
                    money returned to you, you need to ask for it. And sometimes
                    the hedge fund doesn’t return it right away. At CopyTrading,
                    you never ask for your money. That’s because it always stays
                    inside your brokerage account.
                  </p>
                </div>
              </div>

              <div className="col-sm-6 mb-4 translate-y-150">
                <div className="rounded bg-white p-4 shadow-primary">
                  <h4>Minimum Investment</h4>
                  <p>
                    Some strategies on CopyTrading can be traded with as little
                    as a few thousand dollars. Many are tradable with between
                    $10,000 or $30,000.
                  </p>
                </div>
              </div>

              <div className="col-sm-6 mb-4">
                <div className="rounded bg-primary p-4 shadow-primary">
                  <h4 className="text-white">Full transparency</h4>
                  <p className="text-white">
                    We show you all the results of all the strategies tracked by
                    CopyTrading. Some are good. Some are stinky. You choose
                    which strategies to turn on inside your brokerage account.
                  </p>
                </div>
              </div>

              <div className="col-sm-6 mb-4 translate-y-150">
                <div className="rounded bg-white p-4 shadow-primary">
                  <h4>Start and stop instantly</h4>
                  <p>
                    If you find a strategy you like, turn it on instantly.
                    Decide you don’t like it? Turn it off instantly. Mix
                    multiple strategies together. You’re in charge.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <img
            className="service-bg-1 up-down-animation"
            src="../frontend/images/background-shape/feature-bg-2.png"
          />
          <img
            className="service-bg-2 left-right-animation"
            src="../frontend/images/background-shape/seo-half-cycle.png"
          />
          <img
            className="service-bg-3 up-down-animation"
            src="../frontend/images/background-shape/team-bg-triangle.png"
          />
          <img
            className="service-bg-4 left-right-animation"
            src="../frontend/images/background-shape/green-dot.png"
          />
          <img
            className="service-bg-5 up-down-animation"
            src="../frontend/images/background-shape/team-bg-triangle.png"
          />
        </section>

        <section className="section-lg team">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-title">Our Team</h2>
                <p className="mb-100">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu
                  <br />
                  fugiat nulla pariatur. Excepteur sint occaecat{" "}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 mx-auto mb-3">
                <div className="team-member">
                  <div className="d-flex mb-4">
                    <div className="mr-3">
                      <img
                        className="rounded-circle img-fluid"
                        src="../frontend/images/team/team-1.jpg"
                        alt="team-member"
                      />
                    </div>
                    <div className="align-self-center">
                      <h4>Becroft</h4>
                      <h6 className="text-color">web designer</h6>
                    </div>
                  </div>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. S eparated they
                  </p>
                </div>
              </div>
              <div className="col-lg-3 mx-auto mb-3">
                <div className="team-member">
                  <div className="d-flex mb-4">
                    <div className="mr-3">
                      <img
                        className="rounded-circle img-fluid"
                        src="../frontend/images/team/team-2.jpg"
                        alt="team-member"
                      />
                    </div>
                    <div className="align-self-center">
                      <h4>John Doe</h4>
                      <h6 className="text-color">web developer</h6>
                    </div>
                  </div>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. S eparated they
                  </p>
                </div>
              </div>
              <div className="col-lg-3 mx-auto mb-3">
                <div className="team-member">
                  <div className="d-flex mb-4">
                    <div className="mr-3">
                      <img
                        className="rounded-circle img-fluid"
                        src="../frontend/images/team/team-3.jpg"
                        alt="team-member"
                      />
                    </div>
                    <div className="align-self-center">
                      <h4>Erik Ligas</h4>
                      <h6 className="text-color">Programmer</h6>
                    </div>
                  </div>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. S eparated they
                  </p>
                </div>
              </div>
              <div className="col-lg-3 mx-auto mb-3">
                <div className="team-member">
                  <div className="d-flex mb-4">
                    <div className="mr-3">
                      <img
                        className="rounded-circle img-fluid"
                        src="../frontend/images/team/team-1.jpg"
                        alt="team-member"
                      />
                    </div>
                    <div className="align-self-center">
                      <h4>Erik Ligas</h4>
                      <h6 className="text-color">Programmer</h6>
                    </div>
                  </div>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. S eparated they
                  </p>
                </div>
              </div>
            </div>
          </div>

          <img
            className="team-bg-shape-1 up-down-animation"
            src="../frontend/images/background-shape/seo-ball-1.png"
            alt="background-shape"
          />
          <img
            className="team-bg-shape-2 left-right-animation"
            src="../frontend/images/background-shape/seo-ball-1.png"
            alt="background-shape"
          />
          <img
            className="team-bg-shape-3 left-right-animation"
            src="../frontend/images/background-shape/team-bg-triangle.png"
            alt="background-shape"
          />
          <img
            className="team-bg-shape-4 up-down-animation img-fluid"
            src="../frontend/images/background-shape/team-bg-dots.png"
            alt="background-shape"
          />
        </section>

        <section className="newsletter py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2>Ready to Start Investing?</h2>
                <p className="mb-5">
                  Set up your account and start choosing strategies.
                </p>
                <p>
                  <a className="btn btn-secondary btn-lg">START TRADING</a>
                </p>
              </div>
            </div>
          </div>

          <img
            className="newsletter-bg-shape left-right-animation"
            src="../frontend/images/background-shape/seo-ball-2.png"
            alt="background-shape"
          />
        </section>

        <Footer />
        <Scripttag />
      </>
    );
  }
}
