import React, { useState, useEffect } from 'react';
import styles from './commentSection.module.css';
import Button from '@mui/material/Button';
import { useUserContext } from '../../context.jsx';

const API_URL = import.meta.env.VITE_API_URL;

export default function CommentSection({ pageName = 'postPvp' }) {
    const { username, setPopUpExists } = useUserContext();
    const [value, setValue] = useState('');
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
    async function load() {
        try {
            const res = await fetch(`${API_URL}/comment?pageName=${encodeURIComponent(pageName)}`);
            
            if (!res.ok) 
                throw new Error(`GET /comment failed ${res.status}`);
            
            const data = await res.json();
            setComments(Array.isArray(data) ? data : []);
        } catch (err) {
            console.error('Failed to load comments', err);
        }
    }
    load();
    }, []);

    // simplest formatter: accepts ISO string or Date
    const formatDate = (isoOrDate) => {
        if (!isoOrDate) return '';
        try {
            return new Date(isoOrDate).toLocaleString();
        } catch {
            return String(isoOrDate);
        }
    };

    async function submitComment() {
        if (!username) {
            setPopUpExists(true);
            return;
        }

        const trimmed = value.trim();
        if (!trimmed) return;

        setLoading(true);
        try {
            const res = await fetch(
                `${API_URL}/comment?pageName=${encodeURIComponent(pageName)}`,
                {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: username, content: trimmed }),
                }
            );

            if (!res.ok) {
                const text = await res.text();
                throw new Error(text || `Server returned ${res.status}`);
            }

            const data = await res.json(); // backend should return the updated comments array
            setComments(Array.isArray(data) ? data : []);
            setValue('');
        } catch (err) {
            console.error('Post comment failed', err);
        } finally {
            setLoading(false);
        }
    }

    function onKeyDown(e) {
        if (e.key === 'Enter') {
            submitComment();
        }
    }

    return (
        <div className={styles.container}>
            {/* ensure this is NOT inside a <form> element */}
            <div className={styles.inputRow}>
                <input
                    className={styles.input}
                    placeholder="Write a comment..."
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={onKeyDown} // Enter will call submitComment()
                    disabled={loading}
                />
                <Button 
                variant="contained" 
                onClick={submitComment} 
                disabled={loading}
                sx={{
                    backgroundColor: 'var(--black1)',
                    borderRadius: '0.5rem',
                    color: 'var(--text)',
                    boxShadow: 'var(--shadow-s)',
                }}>
                    {loading ? 'Posting...' : 'Post'}
                </Button>
            </div>
            <div className={styles.list}>
                {comments.map((c) => (
                    <div key={c.id} className={styles.comment}>
                        <div className={styles.meta}>
                            <p className={styles.author}>{c.name}</p>
                            <p className={styles.date}>{formatDate(c.createdAt)}</p>
                        </div>
                        <div className={styles.content}>{c.content}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}