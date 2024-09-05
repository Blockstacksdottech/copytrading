import Head from "next/head";
import Navbar from "../components/panel/navbar";
import Sidebar from "./components/sidebar";
import Feed from "./components/feed";
import Footer from "../components/panel/footer";
import Headtag from "../components/panel/headtag";
import Scripttag from "../components/panel/scripttag";
import React, { Component, useEffect, useState } from "react";
import { delReq, formatDate, req } from "@/helpers";
import Checker from "../components/utils/Checker"
import { toast } from "react-toastify";

const Support = () => {

  const [tickets,setTickets] = useState([])
  const [loading,setLoading] = useState(true)

  const fetchTickets = async () => {
    const resp = await req("tickets")
    if (resp){
      setTickets(resp)
      setLoading(false)
    }
  }

  const deleteTicket = async (id) => {
    const resp = await delReq(`tickets/${id}`)
    if (resp){
      toast.success("deleted")
      fetchTickets();
    }
  }

  useEffect(() => {
    fetchTickets();
  },[])


  return (
    <>
      <Head>
        <title>Support</title>
        <meta name="description" content="Support" />
      </Head>

      <Checker>
      <Headtag />
      <Navbar />
      <Sidebar />

      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6">
                <h1 className="m-0">Support</h1>
              </div>
              <div className="col-sm-6">
                <div className="float-right">
                  <a
                    type="button"
                    className="btn btn-primary btn-sm"
                    href="/investor/submitrequest"
                  >
                    Submit a Request
                  </a>
                </div>
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
                  <div className="card-body p-0">
                    <div className="table-responsive mailbox-messages">
                      <table className="table mb-0">
                        <tbody>
                          { tickets.map((e,i) => {
                            return <tr>
                            <td className="mailbox-name td-chat">
                              <a href={`/investor/chat?id=${e.id}`}>
                                <h6 className="text-dark">
                                  {e.subject}
                                </h6>
                                <p className="text-dark mb-0">{formatDate(new Date(e.date_created))}</p>
                                {!e.isClosed && <span className="badge bg-success text-white">
                                  Open
                                </span>}
                                {
                                  e.isClosed && <span className="badge bg-info text-white">
                                  Closed
                                </span>
                                }
                                
                                
                              </a>
                            </td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-danger btn-sm"
                                onClick={() => deleteTicket(e.id)}
                              >
                                <i className="far fa-trash-alt"></i>
                              </button>
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

export default Support;
