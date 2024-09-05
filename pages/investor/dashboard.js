import Head from "next/head";
import Navbar from "../components/panel/navbar";
import Sidebar from "./components/sidebar";
import Feed from "./components/feed";
import Footer from "../components/panel/footer";
import Headtag from "../components/panel/headtag";
import Scripttag from "../components/panel/scripttag";
import React, { useEffect, useState } from "react";
import Checker from "../components/utils/Checker";
import { formatDate, req } from "@/helpers";

const Dashboard = () => {

  const [strategies,setStrategies] = useState([])
  const [loading,setLoading] = useState(true)

  useEffect(()  => {
    fetchStrategies()
  },[])


  const fetchStrategies = async () => {
    const res = await req('strategies/subscribed')
    if (res) {
      setStrategies(res)
      setLoading(false)
    }
  }

  const formatPercValue = (am,perc) => {
    return am * (perc / 100)
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
        <title>Dashboard</title>
        <meta name="description" content="Dashboard" />
      </Head>
      <Checker>
      <Headtag />
      <Navbar />
      <Sidebar />

      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Simulation Account</h1>
              </div>
              {/* <div className="col-sm-6">
                <div className="d-flex">
                  <p className="ml-auto d-flex flex-column text-center">
                    <span className="text-dark">462.2</span>
                    <span className="text-muted">Portfolio Health</span>
                  </p>
                  <p className="ml-auto d-flex flex-column text-center">
                    <span className="text-dark">$661,600</span>
                    <span className="text-muted">Allocated</span>
                  </p>
                  <p className="ml-auto d-flex flex-column text-center">
                    <span className="text-danger">
                      <i className="fas fa-arrow-down"></i> $1,179
                    </span>
                    <span className="text-muted">1-Day Change</span>
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {!loading && <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="card card-primary shadow-none">
                  <div className="card-body">
                    {/* Message to show if there no any simulation */}
                    {/* <div className="text-center py-5">
                      <p className="font-weight-light">
                        Your Simulation Account is empty.
                      </p>
                      <p>Pick Strategies to add to your Simulation Account.</p>
                    </div> */}

                    <div className="table-responsive p-0">
                      <table className="table table-bordered table-sm datatable">
                        <thead>
                          <tr>
                            <th>STRATEGY</th>
                            <th>STARTED</th>
                            <th>
                              ALLOCATION <br />
                              <span className="small font-italic">
                                (Starting)
                              </span>
                            </th>
                            <th>
                              ALLOCATION <br />
                              <span className="small font-italic">
                                (Latest)
                              </span>
                            </th>
                            <th>
                              TODAY
                              <br />
                              <span className="small font-italic">
                                Change %
                              </span>
                            </th>
                            <th>
                              ALL TIME <br />
                              <span className="small font-italic">
                                Change %
                              </span>
                            </th>
                            {/* <th></th> */}
                          </tr>
                        </thead>
                        <tbody>
                          {
                            strategies.map((e,i) => {
                              return <tr>
                              <td>
                                <a
                                  className="fas fa-external-link-alt mr-2"
                                  href={`/investor/strategydetails/${e.strategy.id}`}
                                ></a>
                                <span className="h6 mb-0">{e.strategy.name}</span>
                              </td>
                              <td>{formatDate(new Date(e.strategy.date))}</td>
                              <td>${e.strategy.accountSize}</td>
                              <td>$68,000</td>
                              <td>
                                <span className="underline">
                                  ${formatPercValue(Number(e.strategy.accountSize),Number(e.result.todays_pl))}
                                </span>
                                <br />
                                <span className=" text-danger">{e.result.todays_pl}%</span>
                              </td>
                              <td>
                                <span className="text-success underline">
                                ${formatPercValue(Number(e.strategy.accountSize),Number(e.result.annual_return_percentage))}
                                </span>
                                <br />
                                <span className=" text-success">{e.result.annual_return_percentage}%</span>
                              </td>
                              {/* <td>
                                <div className="btn-group">
                                  <button
                                    type="button"
                                    className="btn btn-secondary dropdown-toggle"
                                    data-toggle="dropdown"
                                  >
                                    <i className="fas fa-cog"></i>
                                  </button>
                                  <ul className="dropdown-menu">
                                    <li>
                                      <a className="dropdown-item" href="#">
                                        Stop Sim
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="#">
                                        Change Sim Allocation
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="#">
                                        Message to Leader
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td> */}
                            </tr>
                            })
                          }
                          
                        </tbody>
                        {/* <tfoot>
                          <tr className="bg-light">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Total</td>
                            <td className="text-danger">$150</td>
                            <td className="text-success">$1000</td>
                            <td></td>
                          </tr>
                        </tfoot> */}
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>}
        
      </div>

      <Feed />
      <Footer />
      <Scripttag />
      </Checker>
      
    </>
  );
};

export default Dashboard;
