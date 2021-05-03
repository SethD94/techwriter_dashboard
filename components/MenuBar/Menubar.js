import React from 'react';
import { MenuDrawerData } from './MenuDrawerData'

export default function MenuBar() {

   return (
       <>
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
        </>
    )
}