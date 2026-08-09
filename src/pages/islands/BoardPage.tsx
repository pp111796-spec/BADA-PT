import { useCallback, useEffect, useRef, useState } from 'react';
import { getPosts, type BoardPost } from '../../lib/boardStorage';
import PostForm from '../../components/Board/PostForm';
import PostList from '../../components/Board/PostList';

const POLL_INTERVAL_MS = 4000;

export default function BoardPage() {
  const [posts, setPosts] = useState<BoardPost[]>([]);
  const [loadError, setLoadError] = useState(false);
  const loadedOnce = useRef(false);

  const refresh = useCallback(() => {
    getPosts()
      .then((next) => {
        setPosts(next);
        setLoadError(false);
        loadedOnce.current = true;
      })
      .catch(() => setLoadError(true));
  }, []);

  useEffect(() => {
    refresh();
    const timer = setInterval(refresh, POLL_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [refresh]);

  return (
    <article className="island-page">
      <p className="page-eyebrow">익명 게시판</p>
      <h1>바다에 대한 의견</h1>
      <p className="page-lead">누구나 이름 없이 자유롭게 의견을 남길 수 있는 공간이다.</p>

      <div className="warn-note">
        <span className="warn-note-icon">⚠️</span>
        <span>
          여기 남긴 글은 <b>접속한 모든 사람에게 실시간으로 공유</b>된다. 임시 저장소를 쓰기 때문에
          글은 24시간이 지나면 자동으로 사라진다.
        </span>
      </div>

      {loadError && loadedOnce.current && (
        <p className="board-empty">최신 글을 불러오지 못했어요. 잠시 후 자동으로 다시 시도합니다.</p>
      )}

      <PostForm onPosted={refresh} />
      <PostList posts={posts} onChanged={refresh} />
    </article>
  );
}
