import React from 'react';
import '../../styles/globals.css';

const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
    const baseStyle = {
        padding: '10px 24px',
        borderRadius: 'var(--radius-pill)',
        border: 'none',
        cursor: 'pointer',
        fontSize: '0.95rem',
        fontWeight: '500',
        transition: 'all 0.3s ease',
        outline: 'none',
    };

    const variants = {
        primary: {
            backgroundColor: 'var(--text-main)',
            color: 'var(--bg-primary)',
        },
        ghost: {
            backgroundColor: 'transparent',
            color: 'var(--text-main)',
            border: '1px solid var(--border-subtle)',
        }
    };

    return (
        <button
            className={`hover-lift ${className}`}
            style={{ ...baseStyle, ...variants[variant] }}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
