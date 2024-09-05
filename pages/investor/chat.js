import Head from "next/head";
import Navbar from "../components/panel/navbar";
import Sidebar from "./components/sidebar";
import Feed from "./components/feed";
import Footer from "../components/panel/footer";
import Headtag from "../components/panel/headtag";
import Scripttag from "../components/panel/scripttag";
import { useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { formatDate, formatImage, postReq, req } from "@/helpers";
import { UserContext } from "@/contexts/UserContextData";
import { toast } from "react-toastify";
import Checker from "../components/utils/Checker";

const Chat = () => {

  const {user,setUser} = useContext(UserContext)
  const [ticket,setTicket] = useState(null)
  const [loading,setLoading] = useState(true)
  const searchParams = useSearchParams()
  const id = searchParams.get("id")
  const [message,setMessage] = useState("")

  const fetchTicket = async (id) => {
    const resp = await req(`tickets/${id}`)
    if (resp){
      setTicket(resp)
      setLoading(false)
    }
  }
  const sendMessage = async (e,id) => {
    e.preventDefault()
    console.log(user)
    const uid = user.id
    const body = {
      sender : uid,
      message 
    }
    const resp = await postReq(`messages/?ticket=${id}`,body)
    if (resp){
      toast.success("Sent")
      fetchTicket(id)
    }
  }

  

  useEffect(() => {
    if (id){
      fetchTicket(id);
    }
  },[id])


  return (
    <>
      <Head>
        <title>Chat | Investor</title>
        <meta name="description" content="Chat" />
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
                <a
                  type="button"
                  className="btn btn-secondary btn-sm"
                  href="/investor/support"
                >
                  Back to Support
                </a>
              </div>
            </div>
          </div>
        </div>
        {
          !loading && <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="card shadow-none direct-chat direct-chat-primary">
                  <div className="card-header">
                    <h3 className="card-title">
                      {ticket.description}
                    </h3>
                  </div>
                  <div className="card-body">
                    <div className="direct-chat-messages">
                      {
                        ticket.messages.map((e,i) => {
                          if (e.sender.id === user.id){
                            return <div className="direct-chat-msg right">
                            <div className="direct-chat-infos clearfix">
                              <span className="direct-chat-name float-right">
                                {user.username}
                              </span>
                              <span className="direct-chat-timestamp float-left">
                                {formatDate(new Date(e.date_sent))}
                              </span>
                            </div>
    
                            <img
                              className="direct-chat-img"
                              src={e.sender.profile && e.sender.profile.profile_picture ? formatImage(e.sender.profile.profile_picture) : "../dist/img/user1-128x128.jpg"}
                              alt="Message User Image"
                            />
    
                            <div className="direct-chat-text">
                              {e.message}
                            </div>
                          </div>
                          }else{
                            return <div className="direct-chat-msg">
                            <div className="direct-chat-infos clearfix">
                              <span className="direct-chat-name float-right">
                                {user.username}
                              </span>
                              <span className="direct-chat-timestamp float-left">
                                {formatDate(new Date(e.date_sent))}
                              </span>
                            </div>
    
                            <img
                              className="direct-chat-img"
                              src={e.sender.profile && e.sender.profile.profile_picture ? formatImage(e.sender.profile.profile_picture) : "../dist/img/user1-128x128.jpg"}
                              alt="Message User Image"
                            />
    
                            <div className="direct-chat-text">
                              {e.message}
                            </div>
                          </div>
                          }
                        })
                      }
                      {/* <div className="direct-chat-msg">
                        <div className="direct-chat-infos clearfix">
                          <span className="direct-chat-name float-left">
                            Investor
                          </span>
                          <span className="direct-chat-timestamp float-right">
                            23 Jan 2:00 pm
                          </span>
                        </div>

                        <img
                          className="direct-chat-img"
                          src="../dist/img/user1-128x128.jpg"
                          alt="Message User Image"
                        />

                        <div className="direct-chat-text">
                          Lore Ipsum is a dummy Text
                        </div>
                      </div> */}

                      
                    </div>
                  </div>
                  <div className="card-footer">
                      <div className="input-group">
                        <input
                          type="text"
                          name="message"
                          placeholder="Type Message ..."
                          className="form-control form-control-lg"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        />
                        <span className="input-group-append">
                          <button  className="btn btn-primary" onClick={(t) => sendMessage(t,ticket.id)}>
                            Send
                          </button>
                        </span>
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

export default Chat;
