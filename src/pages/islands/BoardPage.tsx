import { useCallback, useState } from 'react';
import { getPosts, type BoardPost } from '../../lib/boardStorage';
import PostForm from '../../components/Board/PostForm';
import PostList from '../../components/Board/PostList';

export default function BoardPage() {
  const [posts, setPosts] = useState<BoardPost[]>(() => getPosts());
  const refresh = useCallback(() => setPosts(getPosts()), []);

  return (
    <article className="island-page">
      <p className="page-eyebrow">익명 게시판</p>
      <h1>바다에 대한 의견</h1>
      <p className="page-lead">누구나 이름 없이 자유롭게 의견을 남길 수 있는 공간이다.</p>

      <div className="warn-note">
        <span className="warn-note-icon">⚠️</span>
        <span>
          <b>지금은 이 브라우저에만 저장된다.</b> 다른 사람 화면에는 보이지 않는 로컬 데모
          상태다. 모두가 같은 글을 보게 하려면 무료 공유 저장소 연결이 필요하다.
        </span>
      </div>

      <PostForm onPosted={refresh} />
      <PostList posts={posts} onChanged={refresh} />
    </article>
  );
}
