import Head from "next/head";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Feed from "../components/feed";
import Footer from "../components/footer";

export default function Detailslist() {
  return (
    <>
      <Head>
        <title>Leaderboard</title>
        <meta name="description" content="Leaderboard" />
      </Head>

      <Navbar />
      <Sidebar />

      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-12">
                <div className="alert alert-light alert-dismissible fade show">
                  These are hypothetical performance results that have certain
                  inherent limitations.
                </div>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-sm-12">
                <h1 className="m-0">Easiest</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12"></div>
            </div>
          </div>
        </div>
      </div>
      <Feed />
      <Footer />
    </>
  );
}
