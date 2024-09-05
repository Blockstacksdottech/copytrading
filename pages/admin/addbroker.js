import Head from "next/head";
import Navbar from "../components/panel/navbar";
import Sidebar from "./components/sidebar";
import Feed from "./components/feed";
import Footer from "../components/panel/footer";
import Headtag from "../components/panel/headtag";
import Scripttag from "../components/panel/scripttag";
import Checker from "../components/utils/Checker";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { uploadFiles } from "../../helpers";
import { useRouter } from "next/navigation";

const AddBroker = () => {

  const [image,setImage] = useState(null);
  const [data,setData] = useState({
    name : "",
    email : ""
  })

  const nav = useRouter()

  const handleChange = (e) => {
    let temp = {...data}
    temp[e.target.name] = e.target.value;
    setData(temp)
  }
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  }

  const addBroker = async () => {
    if (!image){
      toast.error("Chose an image")
    }else{
      const resp = await uploadFiles([image],data,"image","brokers/")
      if (resp){
        toast.success("created");
        nav.push("/admin/brokers")
      }else{
        toast.error("Failed")
      }
    }
  }


  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/dist/js/datatable.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Head>
        <title>Add Broker</title>
        <meta name="description" content="Add Broker" />
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
                <h1 className="m-0 text-center">Add Broker</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="card card-primary">
                  <div className="card-body">
                    <form>
                      <div className="form-group">
                        <label>Image of Broker</label>
                        <input className="form-control" type="file" onChange={handleImageChange} />
                      </div>
                      <div className="form-group">
                        <label>Name of Broker</label>
                        <input className="form-control" type="text" name="name" value={data.name} onChange={handleChange} />
                      </div>
                      
                      <div className="form-group">
                        <label>Email of Broker</label>
                        <input className="form-control" type="email" name="email" value={data.email} onChange={handleChange} />
                      </div>
                      <div className="form-group">
                        <div className="float-right">
                          <a className="btn btn-primary" onClick={addBroker}>Add Broker</a>
                        </div>
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
      </Checker>
      
    </>
  );
};

export default AddBroker;
