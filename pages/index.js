import { useState } from 'react';
import Head from 'next/head'
import router from 'next/router'
import { Container, Row, Col, Card, Button, CardText, CardTitle, CardHeader, CardBody, InputGroup, FormInput, FormGroup, Collapse } from 'shards-react'
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroupAddon,
  InputGroupText,
} from "shards-react";

export default function Home() {

  const handleRedirectToUser = () => {
    router.push('/users');
  };

  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen((c) => !c);
  };
   const[dropdown, setdropdown] = useState("Writer");
   const showUser = (e) =>{
    setdropdown(e.target.value);
  }
  return (
    <div>
      <Head>
        <title>Working Tile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar type="dark" theme="dark" expand="md">
        <NavbarBrand href="#">Shards React</NavbarBrand>
        <NavbarToggler/>
          <Nav navbar className="ml-auto">
            <Dropdown open={open} toggle={toggle}>
              <DropdownToggle nav caret value={dropdown}>{dropdown}</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem value="All" onClick={showUser}>All</DropdownItem>
                  <DropdownItem value="Dennis" onClick={showUser}>Dennis Thorpe</DropdownItem>
                  <DropdownItem value="Guy" onClick={showUser}>Guy Halpe</DropdownItem>
                  <DropdownItem value="Janet" onClick={showUser}>Janet Stevenson</DropdownItem>
                  <DropdownItem value="Paul" onClick={showUser}>Paul Erith</DropdownItem>
                  <DropdownItem value="Seth" onClick={showUser}>Seth Delpachitra</DropdownItem>
                </DropdownMenu>
            </Dropdown>
          </Nav>
      </Navbar>
    </div>
  )
}
