import Head from "next/head";
import Navbar from "../components/panel/navbar";
import Sidebar from "./components/sidebar";
import Feed from "./components/feed";
import Footer from "../components/panel/footer";
import Headtag from "../components/panel/headtag";
import Scripttag from "../components/panel/scripttag";
import React, { useEffect } from "react";

const AddPlatform = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/dist/js/datatable.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Head>
        <title>Add Platform</title>
        <meta name="description" content="Add Platform" />
      </Head>

      <Headtag />
      <Navbar />
      <Sidebar />

      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-12">
                <h1 className="m-0 text-center">Add Platform</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="card card-primary">
                  <div className="card-body">
                    <form>
                      <div className="form-group">
                        <label>Image of Platform</label>
                        <input className="form-control" type="file" />
                      </div>
                      <div className="form-group">
                        <label>Name of Platform</label>
                        <input className="form-control" type="text" />
                      </div>
                      <div className="form-group">
                        <label>Platform Trade Type</label>
                        <div className="row">
                          <div className="col-sm-3">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                              />
                              <label className="form-check-label">Stocks</label>
                            </div>
                          </div>
                          <div className="col-sm-3">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                              />
                              <label className="form-check-label">
                                Options
                              </label>
                            </div>
                          </div>
                          <div className="col-sm-3">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                              />
                              <label className="form-check-label">
                                Futures
                              </label>
                            </div>
                          </div>
                          <div className="col-sm-3">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                              />
                              <label className="form-check-label">Forex</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Email of Platform</label>
                        <input className="form-control" type="email" />
                      </div>
                      <div className="form-group">
                        <div className="float-right">
                          <a className="btn btn-primary">Add Platform</a>
                        </div>
                      </div>
                    </form>
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

export default AddPlatform;
