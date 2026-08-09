export interface BoardPost {
  id: string;
  content: string;
  authorLabel: string;
  authorToken: string;
  createdAt: number;
}

const BLOB_URL = 'https://jsonblob.com/api/jsonBlob/019fe749-0daf-74db-b549-7917c5abf024';
const SESSION_KEY = 'bada_board_session_token';
const LABEL_KEY = 'bada_board_session_label';

interface BlobShape {
  posts: BoardPost[];
}

async function readBlob(): Promise<BoardPost[]> {
  const res = await fetch(BLOB_URL, { headers: { Accept: 'application/json' } });
  if (!res.ok) throw new Error(`board fetch failed: ${res.status}`);
  const data = (await res.json()) as BlobShape;
  return data.posts ?? [];
}

async function writeBlob(posts: BoardPost[]): Promise<void> {
  const res = await fetch(BLOB_URL, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ posts }),
  });
  if (!res.ok) throw new Error(`board save failed: ${res.status}`);
}

export function getSessionToken(): string {
  let token = localStorage.getItem(SESSION_KEY);
  if (!token) {
    token = crypto.randomUUID();
    localStorage.setItem(SESSION_KEY, token);
  }
  return token;
}

const NICKNAME_ADJECTIVES = [
  '신비로운',
  '반짝이는',
  '느긋한',
  '용감한',
  '엉뚱한',
  '포근한',
  '씩씩한',
  '말랑한',
  '수줍은',
  '활기찬',
  '조용한',
  '엄청난',
  '호기심많은',
  '여유로운',
  '통통튀는',
];

const NICKNAME_ANIMALS = [
  '돌고래',
  '거북이',
  '불가사리',
  '파도',
  '산호초',
  '갈매기',
  '고래',
  '해파리',
  '조개',
  '등대지기',
  '섬여우',
  '선장',
  '항해사',
  '무지개',
  '오징어',
];

function getSessionLabel(): string {
  let label = localStorage.getItem(LABEL_KEY);
  if (!label) {
    const adj = NICKNAME_ADJECTIVES[Math.floor(Math.random() * NICKNAME_ADJECTIVES.length)];
    const animal = NICKNAME_ANIMALS[Math.floor(Math.random() * NICKNAME_ANIMALS.length)];
    const num = Math.floor(10 + Math.random() * 90);
    label = `${adj} ${animal} ${num}`;
    localStorage.setItem(LABEL_KEY, label);
  }
  return label;
}

export async function getPosts(): Promise<BoardPost[]> {
  const posts = await readBlob();
  return posts.sort((a, b) => b.createdAt - a.createdAt);
}

export async function addPost(content: string): Promise<BoardPost> {
  const post: BoardPost = {
    id: crypto.randomUUID(),
    content: content.trim().slice(0, 500),
    authorLabel: getSessionLabel(),
    authorToken: getSessionToken(),
    createdAt: Date.now(),
  };
  const posts = await readBlob();
  posts.push(post);
  await writeBlob(posts);
  return post;
}

export async function deletePost(id: string): Promise<void> {
  const token = getSessionToken();
  const posts = (await readBlob()).filter((p) => !(p.id === id && p.authorToken === token));
  await writeBlob(posts);
}

export function canDelete(post: BoardPost): boolean {
  return post.authorToken === getSessionToken();
}
