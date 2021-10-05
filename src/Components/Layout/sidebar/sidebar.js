import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faPaperPlane,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router'



// import SubMenu from "./SubMenu";

const SideBar = ({ isOpen, toggle }) => {
    let history = useHistory();
    
    const logoutAccount = ()=>{
        localStorage.clear();
        history.push("/");
    }
    return(
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
      <h3>CSV</h3>
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
        <NavItem>
          <NavLink tag={Link} to={"/local-csv"} >
            <FontAwesomeIcon icon={faBriefcase} className="mx-2" />
            Local CSV
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/api-csv"} >
            <FontAwesomeIcon icon={faImage} className="mx-2" />
            API CSV
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink tag={Link} to={"/"}  onClick={()=>logoutAccount()}>
            <FontAwesomeIcon icon={faPaperPlane} className="mx-2" />
            Logout
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </div>
    )
};

export default SideBar;
