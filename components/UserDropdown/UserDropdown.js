import React, {useState} from 'react';
import Image from 'next/image';

export default function UserDropdown(props) {

    const [userData, setUserData] = useState(props.data)

   return (
       <>
        <ul className="dropdown-content">
            {userData.map((item, index) => {
                return (
                  
                <li key={index} >
                    <Image src={item.img} alt={item.firstname} width="50px" height="50px" />
                        <span>{item.first_name}</span>
                        <span>{item.last_name}</span>
                        <span>{item.img}</span>
                    
                </li>
                )
            })}
        </ul>
        </>
    )
}