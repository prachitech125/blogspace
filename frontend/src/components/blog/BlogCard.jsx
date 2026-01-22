import React from 'react';
import { Link } from 'react-router-dom';
import TagPill from './TagPill';

const BlogCard = ({ post }) => {
    const cardStyle = {
        backgroundColor: 'var(--bg-card)',
        borderRadius: 'var(--radius-card)',
        padding: '0', // Image takes full width initially if we had one, but let's do text-focused first or mixed
        boxShadow: 'var(--shadow-soft)',
        marginBottom: '2rem',
        border: '1px solid var(--border-subtle)',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        textDecoration: 'none',
        color: 'inherit',
    };

    const contentStyle = {
        padding: '2rem',
    };

    const metaStyle = {
        fontSize: '0.85rem',
        color: 'var(--text-muted)',
        marginBottom: '0.5rem',
        fontFamily: 'var(--font-sans)',
    };

    const titleStyle = {
        fontFamily: 'var(--font-serif)',
        fontSize: '1.75rem',
        marginBottom: '1rem',
        color: 'var(--text-main)',
    };

    const excerptStyle = {
        color: 'var(--text-muted)',
        fontSize: '1rem',
        lineHeight: '1.6',
        marginBottom: '1.5rem',
    };

    return (
        <Link to={`/post/${post.id}`} className="hover-lift" style={cardStyle}>
            {/* Optional: if we want images at the top
        <div style={{ height: '200px', backgroundColor: '#eee', backgroundImage: `url(${post.image})`, backgroundSize: 'cover' }} />
       */}

            <div style={contentStyle}>
                <div style={metaStyle}>
                    {post.date} • {post.readTime}
                </div>
                <h2 style={titleStyle}>{post.title}</h2>
                <p style={excerptStyle}>
                    {post.excerpt}
                </p>
                <div>
                    {post.tags.map(tag => (
                        <TagPill key={tag}>{tag}</TagPill>
                    ))}
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;
