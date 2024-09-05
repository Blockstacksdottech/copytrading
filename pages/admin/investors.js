import Head from "next/head";
import Navbar from "../components/panel/navbar";
import Sidebar from "./components/sidebar";
import Feed from "./components/feed";
import Footer from "../components/panel/footer";
import Headtag from "../components/panel/headtag";
import Scripttag from "../components/panel/scripttag";
import React, { useEffect,useState } from "react";
import { formatImage, patchReq, req } from "@/helpers";
import { toast } from "react-toastify";
import Checker from "../components/utils/Checker";

const Investors = () => {
  const [investors,setInvestors] = useState([])
 
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/dist/js/datatable.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const fetchInvestors  = async () => {
    const resp= await req("adminvestors")
    if (resp){
      setInvestors(resp)
    }
  }

  const verifyUser = async (e)  => {
    const body = {
      isInvestor : !e.isInvestor
    }
    const resp = await patchReq(`adminvestors/${e.id}/`,body)
    if (resp){
      toast.success("updated")
      fetchInvestors()
    }
  }

  useEffect(() => {
    fetchInvestors();
  },[])

  return (
    <>
      <Head>
        <title>Investors</title>
        <meta name="description" content="Investors" />
      </Head>

      <Checker only_admin={true}>
      <Headtag />
      <Navbar />
      <Sidebar />

      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-12">
                <h1 className="m-0">Investors</h1>
              </div>
            </div>
          </div>
        </div>
        {
          investors.length > 0 && <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="card shadow-none">
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-bordered table-sm datatable projects">
                        <thead>
                          <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Manager</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            investors.length > 0 && investors.map((e,i) => {
                              return <tr key={e.username}>
                              <td>
                                <img
                                  src={e.profile && e.profile.profile_picture ? formatImage(e.profile.profile_picture) : "/dist/img/avatar5.png"}
                                  className="table-avatar"
                                  alt="Investor Image"
                                />
                              </td>
                              <td>{e.username}</td>
                              <td>{e.email}</td>
                              <td>
                                {
                                  e.isInvestor && <span className="badge bg-success">Active</span>
                                }
                                {
                                  !e.isInvestor && <span className="badge bg-danger"> Not active</span>
                                }
                                
                              </td>
                              <td>
                                <div className="btn-group">
                                  <a
                                    type="button"
                                    className="text-dark dropdown-toggle"
                                    data-toggle="dropdown"
                                  >
                                    <i className="fas fa-ellipsis-v"></i>
                                  </a>
                                  <ul className="dropdown-menu">
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href={`./investordetails?id=${e.id}`}
                                      >
                                        <i className="fas fa-info-circle mr-1"></i>{" "}
                                        Details
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="#"
                                        onClick={() => verifyUser(e)}
                                      >
                                        <i className="fas fa-user-check mr-1"></i>
                                        Verify
                                      </a>
                                    </li>
                                    
                                    <li>
                                      <a
                                        className="dropdown-item text-danger"
                                        href="#"
                                      >
                                        <i className="fas fa-trash-alt mr-1"></i>
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            })
                          }
                          
                          
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        }
        
      </div>

      <Feed />
      <Footer />
      <Scripttag />
      </Checker>

      
    </>
  );
};

export default Investors;
