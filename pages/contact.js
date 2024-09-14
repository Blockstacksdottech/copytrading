import React, { Component } from "react";
import Head from "next/head";
import Navbar from "./components/frontend/navbar";
import Headtag from "./components/frontend/headtag";
import Footer from "./components/frontend/footer";
import Scripttag from "./components/frontend/scripttag";
import { toast } from "react-toastify";
import { postReq } from "@/helpers";

export default function Contact(props)  {
  const submitMessage = async (e) => {
    e.preventDefault()
    toast.info("Sending...");
    const name = document.getElementById("name").value;
    const email = document.getElementById("mail").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    const body = {
      name,
      email,
      subject,
      message,
    };

    const resp = await postReq("contact", body);
    if (resp) {
      toast.success("Sent");
    } else {
      toast.error("Failed");
    }
  };


    return (
      <>
        <Head>
          <title>CopyTrading | Contact Us</title>
        </Head>
        <Headtag />
        <Navbar />

        <section className="section-lg contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-title">Contact</h2>
                <p className="mb-5">
                  Need help? Want to speak to a human being? Phone, chat, email,
                  or social – we’re here for you.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-7 mb-4 m-auto">
                <div className="contact-bg p-5 rounded shadow-primary">
                  <form action="#">
                    <input
                      type="text"
                      className="form-control mb-3"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                    />
                    <input
                      type="email"
                      className="form-control mb-3"
                      id="mail"
                      name="mail"
                      placeholder="Your Email"
                    />
                    <input
                      type="text"
                      className="form-control mb-3"
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                    />
                    <textarea
                      name="message"
                      id="message"
                      className="form-control mb-3"
                      placeholder="Your Message"
                    ></textarea>
                    <button
                      value="send"
                      className="btn btn-secondary"
                      onClick={submitMessage}
                    >
                      SEND MESSAGE
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-lg-5 m-auto">
                <div className="card p-4 border-blue mb-4 rounded shadow-primary">
                  <h5>
                    <i className="ti-headphone-alt round-icon blue mr-2"></i>{" "}
                    Sales
                  </h5>
                  <p className="mb-0">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia.
                  </p>
                </div>
                <div className="card p-4 border-blue mb-4 rounded shadow-primary">
                  <h5>
                    <i className="ti-headphone round-icon green mr-2"></i> Help
                    & Support
                  </h5>
                  <p className="mb-0">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia.
                  </p>
                </div>
                <div className="card p-4 border-blue mb-4 rounded shadow-primary">
                  <h5>
                    <i className="ti-bag round-icon orange mr-2"></i> Legal
                    Departments
                  </h5>
                  <p className="mb-0">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia.
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
      </>
    );
  
}
