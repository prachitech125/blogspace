import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

const NotFound = () => {
  return (
    <div className="container flex-center" style={{ minHeight: '60vh', flexDirection: 'column', textAlign: 'center' }}>
      <h1 style={{ fontSize: '4rem', fontFamily: 'var(--font-serif)', marginBottom: '1rem', color: 'var(--accent-primary)' }}>404</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem' }}>
        Looks like you've wandered off the path. <br />
        Let's get you back to the warmth.
      </p>
      <Link to="/">
        <Button>Return Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
