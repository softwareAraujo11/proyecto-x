// Profile.jsx
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../../Styles/Profile.css';
import imgProfile from '../../assets/fotoPerfil.jpg';
import { CommonHeader } from '../../components/CommonHeader';
import SidebarMenu from '../../components/SidebarMenu';
import { TweetsFeed } from '../../components/TweetsFeed';

const Profile = ({ tweets, users }) => {
    const { username: paramUsername } = useParams();
    const [username, setUsername] = useState(paramUsername || '');

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    const followersCount = 150;
    const followingCount = 75;

    const userTweets = tweets.filter(tweet => tweet.username === username);

    return (
        <div className='Profile'>
            <CommonHeader />
            <div className='Feed'>
                <div className='izqFeed'>
                    <SidebarMenu />
                </div>
                <div className='centerFeed' id=''>
                    <div className="profile-container">
                        <div className="profile-header">
                            <img 
                                src={imgProfile}
                                alt='fotoPerfil'
                                className="profile-picture" 
                            />
                            <h2 className="username">{username}</h2>
                        </div>
                        <div className="buttons-container">
                            <Link to={`/followers`} className="profile-button">
                                Seguidores: {followersCount}
                            </Link>
                            <Link to={`/following`} className="profile-button">
                                Seguidos: {followingCount}
                            </Link>
                        </div>
                        {userTweets.length === 0 ? <p>No tweets to show.</p> : <TweetsFeed tweets={userTweets} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;