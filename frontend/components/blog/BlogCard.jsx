const BlogCard = ({ title, excerpt, date }) => {
  return (
    <div className="blog-card">
      <span className="date">{date}</span>
      <h2 className="serif">{title}</h2>
      <p>{excerpt}</p>
      <style jsx>{`
        .blog-card {
          background: var(--card-bg);
          padding: 2rem;
          border-radius: 16px;
          margin: 2rem 0;
          border: 1px solid var(--border);
          box-shadow: var(--shadow);
          cursor: pointer;
        }
        .blog-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }
        .date {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--accent);
        }
        h2 { margin: 0.5rem 0; font-size: 1.8rem; }
        p { color: var(--text-muted); font-size: 1.05rem; }
      `}</style>
    </div>
  );
};

export default BlogCard;