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
            <a href="#" className="d-block">
              {user.username}
              <br />
              <span className="badge bg-light">Admin</span>
            </a>
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
              <a href="/admin/support" className="nav-link">
                <i class="nav-icon far fa-comment-alt"></i>
                <p>Message</p>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
