import Head from "next/head";
import Navbar from "../components/panel/navbar";
import Sidebar from "./components/sidebar";
import Feed from "./components/feed";
import Footer from "../components/panel/footer";
import Headtag from "../components/panel/headtag";
import Scripttag from "../components/panel/scripttag";
import Checker from "../components/utils/Checker";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/contexts/UserContextData";
import { postReq } from "@/helpers";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const Submitrequest = () => {

  const {user,setUser} = useContext(UserContext)
  const [body,setBody] = useState({
    subject : "",
    description : ""
  })

  const nav = useRouter()

  const handleChange = (e) => {
    let temp = {...body}
    temp[e.target.name] = e.target.value;
    setBody(temp)
  }

  const submitTicket = async () => {
    const resp = await postReq("tickets/",body)
    if (resp){
      toast.success("created")
      nav.push("/investor/support")
    }
  }



  return (
    <>
      <Head>
        <title>Submit Request</title>
        <meta name="description" content="Submit Request" />
      </Head>

      <Checker>
      <Headtag />
      <Navbar />
      <Sidebar />

      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <h1 className="m-0 text-center">Submit a Request</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div className="card shadow-none">
                  <div className="card-body">
                    <div className="form-group">
                      <label>Your Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        value={user.username}
                        disabled
                      />
                    </div>
                    <div className="form-group">
                      <label>Your Email Address</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        value={user.email}
                        disabled
                      />
                    </div>
                    <div className="form-group">
                      <label>Subject</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                        name="subject"
                        value={body.subject}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Description</label>
                      <textarea
                        className="form-control"
                        cols={7}
                        rows={7}
                        placeholder="Please enter the details of your request. A member of our support staff will respond as soon as possible."
                        name="description"
                        value={body.description}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <div className="form-group float-right mb-0">
                      <button type="submit" className="btn btn-primary" onClick={submitTicket}>
                        Submit
                      </button>
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
      <Scripttag />
      </Checker>

      
    </>
  );
};

export default Submitrequest;
