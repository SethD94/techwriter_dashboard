import React, {useState} from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { MenuDrawerData } from './MenuDrawerData';
import { UserDropdownData } from './UserData';



export default function NavigationBar() {

  const [ menuDrawer, setMenuBar] = useState(false);
  const showMenubar = () => setMenuBar(!menuDrawer)

  const [userDropdown, setUserDropdown] = useState(false);
  const showuserDropdown = () => setUserDropdown(!userDropdown)

   return (
       <>
        <div className='sideBar'>
            <a href="#" className="menuBars">
                {menuDrawer ? <AiIcons.AiOutlineClose onClick={showMenubar}/> : <FaIcons.FaBars onClick={showMenubar}/>}
            </a>
            <div className="Heading">Kiwiplan Techwriter Dashboard</div>
            <div className="dropdown">
                    <a href="#" className="menuBars"  onClick={showuserDropdown} >
                        Writer
                        {userDropdown ? <AiIcons.AiOutlineClose  className='caret' /> : <FaIcons.FaChevronDown  className='caret' />}
                    </a>
                    <nav className={userDropdown ? 'rsbar active' : 'rsbar'}>
                        <ul className="dropdown-content">
                            {UserDropdownData.map((item, index) => {
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

            <nav className={ menuDrawer ? 'navMenu active' : 'navMenu'}>
                <ul className="navMenuItems">
                    {MenuDrawerData.map((item, index) => {
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