import React, { Component } from "react";
import Head from "next/head";
import Navbar from "../components/panel/navbar";
import Sidebar from "./components/sidebar";
import Feed from "./components/feed";
import Footer from "../components/panel/footer";
import Headtag from "../components/panel/headtag";
import Scripttag from "../components/panel/scripttag";
import {
  BarChart,
  Bar,
  Brush,
  ReferenceLine,
  Rectangle,
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const dataAreaChart = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const dataLineChart = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const dataBarChart = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const dataBrushBarChart = [
  { name: "1", uv: 300, pv: 456 },
  { name: "2", uv: -145, pv: 230 },
  { name: "3", uv: -100, pv: 345 },
  { name: "4", uv: -8, pv: 450 },
  { name: "5", uv: 100, pv: 321 },
  { name: "6", uv: 9, pv: 235 },
  { name: "7", uv: 53, pv: 267 },
  { name: "8", uv: 252, pv: -378 },
  { name: "9", uv: 79, pv: -210 },
  { name: "10", uv: 294, pv: -23 },
  { name: "12", uv: 43, pv: 45 },
  { name: "13", uv: -74, pv: 90 },
  { name: "14", uv: -71, pv: 130 },
  { name: "15", uv: -117, pv: 11 },
  { name: "16", uv: -186, pv: 107 },
  { name: "17", uv: -16, pv: 926 },
  { name: "18", uv: -125, pv: 653 },
  { name: "19", uv: 222, pv: 366 },
  { name: "20", uv: 372, pv: 486 },
  { name: "21", uv: 182, pv: 512 },
  { name: "22", uv: 164, pv: 302 },
  { name: "23", uv: 316, pv: 425 },
  { name: "24", uv: 131, pv: 467 },
  { name: "25", uv: 291, pv: -190 },
  { name: "26", uv: -47, pv: 194 },
  { name: "27", uv: -415, pv: 371 },
  { name: "28", uv: -182, pv: 376 },
  { name: "29", uv: -93, pv: 295 },
  { name: "30", uv: -99, pv: 322 },
  { name: "31", uv: -52, pv: 246 },
  { name: "32", uv: 154, pv: 33 },
  { name: "33", uv: 205, pv: 354 },
  { name: "34", uv: 70, pv: 258 },
  { name: "35", uv: -25, pv: 359 },
  { name: "36", uv: -59, pv: 192 },
  { name: "37", uv: -63, pv: 464 },
  { name: "38", uv: -91, pv: -2 },
  { name: "39", uv: -66, pv: 154 },
  { name: "40", uv: -50, pv: 186 },
];

export default class Investordetails extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Investors Details</title>
          <meta name="description" content="Investors Details" />
        </Head>

        <Headtag />
        <Navbar />
        <Sidebar />

        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-12">
                  <h1 className="m-0">Investors Details</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card card-primary card-outline">
                    <div className="card-header">
                      <h5 className="mb-0">Profile</h5>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-3 m-auto">
                          <img
                            src="/dist/img/avatar5.png"
                            alt="Testing111"
                            className="img-circle img-fluid w-50"
                          />
                        </div>
                        <div className="col-lg-3 m-auto">
                          <div className="form-group">
                            <label>Name:</label>
                            <span className="ml-2">Testing111 asdf</span>
                          </div>
                          <div className="form-group">
                            <label>Mobile:</label>
                            <span className="ml-2">1234567890</span>
                          </div>
                          <div className="form-group">
                            <label>City:</label>
                            <span className="ml-2">xyz</span>
                          </div>
                          <div className="form-group">
                            <label>Country:</label>
                            <span className="ml-2">xyz</span>
                          </div>
                        </div>
                        <div className="col-lg-3 m-auto">
                          <div className="form-group">
                            <label>Email:</label>
                            <span className="ml-2">test@email.com</span>
                          </div>
                          <div className="form-group">
                            <label>Zip / Postal Code:</label>
                            <span className="ml-2">2365</span>
                          </div>
                          <div className="form-group">
                            <label>State:</label>
                            <span className="ml-2">tyuio</span>
                          </div>
                          <div className="form-group">
                            <label>Address:</label>
                            <span className="ml-2">Demo Street 123, Demo</span>
                          </div>
                        </div>
                        <div className="col-lg-3 m-auto">
                          <div class="info-box">
                            <span class="info-box-icon bg-primary">
                              <h1 className="mb-0">S</h1>
                            </span>
                            <div class="info-box-content">
                              <span class="info-box-text">
                                Subscription Plan
                              </span>
                              <span class="info-box-number">$499/month</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 mx-auto">
                  <div className="card card-primary card-outline">
                    <div className="card-header">
                      <h5>Strategy Subscribed</h5>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive p-0">
                        <table
                          id="Subscribedstrategy"
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
                                  href="/admin/strategydetails"
                                ></a>
                                <span className="h6 mb-0">Easiest</span>
                              </td>
                              <td>09-06-2024 | 01:58 AM</td>
                              <td>CopyTrading</td>
                              <td>
                                <a
                                  type="button"
                                  className="btn btn-default"
                                  href="/admin/strategydetails"
                                >
                                  <i className="fas fa-external-link-alt"></i>
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <a
                                  className="fas fa-external-link-alt mr-2"
                                  href="/admin/strategydetails"
                                ></a>
                                <span className="h6 mb-0">Easiest</span>
                              </td>
                              <td>09-06-2024 | 01:58 AM</td>
                              <td>CopyTrading</td>
                              <td>
                                <a
                                  type="button"
                                  className="btn btn-default"
                                  href="/admin/strategydetails"
                                >
                                  <i className="fas fa-external-link-alt"></i>
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

              <div className="row">
                <div className="col-lg-12 mx-auto">
                  <div className="card card-primary card-outline">
                    <div className="card-header">
                      <h5>Brokerage Account</h5>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive p-0">
                        <table className="table table-bordered table-hover table-sm">
                          <thead>
                            <tr className="bg-light">
                              <th>Broker</th>
                              <th>Trade Type</th>
                              <th>Unique Account Identifier</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Stonex</td>
                              <td>Futures</td>
                              <td>AsD45678</td>
                              <td>
                                <span className="badge bg-success">Active</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <div className="card card-primary card-outline">
                    <div className="card-header">
                      <h5>Trade Area Chart</h5>
                    </div>
                    <div className="card-body">
                      <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={dataAreaChart}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Area
                            type="monotone"
                            dataKey="uv"
                            stroke="#0909ff"
                            fill="#0909ff"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card card-primary card-outline">
                    <div className="card-header">
                      <h5>Trade Line Chart</h5>
                    </div>
                    <div className="card-body">
                      <ResponsiveContainer width="100%" height={300}>
                        <LineChart
                          width={500}
                          height={300}
                          data={dataLineChart}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line
                            type="monotone"
                            dataKey="pv"
                            stroke="#0909ff"
                            activeDot={{ r: 8 }}
                          />
                          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <div className="card card-primary card-outline">
                    <div className="card-header">
                      <h5>Trade Bar Chart</h5>
                    </div>
                    <div className="card-body">
                      <ResponsiveContainer width="100%" height={300}>
                        <BarChart width={500} height={300} data={dataBarChart}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar
                            dataKey="pv"
                            fill="#0909ff"
                            activeBar={<Rectangle fill="pink" stroke="blue" />}
                          />
                          <Bar
                            dataKey="uv"
                            fill="#82ca9d"
                            activeBar={
                              <Rectangle fill="gold" stroke="purple" />
                            }
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card card-primary card-outline">
                    <div className="card-header">
                      <h5>Trade Brush Bar Chart</h5>
                    </div>
                    <div className="card-body">
                      <ResponsiveContainer width="100%" height={300}>
                        <BarChart
                          width={500}
                          height={300}
                          data={dataBrushBarChart}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend
                            verticalAlign="top"
                            wrapperStyle={{ lineHeight: "40px" }}
                          />
                          <ReferenceLine y={0} stroke="#000" />
                          <Brush dataKey="name" height={30} stroke="#0909ff" />
                          <Bar dataKey="pv" fill="#0909ff" />
                          <Bar dataKey="uv" fill="#82ca9d" />
                        </BarChart>
                      </ResponsiveContainer>
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
  }
}
