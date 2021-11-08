import React, {useState} from 'react';
import Image from 'next/image';

export default function UserDropdown(props) {

    const [ userData, setUserData ] = useState(JSON.parse(props.data));
    const [ dataCards, setdataCards] = useState(false);
    const showDataCards = (e) => {
        console.log(e.currentTarget.dataset.user);
    }

   return (
       <>
        <ul className="dropdown-content">
            {userData[0].map((item, index) => {
                return (
                    <li key={index} className="dropdown-items" data-user={item.firstname} onClick={showDataCards}>
                        {item.fullname}
                    </li>
                )
            })}
        </ul>
        </>
    )
}