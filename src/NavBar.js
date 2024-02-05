import React from "react";
import {
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

export default function NavBar() {
  return (
    <>
      <Nav fill pills>
        <NavItem className="navItem">
          <NavLink active href="#">
            Cinema
          </NavLink>
        </NavItem>
        <NavItem className="navItem">
          <NavLink href="#">Name</NavLink>
        </NavItem>
        <NavItem className="navItem">
          <NavLink href="#">Address</NavLink>
        </NavItem>
        <NavItem className="navItem">
          <NavLink href="##">
            Rating
          </NavLink>
        </NavItem>
      </Nav>
    </>
  );
}
