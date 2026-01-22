import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            textAlign: 'center',
            padding: '2rem',
            color: 'var(--text-muted)',
            fontSize: '0.85rem',
            borderTop: '1px solid var(--border-subtle)'
        }}>
            <p>&copy; {new Date().getFullYear()} Blogspace. A quiet corner of the internet.</p>
        </footer>
    );
};

export default Footer;
