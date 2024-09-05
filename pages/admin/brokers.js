import Head from "next/head";
import Navbar from "../components/panel/navbar";
import Sidebar from "./components/sidebar";
import Feed from "./components/feed";
import Footer from "../components/panel/footer";
import Headtag from "../components/panel/headtag";
import Scripttag from "../components/panel/scripttag";
import Checker from "../components/utils/Checker";
import React, { useEffect, useState } from "react";
import {delReq, formatImage, req} from "../../helpers"
import { toast } from "react-toastify";

const Brokers = () => {
  
  const [loading,setLoading] = useState(true);
  const [brokers,setBrokers] = useState([])

  const fetchBrokers = async () => {
    const resp = await req("brokers")
    if (resp){
      setBrokers(resp)
      setLoading(false)
    }
  }

  const deleteBroker = async (id) => {
    const resp = await delReq(`brokers/${id}/`)
    if (resp){
      toast.success("Deleted")
      fetchBrokers();
    }
  }

  useEffect(() => {
    fetchBrokers()
  },[])

  
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/dist/js/datatable.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Head>
        <title>Brokers</title>
        <meta name="description" content="Brokers" />
      </Head>
      <Checker only_admin={true}>
      <Headtag />
      <Navbar />
      <Sidebar />

      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Brokers</h1>
              </div>
              <div className="col-sm-6">
                <div className="float-right">
                  <a className="btn btn-primary" href="./addbroker">
                    Add Broker
                  </a>
                </div>
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
                    <div className="table-responsive">
                      <table className="table table-bordered table-sm">
                        <thead>
                          <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            brokers.map((e,i) => {
                              return <tr key={e.image}>
                              <td>
                                <img
                                  src={formatImage(e.image)}
                                  className="img-fluid"
                                  alt="Broker Image"
                                  style={{width:100}}
                                />
                              </td>
                              <td>{e.name}</td>
                              <td>{e.email}</td>
                              
                              <td>
                                <a className="dropdown-item text-danger" href="#" onClick={() => deleteBroker(e.id)}>
                                  <i className="fas fa-trash-alt mr-1"></i>
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
      </div>

      <Feed />
      <Footer />
      <Scripttag />
      </Checker>
      
    </>
  );
};

export default Brokers;
