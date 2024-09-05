import Head from "next/head";
import Navbar from "../components/panel/navbar";
import Sidebar from "./components/sidebar";
import Feed from "./components/feed";
import Footer from "../components/panel/footer";
import Headtag from "../components/panel/headtag";
import Scripttag from "../components/panel/scripttag";
import React, { useEffect , useState} from "react";
import {req,formatDate,postReq} from "@/helpers"
import { toast } from "react-toastify";
import Checker from "../components/utils/Checker";

const Strategy = () => {

  const [strats,setStrats] = useState([])
  
  

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
    }
  }

  const subscribe = async (e) => {
    const res = await postReq(`strategies/${e.id}/subscribe/`)
    if (res){
      toast.success("Subscription request sent")
      fetchStrats()
    }
  }

  const watch = async (e) => {
    const res = await postReq(`strategies/${e.id}/watch/`)
    if (res){
      toast.success("Added to watch list")
      fetchStrats()
    }
  }

  return (
    <>
      <Head>
        <title>Strategy</title>
        <meta name="description" content="Strategy" />
      </Head>
      <Checker>
      <Headtag />
      <Navbar />
      <Sidebar />

      <div className="content-wrapper">
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
                    {
                        strats.length > 0 && <table className="table table-bordered table-sm datatable">
                        <thead>
                          <tr>
                            <th>Strategy</th>
                            <th>Started</th>
                            <th>Trade</th>
                            <th>Broker</th>
                            <th>SUB FEE</th>
                            <th>Active</th>
                            <th>
                              SUBSCRIBERS <br />
                              <span className="small font-italic">Total</span>
                            </th>
                            <th></th>
                          </tr>
                        </thead>
                        {
                          strats.length > 0 && <tbody>
                            {
                              strats.map((e,i) => {
                                return <tr>
                                <td>
                                  {/* <a href="/manager/strategydetails">
                                    <i className="fas fa-external-link-alt mr-2"></i>
                                  </a> */}
                                  <span className="h6 mb-0">{e.name}</span>
                                </td>
                                <td>{formatDate(new Date(e.date))}</td>
                                <td>{e.tradeType}</td>
                                
                                <td>{e.broker.name}</td>
                                <td>${e.price}/month</td>
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
                                    <li >
                                        
                                        <a
                                            href={`/investor/strategydetails?id=${e.id}`}
                                            className="dropdown-item"
                                          >
                                            Details
                                          </a>
                                        </li>
                                    <li onClick={() => subscribe(e)}>
                                        
                                        <a
                                            href="#"
                                            className="dropdown-item"
                                          >
                                            Subscribe
                                          </a>
                                        </li>

                                        <li onClick={() => watch(e)}>
                                        
                                        <a
                                            href="#"
                                            className="dropdown-item"
                                          >
                                            Watch
                                          </a>
                                        </li>
                                      
                                      
                                      
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
      </Checker>
      
    </>
  );
};

export default Strategy;
