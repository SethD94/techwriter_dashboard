import React, { Component } from 'react';
import { useState } from 'react';
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,

} from "shards-react";

    function NavigationBar() {
        
        const [open, setOpen] = useState(false);
        const toggle = () => {
          setOpen((c) => !c);
        };
         const[dropdown, setdropdown] = useState("Writer");
         const showUser = (e) =>{
          setdropdown(e.target.value);
        }

        return(
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
        );
    }

    export default NavigationBar 
