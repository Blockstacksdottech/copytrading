import Head from "next/head";
import Navbar from "../components/panel/navbar";
import Sidebar from "./components/sidebar";
import Feed from "./components/feed";
import Footer from "../components/panel/footer";
import Headtag from "../components/panel/headtag";
import Scripttag from "../components/panel/scripttag";
import React, { useEffect } from "react";

const Platforms = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/dist/js/datatable.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Head>
        <title>Platforms</title>
        <meta name="description" content="Platforms" />
      </Head>

      <Headtag />
      <Navbar />
      <Sidebar />

      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Platforms</h1>
              </div>
              <div className="col-sm-6">
                <div className="float-right">
                  <a className="btn btn-primary" href="./addplatform">
                    Add Platform
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
                            <th>Trade Type</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <img
                                src="../frontend/images/clients-logo/ninjatrader_logo.png"
                                className="img-fluid"
                                alt="Platform Image"
                                height={"250px"}
                                width={"250px"}
                              />
                            </td>
                            <td>Ninja Traders</td>
                            <td>tt@t.com</td>
                            <td>
                              <span class="badge bg-primary text-white mr-2">
                                STOCKS
                              </span>
                              <span class="badge bg-primary text-white mr-2">
                                OPTIONS
                              </span>
                              <span class="badge bg-primary text-white mr-2">
                                FUTURES
                              </span>
                              <span class="badge bg-primary text-white">
                                FOREX
                              </span>
                            </td>
                            <td>
                              <a className="dropdown-item text-danger" href="#">
                                <i className="fas fa-trash-alt mr-1"></i>
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
          </div>
        </div>
      </div>

      <Feed />
      <Footer />
      <Scripttag />
    </>
  );
};

export default Platforms;
