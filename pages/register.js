import Head from "next/head";

export default function Register() {
  return (
    <>
      <Head>
        <title>Register</title>
        <meta name="description" content="Register" />
      </Head>

      <div className="register-page">
        <div className="register-box">
          <div className="register-logo">
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
            <div className="card-body register-card-body">
              <p className="register-box-msg">Register</p>

              <form action="/investor/dashboard" method="post">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full name"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-user"></span>
                    </div>
                  </div>
                </div>
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
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Retype password"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock"></span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <div className="icheck-primary">
                      <input
                        type="checkbox"
                        id="agreeTerms"
                        name="terms"
                        value="agree"
                      />{" "}
                      <label>
                        I agree to the <a href="#">terms</a>
                      </label>
                    </div>
                  </div>
                  <div className="col-4">
                    <button type="submit" className="btn btn-primary btn-block">
                      Register
                    </button>
                  </div>
                </div>
              </form>

              <div className="social-auth-links text-center small mt-3">
                <p className="mb-0">
                  - Or Register instantly using your social account -
                </p>
                <a href="#" className="btn btn-block btn-outline-facebook">
                  <i className="fab fa-facebook mr-2"></i> Register with
                  Facebook
                </a>
                <a href="#" className="btn btn-block btn-outline-google">
                  <i className="fab fa-google mr-2"></i> Register with Google
                </a>
              </div>
              <p className="mb-0">
                Alraedy have an account?{" "}
                <a href="/login" className="text-center">
                  Login here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
