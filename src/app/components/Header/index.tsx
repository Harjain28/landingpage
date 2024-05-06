import React, { useEffect } from "react";
import Link from "next/link";
import cx from "../Header/index.module.scss";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import { GoPerson } from "react-icons/go";
import { IoIosSearch, IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
// import { Button, Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap'

export default function Header() {
  return (
    <>
      <div className={`${cx.product_card_title} py-1 py-lg-2 d-none d-sm-none d-md-block d-lg-block d-xl-block`}>
        <Container>
          <Row>
            <Col md={3}>
              <div>
                <Link href={"#"}>Call: +1 078 2376</Link>
              </div>
            </Col>
            <Col md={6}>
              <div className="text-center text-white">
                <span>New year sale - 30% off</span>
              </div>
            </Col>
            <Col md={3}>
              <div className="text-end">
                <Link className="d-inline-flex align-items-center gap-1" href={"#"}><GoPerson /> Login</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <header className={`${cx.header_main}`}>

        <Navbar expand="lg" className="bg-body-tertiary">
          <Container >
            <Navbar.Brand href="#"><h3>Logo</h3></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="m-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1" style={{color:"#F76B6A"}}>Home</Nav.Link>
                <Nav.Link href="#action2">Shop</Nav.Link>
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Pages</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#action2">Blog</Nav.Link>
                <Nav.Link href="#action2">Contact</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#action1"><IoIosSearch /></Nav.Link>
                <Nav.Link href="#action1"><IoMdHeartEmpty /></Nav.Link>
                <Nav.Link className="pe-0" href="#action1"><IoCartOutline /></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}
