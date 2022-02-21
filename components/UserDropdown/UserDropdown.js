import React, {useState} from 'react';
import Image from 'next/image';

export default function UserDropdown(props) {
    const {userDropdownData, getCardData}=props;

   return (
       <>
        <ul className="dropdown-content">
            {userDropdownData[0].map((item, index) => {
                return (
                    <li key={index} className="dropdown-items" data-user={item.ID} onClick={getCardData}>
                        {item.fullname}
                    </li>
                )
            })}
        </ul>
        </>
    )
}