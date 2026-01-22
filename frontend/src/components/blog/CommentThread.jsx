import React, { useState } from 'react';
import Button from '../common/Button';
import Input from '../common/Input';

const CommentThread = () => {
    // Mock comments for now
    const [comments, setComments] = useState([
        { id: 1, author: "Sarah", text: "This is exactly what I needed to read today. Thank you.", date: "2h ago" },
        { id: 2, author: "Davide", text: "The rain analogy is perfect.", date: "5h ago" }
    ]);
    const [newComment, setNewComment] = useState("");

    const handleSubmit = () => {
        if (!newComment.trim()) return;
        setComments([...comments, {
            id: Date.now(),
            author: "You",
            text: newComment,
            date: "Just now"
        }]);
        setNewComment("");
    };

    return (
        <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--border-subtle)' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', marginBottom: '1.5rem' }}>Thoughts regarding this...</h3>

            <div style={{ marginBottom: '2rem' }}>
                <Input
                    textarea
                    placeholder="Write a thoughtful response..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <div style={{ textAlign: 'right' }}>
                    <Button onClick={handleSubmit}>Publish Note</Button>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {comments.map(comment => (
                    <div key={comment.id} style={{
                        padding: '1.5rem',
                        backgroundColor: 'var(--bg-secondary)',
                        borderRadius: 'var(--radius-card)',
                        fontSize: '0.95rem'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                            <span style={{ fontWeight: '600', color: 'var(--text-main)' }}>{comment.author}</span>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{comment.date}</span>
                        </div>
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>{comment.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CommentThread;
