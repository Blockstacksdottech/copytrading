import Head from "next/head";
import Navbar from "../components/panel/navbar";
import Sidebar from "./components/sidebar";
import Feed from "./components/feed";
import Footer from "../components/panel/footer";
import Headtag from "../components/panel/headtag";
import Scripttag from "../components/panel/scripttag";

const Chat = () => {
  return (
    <>
      <Head>
        <title>Chat | Investor</title>
        <meta name="description" content="Chat" />
      </Head>

      <Headtag />
      <Navbar />
      <Sidebar />

      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <a
                  type="button"
                  className="btn btn-primary btn-sm"
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
                <div className="card card-primary card-outline direct-chat direct-chat-primary">
                  <div className="card-header">
                    <h3 className="card-title">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor.
                    </h3>
                  </div>
                  <div className="card-body">
                    <div className="direct-chat-messages">
                      <div className="direct-chat-msg">
                        <div className="direct-chat-infos clearfix">
                          <span className="direct-chat-name float-left">
                            Investor
                          </span>
                          <span className="direct-chat-timestamp float-right">
                            23 Jan 2:00 pm
                          </span>
                        </div>

                        <img
                          className="direct-chat-img"
                          src="../dist/img/user1-128x128.jpg"
                          alt="Message User Image"
                        />

                        <div className="direct-chat-text">
                          Lore Ipsum is a dummy Text
                        </div>
                      </div>

                      <div className="direct-chat-msg right">
                        <div className="direct-chat-infos clearfix">
                          <span className="direct-chat-name float-right">
                            Admin
                          </span>
                          <span className="direct-chat-timestamp float-left">
                            23 Jan 2:05 pm
                          </span>
                        </div>

                        <img
                          className="direct-chat-img"
                          src="../dist/img/user3-128x128.jpg"
                          alt="Message User Image"
                        />

                        <div className="direct-chat-text">
                          Lore Ipsum is a dummy Text
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <form action="#" method="post">
                      <div className="input-group">
                        <input
                          type="text"
                          name="message"
                          placeholder="Type Message ..."
                          className="form-control"
                        />
                        <span className="input-group-append">
                          <button type="submit" className="btn btn-primary">
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
      <Scripttag />
    </>
  );
};

export default Chat;
