import Head from "next/head";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Feed from "../components/feed";
import Footer from "../components/footer";
import React, { Component } from "react";

export default class Chat extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Chat</title>
          <meta name="description" content="Chat" />
        </Head>

        <Navbar />
        <Sidebar />

        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-12">
                  <a
                    type="button"
                    class="btn btn-primary btn-sm"
                    href="/investor/support"
                  >
                    Back to Support
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <div class="card card-primary card-outline direct-chat direct-chat-primary">
                    <div class="card-header">
                      <h3 class="card-title">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor.
                      </h3>
                    </div>
                    <div class="card-body">
                      <div class="direct-chat-messages">
                        <div class="direct-chat-msg">
                          <div class="direct-chat-infos clearfix">
                            <span class="direct-chat-name float-left">
                              Investor
                            </span>
                            <span class="direct-chat-timestamp float-right">
                              23 Jan 2:00 pm
                            </span>
                          </div>

                          <img
                            class="direct-chat-img"
                            src="../dist/img/user1-128x128.jpg"
                            alt="Message User Image"
                          />

                          <div class="direct-chat-text">
                            Lore Ipsum is a dummy Text
                          </div>
                        </div>

                        <div class="direct-chat-msg right">
                          <div class="direct-chat-infos clearfix">
                            <span class="direct-chat-name float-right">
                              Admin
                            </span>
                            <span class="direct-chat-timestamp float-left">
                              23 Jan 2:05 pm
                            </span>
                          </div>

                          <img
                            class="direct-chat-img"
                            src="../dist/img/user3-128x128.jpg"
                            alt="Message User Image"
                          />

                          <div class="direct-chat-text">
                            Lore Ipsum is a dummy Text
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-footer">
                      <form action="#" method="post">
                        <div class="input-group">
                          <input
                            type="text"
                            name="message"
                            placeholder="Type Message ..."
                            class="form-control"
                          />
                          <span class="input-group-append">
                            <button type="submit" class="btn btn-primary">
                              Send
                            </button>
                          </span>
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
      </>
    );
  }
}
