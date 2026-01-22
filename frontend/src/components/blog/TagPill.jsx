import React from 'react';

const TagPill = ({ children }) => {
    return (
        <span style={{
            display: 'inline-block',
            padding: '4px 12px',
            borderRadius: '20px',
            fontSize: '0.75rem',
            backgroundColor: 'var(--bg-secondary)',
            color: 'var(--text-muted)',
            marginRight: '8px',
            fontWeight: '500',
            letterSpacing: '0.02em',
        }}>
            {children}
        </span>
    );
};

export default TagPill;
