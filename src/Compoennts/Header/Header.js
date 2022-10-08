import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CusytomLinks/CustomLinks';

const Header = () => {
    return (
        <div>
            <h1>Welcome to my fancy routing website</h1>

            {/* <a href="/">Home</a>
            <a href="/aboutus">About Us</a> */}

            {/* <Link to="/">Home</Link>
            <Link to="/aboutus">About Us</Link>
            <Link to="/friends">Friends</Link> */}

            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/aboutus">About Us</CustomLink>
            <CustomLink to="/friends">Friends</CustomLink>
            <CustomLink to="/posts">Posts</CustomLink>
        </div>
    );
};

export default Header;