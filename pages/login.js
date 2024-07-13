import Head from "next/head";
import Navbar from "./components/frontend/navbar";
import Headtag from "./components/frontend/headtag";
import Footer from "./components/frontend/footer";
import Scripttag from "./components/frontend/scripttag";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { get_token, isLogged } from "@/helpers";
import { toast } from "react-toastify";

export default function Login() {
  const [user, setUser] = useState({
    logged: false,
    username: "",
    email: "",
    isAdmin: false,
  });
  const [loading, setLoading] = useState(true);
  const nav = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    async function test() {
      let resp = await isLogged();
      console.log(resp);
      let obj = { ...user };
      if (resp) {
        obj.logged = true;
        obj.username = resp.username;
        obj.email = resp.email;
        obj.isAdmin = resp.is_superuser;
        setUser(obj);
        //await updateSuppliers();
        return obj;
      } else {
        return obj;
      }
    }

    test().then((obj) => {
      if (obj.logged) {
        if (!obj.isAdmin) {
          nav.push("/investor/dashboard");
        } else {
          nav.push("/admin/investors");
        }
      } else {
        setLoading(false);
      }
    });
  }, []);

  async function login(email, password) {
    const res = await get_token(email, password);
    if (res) {
      toast.success("logged in");
      nav.push("/investor/dashboard");
    } else {
      toast.error("Failed");
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login" />
      </Head>

      <Headtag />
      <Navbar />

      <section className="section-lg login">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-title">Login</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7 mb-4 m-auto">
              <div className="contact-bg p-5 rounded shadow-primary">
                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    className="form-control mb-3"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    className="form-control mb-3"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="row">
                    <div className="col-8 my-auto">
                      <a href="/forgot-password">I forgot my password</a>
                    </div>
                    <div className="col-4">
                      <button
                        type="submit"
                        className="btn btn-secondary btn-block"
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </form>
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

      {/* <div className="login-page">
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

              <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock"></span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <a href="/forgot-password">I forgot my password</a>
                  </div>
                  <div className="col-4">
                    <button type="submit" className="btn btn-primary btn-block">
                      Login
                    </button>
                  </div>
                </div>
              </form>
              <p className="mb-0 mt-3 text-center">
                Need an Account? <a href="/register">Register yourself</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Admscripttag /> */}
    </>
  );
}
