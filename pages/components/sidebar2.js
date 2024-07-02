import { useRouter } from "next/navigation";
import { isLogged, logout } from "@/helpers";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const nav = useRouter();

  const [user, setUser] = useState({
    logged: false,
    username: "",
    email: "",
  });

  useEffect(() => {
    async function test() {
      let resp = await isLogged();
      console.log(resp);
      let obj = { ...user };
      if (resp) {
        obj.logged = true;
        obj.username = resp.username;
        obj.email = resp.email;
        setUser(obj);
        return obj;
      } else {
        return obj;
      }
    }

    test().then((obj) => {
      if (obj.logged) {
      } else {
        nav.push("/login");
      }
    });
  }, []);

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
              alt="User Image"
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
                <i className="nav-icon fas fa-tachometer-alt"></i>
                <p>Investors</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="/admin/strategy" className="nav-link">
                <i className="nav-icon far fa-chart-bar"></i>
                <p>Strategy</p>
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
