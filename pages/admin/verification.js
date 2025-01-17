import Head from "next/head";
import Navbar from "../components/panel/navbar";
import Sidebar from "./components/sidebar";
import Feed from "./components/feed";
import Footer from "../components/panel/footer";
import Headtag from "../components/panel/headtag";
import Scripttag from "../components/panel/scripttag";
import React from "react";

const Verification = () => {
  return (
    <>
      <Head>
        <title>Verification</title>
        <meta name="description" content="Investors Verification" />
      </Head>

      <Headtag />
      <Navbar />
      <Sidebar />

      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-12">
                <h1 className="m-0">Verification</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="card shadow-none">
                  <div className="card-header">
                    <h3 className="card-title">Profile</h3>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-2">
                        <div className="card shadow-none text-center">
                          <img
                            className="img-fluid"
                            src="../dist/img/avatar5.png"
                            alt="Profile Photo"
                          />
                          <div className="card-footer bg-light">
                            <h5>Investor</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 m-auto">
                        <div className="form-group">
                          <label>Name:</label>
                          <span className="ml-2">Testing111 asdf</span>
                        </div>
                        <div className="form-group">
                          <label>Mobile:</label>
                          <span className="ml-2">1234567890</span>
                        </div>
                        <div className="form-group">
                          <label>City:</label>
                          <span className="ml-2">xyz</span>
                        </div>
                        <div className="form-group">
                          <label>Country:</label>
                          <span className="ml-2">xyz</span>
                        </div>
                      </div>
                      <div className="col-lg-3 m-auto">
                        <div className="form-group">
                          <label>Email:</label>
                          <span className="ml-2">test@email.com</span>
                        </div>
                        <div className="form-group">
                          <label>Zip / Postal Code:</label>
                          <span className="ml-2">2365</span>
                        </div>
                        <div className="form-group">
                          <label>State:</label>
                          <span className="ml-2">tyuio</span>
                        </div>
                        <div className="form-group">
                          <label>Address:</label>
                          <span className="ml-2">Demo Street 123, Demo</span>
                        </div>
                      </div>
                      <div className="col-lg-4 m-auto">
                        <div className="info-box">
                          <span className="info-box-icon bg-primary">
                            <h1 className="mb-0">S</h1>
                          </span>
                          <div className="info-box-content">
                            <span className="info-box-text">
                              Subscription Plan
                            </span>
                            <span className="info-box-number">$499/month</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="card shadow-none">
                  <div className="card-header">
                    <h5 className="mb-0">Documentation</h5>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="h4 mb-3">
                          Government-issued ID : Driving Licenese (USA120232672)
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Front</label>
                          <br />
                          <img
                            src="/dist/img/dl-front.jpg"
                            className="elevation-1 img-fluid"
                            alt="Goverment Issued ID Card"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Back</label>
                          <br />
                          <img
                            src="/dist/img/dl-back.jpg"
                            className="elevation-1 img-fluid"
                            alt="Goverment Issued ID Card"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-12">
                        <div className="h4 mb-3">
                          Tax Identification Number (TIN) : 123-456-7890
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <img
                            src="/dist/img/itin.jpg"
                            className="elevation-1 img-fluid"
                            alt="Goverment Issued ID Card"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="card shadow-none">
                  <div className="card-header">
                    <h5 className="mb-0">Verification Status</h5>
                  </div>
                  <div className="card-body">
                    <div className="form-group">
                      <label>Status</label>
                      <select className="form-control">
                        <option></option>
                        <option>Verified</option>
                        <option>Rejected</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Reason behind rejection</label>
                      <input
                        className="form-control"
                        placeholder="Reason behind rejection"
                      />
                    </div>
                    <div className="form-group float-right mb-0">
                      <button type="submit" className="btn btn-primary">
                        Update
                      </button>
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

export default Verification;
