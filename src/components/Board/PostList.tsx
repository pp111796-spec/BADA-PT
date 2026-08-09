import type { BoardPost } from '../../lib/boardStorage';
import PostItem from './PostItem';

interface PostListProps {
  posts: BoardPost[];
  onChanged: () => void;
}

export default function PostList({ posts, onChanged }: PostListProps) {
  if (posts.length === 0) {
    return <p className="board-empty">아직 등록된 글이 없습니다. 첫 의견을 남겨보세요.</p>;
  }

  return (
    <ul className="post-list">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} onChanged={onChanged} />
      ))}
    </ul>
  );
}
