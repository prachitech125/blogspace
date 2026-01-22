import React, { useState } from 'react';
import Button from '../components/common/Button';
import Input from '../components/common/Input';

const Write = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <div className="container" style={{ maxWidth: '800px', paddingTop: '2rem' }}>
      <h1 style={{ fontFamily: 'var(--font-serif)', marginBottom: '2rem' }}>New Story</h1>

      <Input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Tell your story..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{
          width: '100%',
          minHeight: '400px',
          padding: '1.5rem',
          fontSize: '1.1rem',
          lineHeight: '1.8',
          border: 'none',
          borderRadius: 'var(--radius-card)',
          backgroundColor: 'transparent',
          resize: 'none',
          outline: 'none',
          fontFamily: 'var(--font-serif)',
          color: 'var(--text-main)',
        }}
      />

      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
        <Button variant="ghost">Save Draft</Button>
        <Button>Publish</Button>
      </div>
    </div>
  );
};

export default Write;
