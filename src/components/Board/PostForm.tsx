import { useState, type FormEvent } from 'react';
import { addPost } from '../../lib/boardStorage';

export default function PostForm({ onPosted }: { onPosted: () => void }) {
  const [content, setContent] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = content.trim();
    if (!trimmed) return;
    addPost(trimmed);
    setContent('');
    onPosted();
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="바다에 대한 의견을 익명으로 남겨보세요 (최대 500자)"
        maxLength={500}
        rows={3}
      />
      <button type="submit" disabled={!content.trim()}>
        등록
      </button>
    </form>
  );
}
