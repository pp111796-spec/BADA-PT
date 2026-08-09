import { canDelete, deletePost, type BoardPost } from '../../lib/boardStorage';

function formatTime(ts: number): string {
  const diffMin = Math.floor((Date.now() - ts) / 60000);
  if (diffMin < 1) return '방금 전';
  if (diffMin < 60) return `${diffMin}분 전`;
  const diffHour = Math.floor(diffMin / 60);
  if (diffHour < 24) return `${diffHour}시간 전`;
  return new Date(ts).toLocaleDateString('ko-KR');
}

interface PostItemProps {
  post: BoardPost;
  onChanged: () => void;
}

export default function PostItem({ post, onChanged }: PostItemProps) {
  const mine = canDelete(post);

  return (
    <li className="post-item">
      <div className="post-item-header">
        <span className="post-author">{post.authorLabel}</span>
        <span className="post-time">{formatTime(post.createdAt)}</span>
        {mine && (
          <button
            className="post-delete"
            onClick={() => {
              deletePost(post.id).then(onChanged);
            }}
          >
            삭제
          </button>
        )}
      </div>
      <p className="post-content">{post.content}</p>
    </li>
  );
}
