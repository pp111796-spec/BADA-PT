const KEY = 'bada_visited_islands';

export function getVisitedIslands(): Set<string> {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? new Set(JSON.parse(raw) as string[]) : new Set();
  } catch {
    return new Set();
  }
}

export function markIslandVisited(id: string): void {
  if (id === 'board') return; // 익명게시판은 방문 표시하지 않음
  const visited = getVisitedIslands();
  visited.add(id);
  localStorage.setItem(KEY, JSON.stringify([...visited]));
}

export function clearVisitedIslands(): void {
  localStorage.removeItem(KEY);
}
