import React, { Component, useContext, useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "../components/panel/navbar";
import Sidebar from "./components/sidebar";
import Feed from "./components/feed";
import Footer from "../components/panel/footer";
import Headtag from "../components/panel/headtag";
import Scripttag from "../components/panel/scripttag";
import { UserContext } from "@/contexts/UserContextData";
import { formatImage, postReq, req, uploadFiles } from "@/helpers";
import Checker from "../components/utils/Checker";
import { toast } from "react-toastify";

const Accountmanagement = () => {
  const {user,setUser} = useContext(UserContext)
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profileData, setProfileData] = useState({
    full_name: '',
    profile_picture: null,
  });


  useEffect(() => {
    fetchProfile()
  },[])


  const handleChange = (e) => {
    const { name, value } = e.target;
    let temp = {...profileData}
    temp[name] = value
    setProfileData(temp);
  };

  const handleFileChange = (e) => {
    let temp = {...profileData}
    temp["profile_picture"] = e.target.files[0]
    setProfileData(temp);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {profile_picture,...body} = profileData
    
    // Handle form submission here
    console.log(body);
    console.log(profile_picture)
    const targetFiles = profile_picture instanceof File ? [profile_picture] : [] 
    const resp = await uploadFiles(targetFiles,body,"profile_picture","profile")
    if (resp){
      toast.success("saved")
      fetchProfile();
    }
  };

  

  const handleChangePassword = async (e) => {
    e.preventDefault();

    const body = {
      old_password: currentPassword,
      new_password: newPassword,
      confirm_password: confirmPassword,
    };

    const response = await postReq("change-password", body);
    if (response){
      toast.success("Password updated")
    }
    
  };

  const fetchProfile = async () => {
    const resp = await req("profile")
    if (resp){
      setProfileData(resp)
      
    }
  }

  


  return (
    <>
      <Head>
        <title>Account Management</title>
        <meta name="description" content="Account Management" />
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
                <h1 className="m-0">Account Management</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="card shadow-none">
                  <div className="card-header">
                    <h5 className="mb-0">Profile</h5>
                  </div>
                  <div className="card-body">
                    <div className="form-group">
                      <div className="row">
                        <div className="col-lg-5">
                          <label>Profile Picture</label>
                          <img
                            src={profileData.profile_picture  && !(profileData.profile_picture instanceof File) ? formatImage(profileData.profile_picture) : "/dist/img/avatar5.png"}
                            className="img-circle elevation-1 img-fluid ml-5"
                            alt="Admin Image"
                            style={{width:150}}
                          />
                        </div>
                        <div className="col-lg-7">
                          <div className="form-group">
                            <label>Upload Profile Photo</label>
                            <input className="form-control" type="file" onChange={handleFileChange} />
                          </div>
                          <div className="form-group">
                            <label>Full Name</label>
                            <input
                              type="name"
                              className="form-control"
                              placeholder="Enter Full Name"
                              name="full_name"
                              value={profileData.full_name}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="form-group">
                            <label>Email address</label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Enter Email"
                              name="email"
                      disabled={true}
                      value={user.email}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group float-right mb-0">
                      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
      <div className="col-lg-12">
        <div className="card shadow-none">
          <div className="card-header">
            <h5 className="mb-0">Security</h5>
          </div>
          <div className="card-body">
            <form onSubmit={handleChangePassword}>
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Current Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Current Password"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>New Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="New Password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group float-right mb-0">
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
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

export default Accountmanagement;
