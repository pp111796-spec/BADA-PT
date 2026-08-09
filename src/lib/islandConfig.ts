export type IslandId =
  | 'intro'
  | 'departure'
  | 'compass'
  | 'matrix'
  | 'lighthouse'
  | 'fork'
  | 'yangchon'
  | 'wave'
  | 'root'
  | 'progress'
  | 'limitations';

export interface IslandConfig {
  id: IslandId;
  /** 섬 지도 이미지 위 위치 (가로%, 세로%) — 섬 하나당 이름표 하나 */
  mapPosition: [number, number];
  label: string;
}

export const ISLANDS: IslandConfig[] = [
  { id: 'intro', mapPosition: [28.1, 19.3], label: '바다 소개' },
  { id: 'yangchon', mapPosition: [24.2, 50.6], label: '양촌초 프로그램' },
  { id: 'wave', mapPosition: [77.0, 19.3], label: '계룡보건소 프로그램' },
  { id: 'limitations', mapPosition: [78.1, 51.9], label: '한계 및 보완점' },
  { id: 'departure', mapPosition: [12.5, 35.3], label: '연구의 시작' },
  { id: 'progress', mapPosition: [32.8, 33.2], label: '바다 진행 상황' },
  { id: 'compass', mapPosition: [52.3, 33.9], label: '설계 원리' },
  { id: 'lighthouse', mapPosition: [50.8, 63.8], label: 'AI 설계 절차' },
  { id: 'fork', mapPosition: [68.8, 35.3], label: '맞춤형 결과 비교' },
  { id: 'root', mapPosition: [62.1, 15.8], label: '기법의 출처' },
  { id: 'matrix', mapPosition: [89.1, 35.3], label: '개입 기법 매트릭스' },
];
