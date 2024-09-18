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
              src="/dist/img/avatar4.png"
              className="img-circle elevation-1"
              alt="Admin Photo"
            />
          </div>
          <div className="info">
            <p href="#" className="d-block mb-1">
              {user.username}
            </p>
            <span className="badge bg-light investor-badge">Admin</span>
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
              <a href="/admin/investors" className="nav-link">
                <i className="nav-icon fas fa-user"></i>
                <p>Investors</p>
              </a>
            </li>
            {/* <li className="nav-item">
              <a href="/admin/managers" className="nav-link">
                <i className="nav-icon fas fa-user-tie"></i>
                <p>Managers</p>
              </a>
            </li> */}
            <li className="nav-item">
              <a href="/admin/brokers" className="nav-link">
                <i className="nav-icon fas fa-user-secret"></i>
                <p>Brokers</p>
              </a>
            </li>
            {/* <li className="nav-item">
              <a href="/admin/platforms" className="nav-link">
                <i className="nav-icon fas fa-briefcase"></i>
                <p>Platforms</p>
              </a>
            </li> */}
            <li className="nav-item">
              <a href="/admin/strategy" className="nav-link">
                <i className="nav-icon far fa-chart-bar"></i>
                <p>Strategy</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="/admin/createstrategy" className="nav-link">
                <i className="nav-icon fas fa-plus-circle"></i>
                <p>Create Strategy</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="/admin/mystrategy" className="nav-link">
                <i className="nav-icon fas fa-chart-line"></i>
                <p>Manage Strategies</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="/admin/accountmanagement" className="nav-link">
                <i className="nav-icon fas fa-id-card"></i>
                <p>Account Management</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="/admin/faq" className="nav-link">
                <i className="nav-icon far fa-question-circle"></i>
                <p>FAQ</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="/admin/message" className="nav-link">
                <i className="nav-icon far fa-comment-alt"></i>
                <p>Message</p>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
