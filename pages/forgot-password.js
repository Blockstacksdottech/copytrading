import Head from "next/head";
import Navbar from "./components/frontend/navbar";
import Headtag from "./components/frontend/headtag";
import Footer from "./components/frontend/footer";
import Scripttag from "./components/frontend/scripttag";

export default function Forgotpassword() {
  return (
    <>
      <Head>
        <title>Forgot Password | Copy Trading</title>
        <meta name="description" content="Copy Trading" />
      </Head>

      <Headtag />
      <Navbar />

      <section className="section-lg login">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-title">Recover Password</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7 mb-4 m-auto">
              <div className="contact-bg p-5 rounded shadow-primary text-center">
                <p>
                  Forgot your password? Here you can easily retrieve password.
                </p>
                <form>
                  <input
                    type="email"
                    className="form-control mb-3"
                    placeholder="Email"
                  />
                  <button type="submit" className="btn btn-secondary btn-lg">
                    Request New Password
                  </button>
                </form>
                <p className="mb-0 mt-3">
                  <a href="/login" className="text-center">
                    Login
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <img
          className="contact-bg-1 up-down-animation"
          src="../frontend/images/background-shape/feature-bg-2.png"
          alt="background-shape"
        />
        <img
          className="contact-bg-2 left-right-animation"
          src="../frontend/images/background-shape/green-half-cycle.png"
          alt="background-shape"
        />
        <img
          className="contact-bg-3 up-down-animation"
          src="../frontend/images/background-shape/green-dot.png"
          alt="background-shape"
        />
        <img
          className="contact-bg-4 left-right-animation"
          src="../frontend/images/background-shape/service-half-cycle.png"
          alt="background-shape"
        />
        <img
          className="contact-bg-5 up-down-animation"
          src="../frontend/images/background-shape/feature-bg-2.png"
          alt="background-shape"
        />
      </section>
      <Footer />
      <Scripttag />

      {/* <Admheadtag />

      <div className="login-page">
        <div className="login-box">
          <div className="login-logo">
            <a href="/">
              <img
                src="/logo.png"
                alt="CopyTrading"
                className="h-75 img-fluid img-circle elevation-1"
              />{" "}
              CopyTrading
            </a>
          </div>

          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">
                You forgot your password? Here you can easily retrieve a new
                password.
              </p>

              <form action="/cot-data" method="post">
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope"></span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary btn-block">
                      Request New Password
                    </button>
                  </div>
                </div>
              </form>
              <p className="mb-0 mt-3">
                <a href="/login" className="text-center">
                  Login
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Admscripttag /> */}
    </>
  );
}
