import Head from "next/head";
import Navbar from "../components/panel/navbar";
import Sidebar from "./components/sidebar";
import Feed from "./components/feed";
import Footer from "../components/panel/footer";
import Headtag from "../components/panel/headtag";
import Scripttag from "../components/panel/scripttag";
import React, { useEffect, useState } from "react";
import { formatDate, req, postReq } from "@/helpers";
import Checker from "../components/utils/Checker";

const StrategySubscriptionRequest = () => {
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
        console.log(response);
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
    const resp = await postReq(`strategies/${e.id}/update-status/`);
    if (resp) {
      fetchUserStrategies();
    }
  };

  return (
    <>
      <Head>
        <title>Strategy Subscription Request for Strategy Name</title>
        <meta name="description" content="Strategy Subscription Request" />
      </Head>

      <Checker only_manager={true}></Checker>

      <Headtag />
      <Navbar />
      <Sidebar />

      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-12">
                <h1 className="m-0">
                  Strategy Subscription Request for Strategy Name
                </h1>
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
                      {strategies.length > 0 && (
                        <table className="table table-bordered table-sm datatable">
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Email</th>
                              <th>Date of Request</th>
                              <th>Status</th>
                              <th></th>
                            </tr>
                          </thead>
                          {strategies.length > 0 && (
                            <tbody>
                              {strategies.map((e, i) => {
                                return (
                                  <tr>
                                    <td>Name</td>
                                    <td>Email</td>
                                    <td>Date</td>
                                    <td>
                                      <a className="badge badge-success">
                                        Approved
                                      </a>
                                      <a className="badge badge-danger">
                                        Rejected
                                      </a>
                                    </td>

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
                                          <li>
                                            <a
                                              href="#"
                                              className="dropdown-item"
                                            >
                                              Approve
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              href="#"
                                              className="dropdown-item"
                                            >
                                              Reject
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          )}
                        </table>
                      )}
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

export default StrategySubscriptionRequest;
