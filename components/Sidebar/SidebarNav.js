import React, {useState} from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import Link from 'next/link';
import { SidebarData } from './SidebarData';
import { dropdownData } from './dropdownData';
import { IconContext } from 'react-icons';


export default function SidebarNav() {

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar)

   return (
       <>
        <div className={sidebar ? 'sideBar Open'  : 'sideBar'}>
            <a href="#" className="menuBars">
                <FaIcons.FaBars onClick={showSidebar}/>
            </a>
            <div className="appTitle">Kiwiplan Techwriter Dashboard</div>
            <div className="dropdown">
                    <a href="#" className="menuBars caret" >
                        Writer
                        <FaIcons.FaCaretDown />
                    </a>
                        <ul className="dropdown-content">
                            {dropdownData.map((item, index) => {
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

        </>
    )
}