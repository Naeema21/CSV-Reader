import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import {
  Navbar,
  NavbarToggler,
  Collapse,
} from "reactstrap";

const Topbar = ({ toggleSidebar }) => {
  const [topbarIsOpen, setTopbarOpen] = useState(true);
  const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);

  return (
    <Navbar
      color="light"
      light
      className="navbar shadow-sm p-3 mb-5 bg-white rounded"
      expand="md"
    >
      <button className="topbarbutton" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faAlignLeft} />
      </button>
      <NavbarToggler onClick={toggleTopbar} />
      <Collapse isOpen={topbarIsOpen} navbar>
        {/* <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to={"/page-1"}>
              page 1
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={"/page-2"}>
              page 2
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={"/page-3"}>
              page 3
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={"/page-4"}>
              page 4
            </NavLink>
          </NavItem>
        </Nav> */}
      </Collapse>
    </Navbar>
  );
};

export default Topbar;
