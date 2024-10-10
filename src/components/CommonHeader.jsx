// CommonHeader.jsx
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import miLogo from "../assets/x.png";
import '../Styles/CommonHeader.css';

export const CommonHeader = () => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    };

    return (
        <div className='CommonHeader'>
            <div id='div1-commonHeader'>
                <Link to="/Feed">
                    <img src={miLogo} alt="Logo" id='logoHeader' />
                </Link>
            </div>
            <div id='div2-commonHeader'>
                <p>{username}</p>
            </div>
            <div id='div3-commonHeader'>
                <p onClick={handleLogout} id="logOut" style={{ cursor: 'pointer' }}>Log out</p>
            </div>
        </div>
    );
};