import React, {useState} from 'react';
import Image from 'next/image';

export default function ReportCard(props) {

   return (
       <>
        <ul className="card-wrapper">
            <li className="card">
                <img src={props.url}></img>
                <h3><a href="">What a Fantabulous Title!</a></h3>
                <p>Lorem ipsum sit dolor amit</p>
            </li>
        </ul>
    </>
    )
}