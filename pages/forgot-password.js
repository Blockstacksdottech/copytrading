import Head from "next/head";

export default function Forgotpassword() {
  return (
    <>
      <Head>
        <title>Forgot Password | Copy Trading</title>
        <meta name="description" content="Copy Trading" />
      </Head>

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
    </>
  );
}
