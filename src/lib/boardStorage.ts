export interface BoardPost {
  id: string;
  content: string;
  authorLabel: string;
  authorToken: string;
  createdAt: number;
}

const POSTS_KEY = 'bada_board_posts_v1';
const SESSION_KEY = 'bada_board_session_token';
const LABEL_KEY = 'bada_board_session_label';

function readPosts(): BoardPost[] {
  try {
    const raw = localStorage.getItem(POSTS_KEY);
    return raw ? (JSON.parse(raw) as BoardPost[]) : [];
  } catch {
    return [];
  }
}

function writePosts(posts: BoardPost[]): void {
  localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
}

export function getSessionToken(): string {
  let token = localStorage.getItem(SESSION_KEY);
  if (!token) {
    token = crypto.randomUUID();
    localStorage.setItem(SESSION_KEY, token);
  }
  return token;
}

function getSessionLabel(): string {
  let label = localStorage.getItem(LABEL_KEY);
  if (!label) {
    label = `익명${Math.floor(1000 + Math.random() * 9000)}`;
    localStorage.setItem(LABEL_KEY, label);
  }
  return label;
}

export function getPosts(): BoardPost[] {
  return readPosts().sort((a, b) => b.createdAt - a.createdAt);
}

export function addPost(content: string): BoardPost {
  const post: BoardPost = {
    id: crypto.randomUUID(),
    content: content.trim().slice(0, 500),
    authorLabel: getSessionLabel(),
    authorToken: getSessionToken(),
    createdAt: Date.now(),
  };
  const posts = readPosts();
  posts.push(post);
  writePosts(posts);
  return post;
}

export function deletePost(id: string): void {
  const token = getSessionToken();
  const posts = readPosts().filter((p) => !(p.id === id && p.authorToken === token));
  writePosts(posts);
}

export function canDelete(post: BoardPost): boolean {
  return post.authorToken === getSessionToken();
}
