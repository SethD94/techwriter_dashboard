import React, {useState} from 'react';
import Image from 'next/image';

export default function UserDropdown(props) {

    const [userData, setUserData] = useState(props.data)

   return (
       <>
        <ul className="dropdown-content">
            {userData.map((item, index) => {
                return (
                  
                <li key={index} className="dropdown-items">
                    {item.first_name}{" "}{item.last_name}
                </li>
                )
            })}
        </ul>
        </>
    )
}