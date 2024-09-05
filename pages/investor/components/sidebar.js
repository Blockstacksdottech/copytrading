import { useContext} from "react";
import {UserContext} from "../../../contexts/UserContextData"

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
              Investor
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
            <li className="nav-item">
              <a href="/investor/dashboard" className="nav-link">
                <i className="nav-icon fas fa-tachometer-alt"></i>
                <p>Dashboard</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="/investor/watchlist" className="nav-link">
                <i className="nav-icon fas fa-binoculars"></i>
                <p>My Watch List</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="/investor/strategy" className="nav-link">
                <i className="nav-icon far fa-chart-bar"></i>
                <p>Find Strategy</p>
              </a>
            </li>

            <li className="nav-item">
              <a href="/investor/subscribedstrategy" className="nav-link">
                <i className="nav-icon far fa-hand-point-up"></i>
                <p>Subscribed Strategy</p>
              </a>
            </li>
             <li className="nav-item">
              <a href="/investor/accountmanagement" className="nav-link">
                <i className="nav-icon fas fa-id-card"></i>
                <p>Account Management</p>
              </a>
            </li>
            
            {
              user.isInvestor &&
            <li className="nav-item">
              <a href="/manager/mystrategy" className="nav-link">
                <i className="nav-icon fas fa-tachometer-alt"></i>
                <p>Manager Dashboard</p>
              </a>
            </li>}
            <li className="nav-item">
              <a href="/investor/faq" className="nav-link">
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
