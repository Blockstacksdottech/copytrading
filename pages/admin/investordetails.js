import React, { useEffect, useState } from "react";
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
import Checker from "../components/utils/Checker";
import { useSearchParams } from "next/navigation";
import { formatDate, formatImage, patchReq, req } from "@/helpers";
import { toast } from "react-toastify";



const Investordetails = () => {

  const [investor,setInvestor] = useState({});
  const [loading,setLoading] = useState(true);
  const searchParams = useSearchParams()

  const id = searchParams.get("id")


  useEffect(() => {
    if (id){
      fetchUser(id)
    }
  },[id])

  const fetchUser = async (id) => {
    setLoading(true);
    const resp = await req(`adminvestors/${id}`)
    if (resp){
      setInvestor(resp)
    }
    setLoading(false);
  }

  const updateVerificationStatus = async (e) => {
    e.preventDefault()
    const status = document.getElementById("status").value;
    const reason = document.getElementById("reason").value;
    const body = {
      isVerified : status === "verified" ? true : false,
      reason
    }
    const res = await patchReq(`adminvestors/${id}/`,body)
    if (res){
      toast.success("updated")
      fetchUser(id)
    }

  }



  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/dist/js/datatable.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <>
      <Head>
        <title>Investors Details</title>
        <meta name="description" content="Investors Details" />
      </Head>
      <Checker only_admin={true}>
      <Headtag />
      <Navbar />
      <Sidebar />

      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-12">
                <h1 className="m-0">Investor Details</h1>
              </div>
            </div>
          </div>
        </div>
        {
          !loading && investor && <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="card shadow-none">
                  <div className="card-header">
                    <h5 className="mb-0">Profile</h5>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-3 m-auto">
                        <img
                          src={investor.profile.profile_picture ? formatImage(investor.profile.profile_picture) : "/dist/img/avatar5.png"}
                          alt="Testing111"
                          className="img-circle img-fluid w-50"
                        />
                      </div>
                      <div className="col-lg-3 m-auto">
                        <div className="form-group">
                          <label>Name:</label>
                          <span className="ml-2">{investor.profile.full_name}</span>
                        </div>
                        <div className="form-group">
                          <label>Mobile:</label>
                          <span className="ml-2">{investor.profile.mobile}</span>
                        </div>
                        <div className="form-group">
                          <label>City:</label>
                          <span className="ml-2">{investor.profile.city}</span>
                        </div>
                        <div className="form-group">
                          <label>Country:</label>
                          <span className="ml-2">{investor.profile.country}</span>
                        </div>
                      </div>
                      <div className="col-lg-3 m-auto">
                        <div className="form-group">
                          <label>Email:</label>
                          <span className="ml-2">{investor.email}</span>
                        </div>
                        <div className="form-group">
                          <label>Zip / Postal Code:</label>
                          <span className="ml-2">{investor.profile.postal_code}</span>
                        </div>
                        <div className="form-group">
                          <label>State:</label>
                          <span className="ml-2">{investor.profile.state}</span>
                        </div>
                        <div className="form-group">
                          <label>Address:</label>
                          <span className="ml-2">{investor.profile.address}</span>
                        </div>
                      </div>
                      <div className="col-lg-3 m-auto">
                        <div className="info-box">
                          <span className="info-box-icon bg-primary">
                            <h1 className="mb-0">S</h1>
                          </span>
                          <div className="info-box-content">
                            <span className="info-box-text">
                              Subscription Plan
                            </span>
                            <span className="info-box-number">$499/month</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="row">
              <div className="col-lg-12 mx-auto">
                <div className="card shadow-none">
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
            </div> */}

            <div className="row">
              <div className="col-lg-12 mx-auto">
                <div className="card shadow-none">
                  <div className="card-header">
                    <h5>Subscribed Strategy</h5>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive p-0">
                      <table className="table table-bordered table-hover table-sm datatable">
                        <thead>
                          <tr>
                            <th>STRATEGY</th>
                            <th>Date | Time</th>
                            <th>Manager</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            investor.subscriptions.map((e,i) => {
                              return <tr>
                              <td>
                                <a
                                  className="fas fa-external-link-alt mr-2"
                                  href={`/admin/strategydetails?id=${e.id}`}
                                ></a>
                                <span className="h6 mb-0">{e.strategy.name}</span>
                              </td>
                              <td>{formatDate(new Date(e.strategy.date))}</td>
                              <td>{e.strategy.creator.name}</td>
                              <td>
                                <a
                                  type="button"
                                  className="btn btn-default"
                                  href={`/admin/strategydetails?id=${e.id}`}
                                >
                                  <i className="fas fa-external-link-alt"></i>
                                </a>
                              </td>
                            </tr>
                            })
                          }
                          
                          
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="card shadow-none">
                  <div className="card-header">
                    <h5 className="mb-0">Documentation</h5>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="h4 mb-3">
                          Government-issued ID : {investor.profile.government_id_type} ({investor.profile.government_id_number})
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Front</label>
                          <br />
                          {
                            investor.documents.front && <img
                            src={formatImage(investor.documents.front)}
                            className="elevation-1 img-fluid"
                            alt="Goverment Issued ID Card"
                          />
                          }
                          
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Back</label>
                          <br />
                          {
                            investor.documents.back && <img
                            src={formatImage(investor.documents.back)}
                            className="elevation-1 img-fluid"
                            alt="Goverment Issued ID Card"
                          />
                          }
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-12">
                        <div className="h4 mb-3">
                          Tax Identification Number (TIN) : {investor.profile.tin}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                        {
                            investor.documents.tin && <img
                            src={formatImage(investor.documents.tin)}
                            className="elevation-1 img-fluid"
                            alt="Goverment Issued ID Card"
                          />
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="card shadow-none">
                  <div className="card-header">
                    <h5 className="mb-0">Verification Status</h5>
                  </div>
                  <div className="card-body">
                    <div className="form-group">
                      <label>Status</label>
                      <select id="status" defaultValue={investor.isVerified ? "verified" : "rejected"} className="form-control">
                        <option></option>
                        <option value={"verified"}>Verified</option>
                        <option value={"rejected"}>Rejected</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Reason behind rejection</label>
                      <input
                        id="reason"
                        className="form-control"
                        placeholder="Reason behind rejection"
                        defaultValue={investor.reason}
                      />
                    </div>
                    <div className="form-group float-right mb-0">
                      <button type="submit" className="btn btn-primary" onClick={updateVerificationStatus}>
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
        }

        
      </div>

      <Feed />
      <Footer />
      <Scripttag />
      </Checker>
      
    </>
  );
};

export default Investordetails;








            {/* <div className="row">
              <div className="col-lg-6">
                <div className="card shadow-none">
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
                <div className="card shadow-none">
                  <div className="card-header">
                    <h5>Trade Line Chart</h5>
                  </div>
                  <div className="card-body">
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart width={500} height={300} data={dataLineChart}>
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
                <div className="card shadow-none">
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
                          activeBar={<Rectangle fill="gold" stroke="purple" />}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card shadow-none">
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
            </div> */}