// SidebarMenu.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/SidebarMenu.css';

const SidebarMenu = () => {
    const username = localStorage.getItem('username'); // Obtener el nombre de usuario de localStorage
    const menuItems = [
        { name: 'Perfil', icon: '👤', path: username ? `/profile/${username}` : '/LoginPage' }, // Enlace al perfil
        { name: 'Notificaciones', icon: '🔔', path: '/Feed' },
        { name: 'Mensajes', icon: '💬', path: '/Feed' },
        { name: 'Explorar', icon: '🌍', path: '/Feed' },
        { name: 'Configuración', icon: '⚙️', path: '/Feed' },
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
