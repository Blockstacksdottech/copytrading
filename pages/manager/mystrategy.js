import Head from "next/head";
import Navbar from "../components/panel/navbar";
import Sidebar from "./components/sidebar";
import Feed from "./components/feed";
import Footer from "../components/panel/footer";
import Headtag from "../components/panel/headtag";
import Scripttag from "../components/panel/scripttag";
import React, { useEffect,useState } from "react";
import { formatDate, req , postReq } from "@/helpers";

const MyStrategy = () => {
  const [strategies, setStrategies] = useState([]);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/dist/js/datatable.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    fetchUserStrategies();
  }, []);

  const fetchUserStrategies = async () => {
    try {
      const response = await req("strategies/my-strategies"); // Adjust the URL endpoint as needed

      if (response) {
        console.log(response)
        setStrategies(response);
        console.log("User's strategies fetched successfully:", response);
      } else {
        console.log("Failed to fetch user's strategies");
      }
    } catch (error) {
      console.error("Error fetching user's strategies:", error);
    }
  };

  const updateStatus = async (e) => {
    const resp = await postReq(`strategies/${e.id}/update-status/`)
    if (resp){
      fetchUserStrategies()
    }
  }

  return (
    <>
      <Head>
        <title>My Strategy</title>
        <meta name="description" content="My Strategy" />
      </Head>

      <Headtag />
      <Navbar />
      <Sidebar />

      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">My Strategy</h1>
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
                      {
                        strategies.length > 0 && <table className="table table-bordered table-sm datatable">
                        <thead>
                          <tr>
                            <th>Strategy</th>
                            <th>Started On</th>
                            <th>Trade</th>
                            <th>Account Size</th>
                            <th>Platform</th>
                            <th>Broker</th>
                            <th>Subscription Charge</th>
                            <th>Active</th>
                            <th>
                              SUBSCRIBERS <br />
                              <span className="small font-italic">Total</span>
                            </th>
                            <th></th>
                          </tr>
                        </thead>
                        {
                          strategies.length > 0 && <tbody>
                            {
                              strategies.map((e,i) => {
                                return <tr>
                                <td>
                                  {/* <a href="/manager/strategydetails">
                                    <i className="fas fa-external-link-alt mr-2"></i>
                                  </a> */}
                                  <span className="h6 mb-0">{e.name}</span>
                                </td>
                                <td>{formatDate(new Date(e.date))}</td>
                                <td>{e.tradeType}</td>
                                <td>${e.accountSize}</td>
                                <td>{e.controlModel}</td>
                                <td>{e.broker}</td>
                                <td>${e.price}</td>
                                <td>{e.enabled ? "Active" : "Not Active"}</td>
                                <td>{e.subs}</td>
                                <td>
                                  <div className="btn-group">
                                    <a
                                      type="button"
                                      className="text-dark dropdown-toggle"
                                      data-toggle="dropdown"
                                    >
                                      <i className="fas fa-ellipsis-v"></i>
                                    </a>
                                    <ul className="dropdown-menu">
                                      <li onClick={() => updateStatus(e)}>
                                        
                                      <a
                                          href="#"
                                          className="dropdown-item"
                                        >
                                          {e.enabled ? 'disable' : 'enable'}
                                        </a>
                                      </li>
                                      {/* <li>
                                        <a className="dropdown-item" href="#">
                                          <i class="fas fa-bullhorn mr-1"></i>
                                          Broadcast
                                        </a>
                                      </li>
                                      <li>
                                        <a className="dropdown-item" href="#">
                                          <i class="fas fa-stream mr-1"></i>
                                          Featured
                                        </a>
                                      </li> */}
                                      {/* <li>
                                        <a className="dropdown-item" href="#">
                                          <i class="fas fa-eye-slash mr-1"></i>Hide
                                          From Strategy List
                                        </a>
                                      </li> */}
                                      <li>
                                        <a
                                          className="dropdown-item"
                                          href={`/manager/updatestrategy?id=${e.id}`}
                                        >
                                          <i class="fas fa-edit mr-1"></i>
                                          Edit
                                        </a>
                                      </li>
                                      {/* <li>
                                        <a
                                          class="dropdown-item text-danger"
                                          href="#"
                                        >
                                          <i class="fas fa-trash-alt mr-1"></i>
                                          Delete
                                        </a>
                                      </li> */}
                                    </ul>
                                  </div>
                                </td>
                              </tr>
                              })
                            }
                          
                          
                        </tbody>

                          
                        }
                        
                      </table>
                      }
                      
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

export default MyStrategy;
