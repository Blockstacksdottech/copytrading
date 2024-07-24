import { useEffect, useState } from "react";
import { isLogged, logout } from "@/helpers";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const nav = useRouter();
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-dark bg-theme">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#">
            <i className="fas fa-bars"></i>
          </a>
        </li>
      </ul>

      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a
            href="#"
            className="nav-link btn btn-danger btn-sm text-light rounded"
            onClick={() => logout(nav)}
          >
            <i className="fas fa-power-off"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
}
