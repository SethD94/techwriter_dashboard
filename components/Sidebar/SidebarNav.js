import React, {useState} from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import Link from 'next/link';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';


export default function SidebarNav() {

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar)

  const [dropdown, setDropdown] = useState(false);
  const showDropdown = () => setDropdown(!dropdown);
   return (
       <>
       <IconContext.Provider value={{color: "#ffffff"}}>
        <div className="sideBar">
            <a href="#" className="menuBars">
                <FaIcons.FaBars onClick={showSidebar}/>
            </a>
            <div className="appTitle">Kiwiplan Techwriter Dashboard</div>
            <div className="dropdown">
                <button onClick={showDropdown} className="dropdownbtn">Dropdown</button>
                    <div className={dropdown ? 'dropdownList active' : "dropdownList"}>
                        <a href="#">All</a>
                        <a href="#">Dennis Thorpe</a>
                        <a href="#">Guy Halpe</a>
                        <a href="#">Janet Stevenson</a>
                        <a href="#">Paul Erith</a>
                        <a href="#">Seth Delpachitra</a>
                    </div>
            </div>
        </div>
        <nav className={sidebar ? 'navMenu active' : 'navMenu'}>
            <ul className="navMenuItems">
                <li className="navBarToggle">
                    <a href="#" className="menuBars">
                        <AiIcons.AiOutlineClose onClick={showSidebar}/>
                    </a>
                </li>
                {SidebarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <a href={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
          </IconContext.Provider>
        </>
    )
}