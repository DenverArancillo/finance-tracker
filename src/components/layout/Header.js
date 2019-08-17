import React from 'react';
import { Link } from 'react-router-dom';

let headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
};

let linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link style={linkStyle} to="/">Home</Link> |{' '}
            <Link style={linkStyle} to="/about">About</Link>
        </header>
    );
}

export default Header;