import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/SidebarMenu.css';

const SidebarMenu = () => {
    const menuItems = [
        { name: 'Perfil', icon: '👤', path: '/profile' },  
    ];

    return (
        <div className="SidebarMenu">
            {menuItems.map((item, index) => (
                <Link key={index} to={item.path} className="menuItem">
                    <span className="icon">{item.icon}</span>
                    <span className="itemName">{item.name}</span>
                </Link>
            ))}
        </div>
    );
};

export default SidebarMenu;
