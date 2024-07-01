import React, { Component } from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar2";
import Feed from "../components/feed";
import Footer from "../components/footer";

export default class Investordetails extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Investors Details</title>
          <meta name="description" content="Investors Details" />
        </Head>

        <Navbar />
        <Sidebar />

        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-12">
                  <h1 className="m-0">Investors Details</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                  <div class="card card-primary card-outline">
                    <div class="card-header">
                      <h5 class="mb-0">Profile</h5>
                    </div>
                    <div class="card-body">
                      <div class="row">
                        <div class="col-lg-3">
                          <img
                            src="/dist/img/avatar5.png"
                            alt="Testing111"
                            class="img-circle img-fluid"
                          />
                        </div>
                        <div class="col-lg-9">
                          <div className="row">
                            <div className="col-lg-6">
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
                            <div className="col-lg-6">
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
                                <span className="ml-2">
                                  Demo Street 123, Demo
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
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
      </>
    );
  }
}
