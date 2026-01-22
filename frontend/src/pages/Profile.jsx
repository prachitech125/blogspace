import React from 'react';
import Button from '../components/common/Button';
import BlogCard from '../components/blog/BlogCard';
import { mockPosts } from '../data/mockPosts';

const Profile = () => {
  // Mock user data
  const user = {
    name: "Elena",
    bio: "Digital gardener. Writing about slow living, code, and coffee.",
    posts: mockPosts.filter(p => p.author === "Elena") // Just showing all for now
  };

  return (
    <div className="container" style={{ paddingTop: '2rem' }}>
      <div style={{
        textAlign: 'center',
        marginBottom: '4rem',
        paddingBottom: '2rem',
        borderBottom: '1px solid var(--border-subtle)'
      }}>
        <div style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          backgroundColor: 'var(--accent-primary)',
          margin: '0 auto 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2rem',
          color: 'var(--bg-primary)',
          fontFamily: 'var(--font-serif)'
        }}>
          {user.name[0]}
        </div>
        <h1 style={{ fontFamily: 'var(--font-serif)', marginBottom: '0.5rem' }}>{user.name}</h1>
        <p style={{ color: 'var(--text-muted)', maxWidth: '400px', margin: '0 auto 1.5rem' }}>{user.bio}</p>
        <Button variant="ghost">Edit Profile</Button>
      </div>

      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <h3 style={{ marginBottom: '2rem', fontFamily: 'var(--font-serif)' }}>Published Stories</h3>
        {user.posts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
