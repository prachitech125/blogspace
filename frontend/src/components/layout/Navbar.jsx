import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const Navbar = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        // Check local storage or preference
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    const navStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.5rem 0',
        marginBottom: '2rem',
        borderBottom: '1px solid var(--border-subtle)', // Soft separation
    };

    const logoStyle = {
        fontFamily: 'var(--font-serif)',
        fontSize: '1.5rem',
        fontWeight: '700',
        color: 'var(--text-main)',
    };

    return (
        <nav className="container" style={navStyle}>
            <Link to="/" style={logoStyle}>
                blogspace.
            </Link>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <Link to="/write" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Write</Link>
                <Link to="/profile" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Profile</Link>
                <Button onClick={toggleTheme} variant="ghost" className="theme-toggle">
                    {theme === 'light' ? '🌙' : '☀️'}
                </Button>
            </div>
        </nav>
    );
};

export default Navbar;
