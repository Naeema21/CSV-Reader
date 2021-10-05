import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Switch, Route } from "react-router-dom";
import Table1 from "../../Table1/Table1";
import Topbar from "./Topbar";

const Content = ({ sidebarIsOpen, toggleSidebar }) => (
  <Container fluid className={classNames("content", { "is-open": sidebarIsOpen })}>
    <Topbar toggleSidebar={toggleSidebar} />
    <Switch>
      <Route exact path="/local-csv" component={Table1} />
      <Route exact path="/api-csv" component={Table1} />
    </Switch>
  </Container>
);

export default Content;