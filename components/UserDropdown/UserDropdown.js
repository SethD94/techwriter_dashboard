import React from 'react';
import { UserData } from './UserData.js'

export default function UserDropdown() {

   return (
       <>
        <ul className="dropdown-content">
            {UserData.map((item, index) => {
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
        </>
    )
}