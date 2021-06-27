import React, {useState} from 'react';
import Image from 'next/image';

export default function ReportCard(props) {

   return (
       <>
        <ul className="card-wrapper">
            <li className="card">
                <img src='https://images.unsplash.com/photo-1611083360739-bdad6e0eb1fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400' alt=''></img>
                <h3><a href="">What a Fantabulous Title!</a></h3>
                <p>Lorem ipsum sit dolor amit</p>
            </li>
        </ul>
    </>
    )
}