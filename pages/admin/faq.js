import Head from "next/head";
import Navbar from "../components/panel/navbar";
import Sidebar from "./components/sidebar";
import Feed from "./components/feed";
import Footer from "../components/panel/footer";
import Headtag from "../components/panel/headtag";
import Scripttag from "../components/panel/scripttag";
import React, { Component } from "react";

export default class FAQ extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Add FAQ</title>
          <meta name="description" content="FAQ" />
        </Head>

        <Headtag />
        <Navbar />
        <Sidebar />

        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-12">
                  <h1 className="m-0">Frequently Asked Questions</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="row">
              <div className="col-lg-12">
                <div className="card card-primary card-outline">
                  <div className="card-header">
                    <h5>Add FAQ</h5>
                  </div>
                  <div className="card-body">
                    <div className="form-group">
                      <label>Question</label>
                      <input className="form-control" type="" text />
                    </div>
                    <div className="form-group">
                      <label>Answer</label>
                      <textarea
                        className="form-control"
                        cols={4}
                        rows={4}
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn-primary float-right"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12" id="accordion">
                <div className="card card-default">
                  <a
                    className="d-block w-100"
                    data-toggle="collapse"
                    href="#collapseOne"
                    aria-expanded="true"
                  >
                    <div className="card-header">
                      <h4 className="card-title w-100 text-dark">
                        1. Lorem ipsum dolor sit amet
                      </h4>
                    </div>
                  </a>
                  <div
                    id="collapseOne"
                    className="collapse show"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor.
                    </div>
                  </div>
                </div>
                <div className="card card-default">
                  <a
                    className="d-block w-100"
                    data-toggle="collapse"
                    href="#collapseTwo"
                  >
                    <div className="card-header">
                      <h4 className="card-title w-100 text-dark">
                        2. Aenean massa
                      </h4>
                    </div>
                  </a>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Aenean massa. Cum sociis natoque penatibus et magnis dis
                      parturient montes, nascetur ridiculus mus.
                    </div>
                  </div>
                </div>
                <div className="card card-default">
                  <a
                    className="d-block w-100"
                    data-toggle="collapse"
                    href="#collapseThree"
                  >
                    <div className="card-header">
                      <h4 className="card-title w-100 text-dark">
                        3. Donec quam felis
                      </h4>
                    </div>
                  </a>
                  <div
                    id="collapseThree"
                    className="collapse"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Donec quam felis, ultricies nec, pellentesque eu, pretium
                      quis, sem. Nulla consequat massa quis enim.
                    </div>
                  </div>
                </div>
                <div className="card card-default">
                  <a
                    className="d-block w-100"
                    data-toggle="collapse"
                    href="#collapseFour"
                  >
                    <div className="card-header">
                      <h4 className="card-title w-100 text-dark">
                        4. Donec pede justo
                      </h4>
                    </div>
                  </a>
                  <div
                    id="collapseFour"
                    className="collapse"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Donec pede justo, fringilla vel, aliquet nec, vulputate
                      eget, arcu.
                    </div>
                  </div>
                </div>
                <div className="card card-default">
                  <a
                    className="d-block w-100"
                    data-toggle="collapse"
                    href="#collapseFive"
                  >
                    <div className="card-header">
                      <h4 className="card-title w-100 text-dark">
                        5. In enim justo
                      </h4>
                    </div>
                  </a>
                  <div
                    id="collapseFive"
                    className="collapse"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                      justo. Nullam dictum felis eu pede mollis pretium.
                    </div>
                  </div>
                </div>
                <div className="card card-default">
                  <a
                    className="d-block w-100"
                    data-toggle="collapse"
                    href="#collapseSix"
                  >
                    <div className="card-header">
                      <h4 className="card-title w-100 text-dark">
                        6. Integer tincidunt
                      </h4>
                    </div>
                  </a>
                  <div
                    id="collapseSix"
                    className="collapse"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Integer tincidunt. Cras dapibus. Vivamus elementum semper
                      nisi. Aenean vulputate eleifend tellus.
                    </div>
                  </div>
                </div>
                <div className="card card-default">
                  <a
                    className="d-block w-100"
                    data-toggle="collapse"
                    href="#collapseSeven"
                  >
                    <div className="card-header">
                      <h4 className="card-title w-100 text-dark">
                        7. Aenean leo ligula
                      </h4>
                    </div>
                  </a>
                  <div
                    id="collapseSeven"
                    className="collapse"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Aenean leo ligula, porttitor eu, consequat vitae, eleifend
                      ac, enim.
                    </div>
                  </div>
                </div>
                <div className="card card-default">
                  <a
                    className="d-block w-100"
                    data-toggle="collapse"
                    href="#collapseEight"
                  >
                    <div className="card-header">
                      <h4 className="card-title w-100 text-dark">
                        8. Aliquam lorem ante
                      </h4>
                    </div>
                  </a>
                  <div
                    id="collapseEight"
                    className="collapse"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                      tellus. Phasellus viverra nulla ut metus varius laoreet.
                    </div>
                  </div>
                </div>
                <div className="card card-default">
                  <a
                    className="d-block w-100"
                    data-toggle="collapse"
                    href="#collapseNine"
                  >
                    <div className="card-header">
                      <h4 className="card-title w-100 text-dark">
                        9. Quisque rutrum
                      </h4>
                    </div>
                  </a>
                  <div
                    id="collapseNine"
                    className="collapse"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
                      augue. Curabitur ullamcorper ultricies nisi.
                    </div>
                  </div>
                </div>
                <div className="card card-default">
                  <a
                    className="d-block w-100"
                    data-toggle="collapse"
                    href="#collapseTen"
                  >
                    <div className="card-header">
                      <h4 className="card-title w-100 text-dark">
                        10. Quisque rutrum
                      </h4>
                    </div>
                  </a>
                  <div
                    id="collapseTen"
                    className="collapse"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
                      augue. Curabitur ullamcorper ultricies nisi.
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
  }
}
