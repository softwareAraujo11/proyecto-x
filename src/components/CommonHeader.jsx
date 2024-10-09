import React from 'react'
import { Link } from "react-router-dom";
import miLogo from "../assets/x.png";
import '../Styles/CommonHeader.css';

export const CommonHeader = () => {
    return (
        <div className='CommonHeader'>
            <div id='div1-commonHeader'><Link to="/"><img src={miLogo} alt="Logo" id='logoHeader'/></Link></div>
            <div id='div2-commonHeader'><p>Pepito Perez</p></div>
            <div id='div3-commonHeader'><Link to="/" id="logOut"><p>Log out</p></Link></div>
        </div>
    )
}
