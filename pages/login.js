import Head from "next/head";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login" />
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
              <p className="login-box-msg">Login</p>

              <form action="/investor/dashboard" method="post">
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
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock"></span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <a href="/forgot-password" className="small">
                      I forgot my password
                    </a>
                  </div>
                  <div className="col-4">
                    <button type="submit" className="btn btn-primary btn-block">
                      Login
                    </button>
                  </div>
                </div>
              </form>

              <div className="social-auth-links text-center small mt-3">
                <p className="mb-0">
                  - Or login instantly using your social account -
                </p>
                <a href="#" className="btn btn-block btn-outline-facebook">
                  <i className="fab fa-facebook mr-2"></i> Login with Facebook
                </a>
                <a href="#" className="btn btn-block btn-outline-google">
                  <i className="fab fa-google mr-2"></i> Login with Google
                </a>
              </div>
              <p className="mb-0">
                Need an Account?{" "}
                <a href="/register" className="text-center">
                  Register yourself
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
