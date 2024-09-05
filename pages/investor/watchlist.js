import Head from "next/head";
import Navbar from "../components/panel/navbar";
import Sidebar from "./components/sidebar";
import Feed from "./components/feed";
import Footer from "../components/panel/footer";
import Headtag from "../components/panel/headtag";
import Scripttag from "../components/panel/scripttag";
import React, { useEffect, useState } from "react";
import { postReq, req } from "@/helpers";
import { toast } from "react-toastify";
import Checker from "../components/utils/Checker";

const Watchlist = () => {
  const [strategies,setStrategies] = useState([])
  const [loading,setLoading] = useState(true)



 

  useEffect(()  => {
    fetchStrategies()
  },[])


  const fetchStrategies = async () => {
    const res = await req('strategies/watched')
    if (res) {
      setStrategies(res)
      setLoading(false)
    }
  }

  const unwatch = async (e) => {
    const res = await postReq(`strategies/${e.id}/unwatch/`)
    if (res){
      toast.success("Removed")
      fetchStrategies()
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
        <title>My Watchlist</title>
        <meta name="description" content="Watchlist" />
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
                <h1 className="m-0">Watch List</h1>
                <p>
                  You can follow these strategies automatically in your
                  brokerage account.
                </p>
              </div>
            </div>
          </div>
        </div>
        {
          !loading && <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="card shadow-none">
                  <div className="card-body">
                    <div className="table-responsive p-0">
                      <table className="table table-bordered table-hover table-sm datatable">
                        <thead>
                          <tr className="bg-light">
                            <td>STRATEGY</td>
                            <th>TRADES</th>
                            <th>NUM TRADES</th>
                            <th>WIN %</th>
                            <th>WIN MONTHS</th>
                            <th>MAX DRAWDOWN</th>
                            <th>ANN RETURN</th>
                            {/* <th>FOLLOW</th> */}
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            strategies.map((e,i) => {
                              return <tr>
                              <td>
                                <a
                                  className="fas fa-external-link-alt mr-2"
                                  href={`/investor/strategydetails?id=${e.strategy.id}`}
                                ></a>
                                <span className="h6 mb-0">{e.strategy.name}</span>
                              </td>
                              <td>
                                <span className="badge bg-light">{e.strategy.tradeType}</span>
                              </td>
                              <td>{e.result.total_trades}</td>
                              <td>{e.result.win_percentage}%</td>
                              <td>{e.result.winning_months}</td>
                              <td>{e.result.max_drawdown_percentage}%</td>
                              <td>{e.result.annual_return_percentage}%</td>
                              {/* <td>
                                <div
                                  className="btn-group btn-group-toggle"
                                  data-toggle="buttons"
                                >
                                  <label className="btn btn-light btn-sm active">
                                    <input
                                      type="radio"
                                      name="options"
                                      id="option_a1"
                                      autoComplete="off"
                                      checked="checked"
                                    />
                                    OFF
                                  </label>
                                  <label className="btn btn-light btn-sm">
                                    <input
                                      type="radio"
                                      name="options"
                                      id="option_a2"
                                      autoComplete="off"
                                    />
                                    SIMULATE
                                  </label>
                                  <label className="btn btn-light btn-sm">
                                    <input
                                      type="radio"
                                      name="options"
                                      id="option_a3"
                                      autoComplete="off"
                                    />
                                    LIVE
                                  </label>
                                </div>
                              </td> */}
                              <td>
                                <a className="btn btn-danger btn-sm" onClick={() => unwatch(e.strategy)}>
                                  <i className="far fa-times-circle"></i>
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

export default Watchlist;
