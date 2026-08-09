export type IslandId =
  | 'intro'
  | 'compass'
  | 'matrix'
  | 'lighthouse'
  | 'progress'
  | 'yangchon'
  | 'yeonmu'
  | 'wave'
  | 'results'
  | 'limitations'
  | 'board';

export interface IslandConfig {
  id: IslandId;
  /** 섬 지도 이미지 위 위치 (가로%, 세로%) — 섬 하나당 이름표 하나 */
  mapPosition: [number, number];
  label: string;
}

export const ISLANDS: IslandConfig[] = [
  { id: 'intro', mapPosition: [50.8, 63.8], label: '연구 시작 및 바다 소개' },
  { id: 'compass', mapPosition: [24.2, 50.6], label: '설계 원리' },
  { id: 'matrix', mapPosition: [12.5, 35.3], label: '개입 기법 매트릭스' },
  { id: 'lighthouse', mapPosition: [28.1, 19.3], label: 'AI 설계 절차' },
  { id: 'progress', mapPosition: [32.8, 33.2], label: '바다 진행 상황' },
  { id: 'yangchon', mapPosition: [52.3, 33.9], label: '양촌초 프로그램' },
  { id: 'yeonmu', mapPosition: [78.1, 51.9], label: '연무초 프로그램' },
  { id: 'wave', mapPosition: [89.1, 35.3], label: '계룡보건소 프로그램' },
  { id: 'results', mapPosition: [77.0, 19.3], label: '집단 결과 비교 및 통계' },
  { id: 'limitations', mapPosition: [68.8, 35.3], label: '한계 및 보완점' },
];

/** 화면 우하단 반짝이는 별 위 마커 — 익명 게시판으로 연결 */
export const BOARD_MARKER: IslandConfig = {
  id: 'board',
  mapPosition: [94.1, 81.9],
  label: '익명 게시판',
};
