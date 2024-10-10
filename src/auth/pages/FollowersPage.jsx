// FollowersPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/FollowersPage.css';
import { CommonHeader } from '../../components/CommonHeader';

const FollowersPage = () => {
  const followers = [
    { fullName: 'Ana Gómez', UserName: 'ana', isFollowing: false },
    { fullName: 'Carlos Pérez', UserName: 'carlos', isFollowing: true },
    { fullName: 'Beatriz López', UserName: 'beatriz', isFollowing: false },
    { fullName: 'Daniel Ruiz', UserName: 'daniel', isFollowing: true },
    { fullName: 'Elena Martínez', UserName: 'elena', isFollowing: false },
    { fullName: 'Fernando Álvarez', UserName: 'fernando', isFollowing: true },
    { fullName: 'Gabriela Sánchez', UserName: 'gabriela', isFollowing: false },
    { fullName: 'Hugo Torres', UserName: 'hugo', isFollowing: true },
    { fullName: 'Isabel Moreno', UserName: 'isabel', isFollowing: false },
    { fullName: 'Javier Romero', UserName: 'javier', isFollowing: true },
    { fullName: 'Karla Díaz', UserName: 'karla', isFollowing: false },
    { fullName: 'Luis Herrera', UserName: 'luis', isFollowing: true },
    { fullName: 'María Fernández', UserName: 'maria', isFollowing: false },
    { fullName: 'Natalia Castro', UserName: 'natalia', isFollowing: false },
    { fullName: 'Oscar Ramírez', UserName: 'oscar', isFollowing: true },
    { fullName: 'Paola Reyes', UserName: 'paola', isFollowing: false },
    { fullName: 'Ricardo Ortiz', UserName: 'ricardo', isFollowing: true },
    { fullName: 'Sandra Lara', UserName: 'sandra', isFollowing: false },
    { fullName: 'Tomás Gutiérrez', UserName: 'tomas', isFollowing: true },
    { fullName: 'Valeria Vega', UserName: 'valeria', isFollowing: false },
    { fullName: 'Valeria Vega', UserName: 'valeria', isFollowing: false },
  ];

  const sortedFollowers = followers.sort((a, b) => 
    a.fullName.localeCompare(b.fullName)
  );

  const itemsPerPage = 10;
  const totalPages = Math.ceil(sortedFollowers.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const currentFollowers = sortedFollowers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="followers-page">
      <CommonHeader />
      <h1>Followers</h1>
      <ul className="followers-list">
        {currentFollowers.map((user, index) => (
          <li key={index} className="follower-item">
            {}
            <Link to={`/profile/${user.UserName}`} className="follower-name">
              {user.fullName}
            </Link>
            <button className="follow-button">
              {user.isFollowing ? 'Dejar de seguir' : 'Seguir'}
            </button>
          </li>
        ))}
      </ul>

      {}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button 
            key={i + 1} 
            className={`page-button ${i + 1 === currentPage ? 'active' : ''}`}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FollowersPage;
