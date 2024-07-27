import React, { Component } from "react";
import Head from "next/head";
import Navbar from "../components/panel/navbar";
import Sidebar from "./components/sidebar";
import Feed from "./components/feed";
import Footer from "../components/panel/footer";
import Headtag from "../components/panel/headtag";
import Scripttag from "../components/panel/scripttag";

const Accountmanagement = () => {
  return (
    <>
      <Head>
        <title>Account Management</title>
        <meta name="description" content="Account Management" />
      </Head>

      <Headtag />
      <Navbar />
      <Sidebar />

      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-12">
                <h1 className="m-0">Account Management</h1>
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
                    <h5 className="mb-0">Profile</h5>
                  </div>
                  <div className="card-body">
                    <div className="form-group">
                      <div className="row">
                        <div className="col-lg-5">
                          <label>Profile Picture</label>
                          <img
                            src="/dist/img/avatar4.png"
                            className="img-circle elevation-1 img-fluid ml-5"
                            alt="Admin Image"
                          />
                        </div>
                        <div className="col-lg-7">
                          <div className="form-group">
                            <label>Upload Profile Photo</label>
                            <input className="form-control" type="file" />
                          </div>
                          <div className="form-group">
                            <label>Full Name</label>
                            <input
                              type="name"
                              className="form-control"
                              placeholder="Enter Full Name"
                            />
                          </div>
                          <div className="form-group">
                            <label>Email address</label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Enter Email"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group float-right mb-0">
                      <button type="submit" className="btn btn-primary">
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="card shadow-none">
                  <div className="card-header">
                    <h5 className="mb-0">Security</h5>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Current Password</label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Current Password"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>New Password</label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="New Password"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Confirm Password</label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Confirm Password"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group float-right mb-0">
                      <button type="submit" className="btn btn-primary">
                        Save
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

export default Accountmanagement;
