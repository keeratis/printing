import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          {" "}
          <i className="fa fa-cog" aria-hidden="true" />
          อะไหล่
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                ตัด
              </Link>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link className="dropdown-item" to="#">
                  A1
                </Link>
                <Link className="dropdown-item" to="#">
                  A2
                </Link>
                <Link className="dropdown-item" to="#">
                  A2/1
                </Link>
                <Link className="dropdown-item" to="#">
                  A3
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                พิมพ์
              </Link>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link className="dropdown-item" to="#">
                  B7
                </Link>
                <Link className="dropdown-item" to="#">
                  B8
                </Link>
                <Link className="dropdown-item" to="#">
                  B9
                </Link>
                <Link className="dropdown-item" to="#">
                  B10
                </Link>
                <Link className="dropdown-item" to="#">
                  B11
                </Link>
                <Link className="dropdown-item" to="#">
                  B12
                </Link>
                <Link className="dropdown-item" to="#">
                  B13
                </Link>
                <Link className="dropdown-item" to="#">
                  B15
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                ปั๊ม
              </Link>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link className="dropdown-item" to="#">
                  C1
                </Link>
                <Link className="dropdown-item" to="#">
                  C2
                </Link>
                <Link className="dropdown-item" to="#">
                  C3
                </Link>
                <Link className="dropdown-item" to="#">
                  C4
                </Link>
                <Link className="dropdown-item" to="#">
                  C5
                </Link>
                <Link className="dropdown-item" to="#">
                  C6
                </Link>
                <Link className="dropdown-item" to="#">
                  C7
                </Link>
                <Link className="dropdown-item" to="#">
                  C8
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                ปะและคัด
              </Link>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link className="dropdown-item" to="#">
                  D1
                </Link>
                <Link className="dropdown-item" to="#">
                  D2
                </Link>
                <Link className="dropdown-item" to="#">
                  D3
                </Link>
                <Link className="dropdown-item" to="#">
                  D4
                </Link>
                <Link className="dropdown-item" to="#">
                  D5
                </Link>
                <Link className="dropdown-item" to="#">
                  D6
                </Link>
                <Link className="dropdown-item" to="#">
                  D7
                </Link>
                <Link className="dropdown-item" to="#">
                  D8
                </Link>
                <Link className="dropdown-item" to="#">
                  D9
                </Link>
                <Link className="dropdown-item" to="#">
                  D10
                </Link>
                <Link className="dropdown-item" to="#">
                  D11
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                แกะ
              </Link>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link className="dropdown-item" to="#">
                  I1
                </Link>
                <Link className="dropdown-item" to="#">
                  I2
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Rigid Box
              </Link>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link className="dropdown-item" to="#">
                  M1
                </Link>
                <Link className="dropdown-item" to="#">
                  N1
                </Link>
                <Link className="dropdown-item" to="#">
                  O1
                </Link>
                <Link className="dropdown-item" to="#">
                  Q1
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/bearing">
                ลูกปืน
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                อุปกรณ์ไฟฟ้า
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                อุปกรณ์ปะปา
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                อุปกรณ์ลม
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                เครื่องมือช่าง
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
