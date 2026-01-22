import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockPosts } from '../data/mockPosts';
import TagPill from '../components/blog/TagPill';
import CommentThread from '../components/blog/CommentThread';

const BlogDetails = () => {
  const { id } = useParams();
  const post = mockPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return <div className="container" style={{ paddingTop: '4rem' }}>Post not found</div>;
  }

  return (
    <article className="container" style={{ maxWidth: '700px', paddingTop: '2rem' }}>
      <Link to="/" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem', display: 'inline-block' }}>
        ← Back to reading
      </Link>

      <header style={{ marginTop: '1rem', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '1rem' }}>
          {post.tags.map(tag => <TagPill key={tag}>{tag}</TagPill>)}
        </div>
        <h1 style={{
          fontSize: '2.5rem',
          lineHeight: '1.2',
          marginBottom: '1rem',
          fontFamily: 'var(--font-serif)'
        }}>{post.title}</h1>
        <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          By {post.author} • {post.date} • {post.readTime}
        </div>
      </header>

      {/* Placeholder for content - using the excerpt + some dummy text for now since we don't have full content in mock */}
      <div style={{
        fontSize: '1.1rem',
        lineHeight: '1.8',
        color: 'var(--text-main)',
        fontFamily: 'var(--font-serif)' // Serif for body text as requested for "book feel"
      }}>
        <p style={{ marginBottom: '1.5rem', fontSize: '1.25rem', fontStyle: 'italic', fontWeight: '300' }}>
          {post.excerpt}
        </p>

        <p style={{ marginBottom: '1.5rem' }}>
          The morning light hit the desk just right. There is something profoundly calming about the stillness of early hours, before the notifications start, before the world demands your attention. This is the time when I feel most at home with myself.
        </p>
        <p style={{ marginBottom: '1.5rem' }}>
          We often talk about productivity in terms of output. How much did you ship? How many lines of code? But what about the input? The quiet moments of reflection that allow the ideas to form in the first place. I've been trying to optimize for these moments lately.
        </p>

        <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Finding the rhythm</h3>
        <p style={{ marginBottom: '1.5rem' }}>
          It's not about being slow for the sake of it. It's about finding a rhythm that is sustainable. A pace that doesn't leave you breathless at the end of the day, but rather fulfilled.
        </p>
      </div>

      <CommentThread />
    </article>
  );
};

export default BlogDetails;