import { useState, type FormEvent } from 'react';
import { addPost } from '../../lib/boardStorage';

export default function PostForm({ onPosted }: { onPosted: () => void }) {
  const [content, setContent] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const trimmed = content.trim();
    if (!trimmed || submitting) return;
    setSubmitting(true);
    setError(false);
    try {
      await addPost(trimmed);
      setContent('');
      onPosted();
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
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
      {error && <p className="post-form-error">전송에 실패했어요. 다시 시도해 주세요.</p>}
      <button type="submit" disabled={!content.trim() || submitting}>
        {submitting ? '등록 중…' : '등록'}
      </button>
    </form>
  );
}
