import Head from "next/head";
import Navbar from "../components/panel/navbar";
import Sidebar from "./components/sidebar";
import Feed from "./components/feed";
import Footer from "../components/panel/footer";
import Headtag from "../components/panel/headtag";
import Scripttag from "../components/panel/scripttag";
import React, { useEffect, useState } from "react";
import { formatDate, req } from "@/helpers";

const Strategy = () => {

  const [strats,setStrats] = useState([])
  const [loading,setLoading] = useState(true);
  
  

  useEffect(() => {
    fetchStrats()
  },[])


  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/dist/js/datatable.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const fetchStrats = async () => {
    const res = await req('strategies/all')
    if (res) {
      setStrats(res)
      setLoading(false)
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
        <title>Strategy</title>
        <meta name="description" content="Strategy" />
      </Head>

      <Headtag />
      <Navbar />
      <Sidebar />
    {
      !loading && <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-12">
              <div className="alert alert-warning alert-dismissible fade show">
                All performance results are hypothetical. Trading is risky and
                you can lose money.
              </div>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-sm-12">
              <h1 className="m-0">Strategy</h1>
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
                          <th>Strategy Name</th>
                          <th>Manager</th>
                          <th>Trades</th>
                          <th>Sub Fee</th>
                          <th>
                            Today P&L
                            {/* <select className="form-control form-control-sm">
                              <option>All Time</option>
                              <option>1 Month</option>
                              <option>3 Months</option>
                              <option>6 Months</option>
                            </select> */}
                          </th>
                          <th>
                            Start Date
                            {/* <select className="form-control form-control-sm">
                              <option>Strategy Age</option>
                              <option>Avg Leverage</option>
                              <option>Heart Attack Index</option>
                              <option>W:L Ratio</option>
                              <option>Sharpe Ratio</option>
                              <option>% Profitable</option>
                              <option>Suggested Capital</option>
                            </select> */}
                          </th>
                          <th>Max DD</th>
                          <th>Yearly P&L</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          strats.map((e,i) => {
                            return <tr>
                            <td>
                              {/* <span className="badge badge-warning">
                                Featured
                              </span> */}

                              <h6 className="mb-0">
                                <a
                                  className="fas fa-external-link-alt mr-1"
                                  href={`/admin/strategydetails?id=${e.id}`}
                                ></a>
                                {e.name}
                              </h6>
                            </td>
                            <td>
                              
                                {e.creator.name}
                              
                            </td>
                            <td>
                              <span className="badge badge-light">Futures</span>
                            </td>
                            <td>${e.price}/month</td>
                            <td>
                              <h6 className={`${e.result.todays_pl > 0 ? "text-success" : "text-danger"} mb-0`}>{e.result.todays_pl}%</h6>
                              {/* $34,600 */}
                            </td>
                            <td>
                              <h6 className="mb-0">{formatDate(new Date(e.date))}</h6>
                            </td>
                            <td>{e.result.max_drawdown_percentage}%</td>
                            <td>
                            <h6 className={`${e.result.annual_return_percentage > 0 ? "text-success" : "text-danger"} mb-0`}>{e.result.annual_return_percentage}%</h6>
                              
                            </td>
                            <td>
                              <a
                                className="fas fa-external-link-alt"
                                href={`/admin/strategydetails?id=${e.id}`}
                              ></a>
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
        </div>
      </div>
    </div>
    }
      
      <Feed />
      <Footer />
      <Scripttag />
    </>
  );
};

export default Strategy;
