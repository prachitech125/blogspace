import React from 'react';

const Input = ({ label, type = 'text', placeholder, value, onChange, textarea = false }) => {
    const wrapperStyle = {
        marginBottom: '1.5rem',
    };

    const labelStyle = {
        display: 'block',
        fontSize: '0.85rem',
        color: 'var(--text-muted)',
        marginBottom: '0.5rem',
        fontWeight: '500',
    };

    const inputStyle = {
        width: '100%',
        padding: '12px 16px',
        backgroundColor: 'var(--bg-primary)',
        border: '1px solid var(--border-subtle)',
        borderRadius: '12px',
        color: 'var(--text-main)',
        fontSize: '1rem',
        transition: 'all 0.3s ease',
        outline: 'none',
        boxShadow: 'none',
    };

    const focusStyle = (e) => {
        e.target.style.borderColor = 'var(--text-muted)';
        e.target.style.boxShadow = '0 0 0 3px rgba(0,0,0,0.05)';
    };

    const blurStyle = (e) => {
        e.target.style.borderColor = 'var(--border-subtle)';
        e.target.style.boxShadow = 'none';
    };

    const Component = textarea ? 'textarea' : 'input';

    return (
        <div style={wrapperStyle}>
            {label && <label style={labelStyle}>{label}</label>}
            <Component
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                style={{ ...inputStyle, minHeight: textarea ? '120px' : 'auto' }}
                onFocus={focusStyle}
                onBlur={blurStyle}
            />
        </div>
    );
};

export default Input;
