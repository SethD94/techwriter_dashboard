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

  const [rightsidebar, setRightsidebar] = useState(false);
  const showrightSidebar = () => setRightsidebar(!rightsidebar)

   return (
       <>
        <div className={sidebar ? 'sideBar Open'  : 'sideBar'}>
            <a href="#" className="menuBars">
                {sidebar ? <AiIcons.AiOutlineClose onClick={showSidebar}/> : <FaIcons.FaBars onClick={showSidebar}/>}
            </a>
            <div className="Heading">Kiwiplan Techwriter Dashboard</div>
            <div className="dropdown">
                    <a href="#" className="menuBars"  onClick={showrightSidebar} >
                        Writer
                        {rightsidebar ? <FaIcons.FaChevronRight  className='caret' /> : <FaIcons.FaChevronLeft  className='caret' />}
                    </a>
                    <nav className={rightsidebar ? 'rsbar active' : 'rsbar'}>
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
                    </nav>
                </div>
        </div>

            <nav className={sidebar ? 'navMenu active' : 'navMenu'}>
                <ul className="navMenuItems">
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