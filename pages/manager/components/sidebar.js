import { useRouter } from "next/navigation";
import { isLogged, logout } from "@/helpers";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/contexts/UserContextData";

export default function Sidebar() {
  const {user,setUser} = useContext(UserContext)

  return (
    <aside className="main-sidebar main-sidebar-custom sidebar-light-primary elevation-1">
      <a className="brand-link bg-theme">
        <img
          src="/logo.png"
          alt="CopyTrading"
          className="brand-image img-circle elevation-1"
        />
        <span className="brand-text font-weight-light text-white">
          CopyTrading
        </span>
      </a>

      <div className="sidebar">
        <div className="user-panel mt-3 pb-2 d-flex">
          <div className="image">
            <img
              src="/dist/img/avatar5.png"
              className="img-circle elevation-1"
              alt="User Image"
            />
          </div>
          <div className="info">
            <p href="#" className="d-block mb-1">
              {user.username}
            </p>
            <span className="badge bg-theme investor-badge text-white ">
              Manager
            </span>
          </div>
        </div>
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {/* <li className="nav-item">
              <a href="/manager/dashboard" className="nav-link">
                <i className="nav-icon fas fa-tachometer-alt"></i>
                <p>Dashboard</p>
              </a>
            </li> */}
            <li className="nav-item">
              <a href="/investor/dashboard" className="nav-link">
                <i className="nav-icon fas fa-tachometer-alt"></i>
                <p>Investor Dashboard</p>
              </a>
            </li>
            {/* <li className="nav-item">
              <a href="/investor/watchlist" className="nav-link">
                <i className="nav-icon fas fa-binoculars"></i>
                <p>My Watch List</p>
              </a>
            </li> */}
            <li className="nav-item">
              <a href="/manager/createstrategy" className="nav-link">
                <i className="nav-icon fas fa-plus-circle"></i>
                <p>Create Strategy</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="/manager/mystrategy" className="nav-link">
                <i className="nav-icon fas fa-chart-line"></i>
                <p>My Strategy</p>
              </a>
            </li>
            {/* <li className="nav-item">
              <a href="/manager/brokertransmit" className="nav-link">
                <i className="nav-icon fas fa-handshake"></i>
                <p>BrokerTransmit</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="/manager/platformtransmit" className="nav-link">
                <i className="nav-icon fas fa-tv"></i>
                <p>PlatformTransmit</p>
              </a>
            </li> */}
            {/* <li className="nav-item">
              <a href="/manager/accountmanagement" className="nav-link">
                <i className="nav-icon fas fa-id-card"></i>
                <p>Account Management</p>
              </a>
            </li> */}
            <li className="nav-item">
              <a href="/manager/faq" className="nav-link">
                <i className="nav-icon far fa-question-circle"></i>
                <p>FAQ</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="/investor/support" className="nav-link">
                <i className="nav-icon far fa-comment-alt"></i>
                <p>Support</p>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
