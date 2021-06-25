import React, {useState} from 'react';
import Image from 'next/image';

export default function UserDropdown(props) {

    const [userData, setUserData] = useState(props.data);
    const [ dataCards, setdataCards] = useState(false);
    const showDataCards = (e) => {
        console.log(e.currentTarget.dataset.user);
    }
   return (
       <>
        <ul className="dropdown-content">
            {userData.map((item, index) => {
                return (
                    <li key={index} className="dropdown-items" data-user={item.first_name} onClick={showDataCards}>
                        {item.first_name}{" "}{item.last_name}
                    </li>
                )
            })}
        </ul>
        </>
    )
}