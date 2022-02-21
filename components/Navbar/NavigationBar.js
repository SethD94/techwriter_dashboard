import React, {useState} from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import UserDropdown from '../UserDropdown/UserDropdown';
import MenuBar from '../MenuBar/Menubar';


export default function NavigationBar(props) {
   const { userDropdownData, userDropdownStatus, setUserDropdownData,showUserDropdownStatus, dataCardStatus, getCardData, currentUser } = props;
  
//   const [ dropdownData, setdropdownData ] = useState(props.Users)  

//   const [ menuDrawer, setMenuBar] = useState(false);
//   const showMenubar = () => setMenuBar(!menuDrawer)

//   const [userDropdown, setUserDropdown] = useState(false);
//   const showuserDropdown = () => setUserDropdown(!userDropdown)

   return (
       <>
        <div className='sideBar'>
            {/* <a href="#" className="menuBars">
                {menuDrawer ? <AiIcons.AiOutlineClose onClick={showMenubar}/> : <FaIcons.FaBars onClick={showMenubar}/>}
            </a>
            <nav className={ menuDrawer ? 'navMenu active' : 'navMenu'}>
                <MenuBar />
            </nav>  */}
            <div className="Heading">Kiwiplan Techwriter Dashboard </div>
                <div className="dropdown">
                    <a href="#" className="menuBars"  onClick={showUserDropdownStatus} >
                        Writer
                        {userDropdownStatus ? <AiIcons.AiOutlineClose  className='caret' /> : <FaIcons.FaChevronDown  className='caret' />}
                    </a>
                    <nav className={userDropdownStatus ? 'rsbar active' : 'rsbar'}>
                        <UserDropdown 
                            currentUser={currentUser}
                            userDropdownData={userDropdownData}
                            dataCardStatus={dataCardStatus} 
                            getCardData={getCardData}
                            />
                    </nav>
                </div>
            </div>
        </>
    )
}