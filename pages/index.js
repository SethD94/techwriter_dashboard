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
                <DropdownMenu  onClick={(e)=>{
                  const selectedUser = e.target.value;
                  setdropdown(selectedUser)
                }}>
                  <DropdownItem value="All">All</DropdownItem>
                  <DropdownItem value="Dennis">Dennis Thorpe</DropdownItem>
                  <DropdownItem value="Guy">Guy Halpe</DropdownItem>
                  <DropdownItem value="Janet">Janet Stevenson</DropdownItem>
                  <DropdownItem value="Paul">Paul Erith</DropdownItem>
                  <DropdownItem value="Seth">Seth Delpachitra</DropdownItem>
                </DropdownMenu>
            </Dropdown>
          </Nav>
      </Navbar>
    </div>
  )
}
