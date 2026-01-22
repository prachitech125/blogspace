import React from 'react';
import BlogCard from '../components/blog/BlogCard';
import { mockPosts } from '../data/mockPosts';

const Home = () => {
  return (
    <div className="container">
      <header style={{ marginBottom: '4rem', textAlign: 'center', paddingTop: '2rem' }}>
        <h1 style={{
          fontSize: '3rem',
          marginBottom: '1rem',
          fontFamily: 'var(--font-serif)',
          fontWeight: '700'
        }}>
          Slow Down.
        </h1>
        <p style={{
          color: 'var(--text-muted)',
          fontSize: '1.1rem',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          A quiet corner of the internet for reading, writing, and reflecting.
        </p>
      </header>

      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        {mockPosts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
