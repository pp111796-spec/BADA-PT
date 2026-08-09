import { create } from 'zustand';
import type { IslandId } from '../lib/islandConfig';

export type SceneName = 'intro-video' | 'islands';

interface SceneState {
  scene: SceneName;
  activeIsland: IslandId | null;

  finishIntroVideo: () => void;
  selectIsland: (id: IslandId) => void;
  returnToIslands: () => void;
}

export const useSceneStore = create<SceneState>((set) => ({
  scene: 'intro-video',
  activeIsland: null,

  finishIntroVideo: () => set({ scene: 'islands' }),
  selectIsland: (id) => set({ activeIsland: id }),
  returnToIslands: () => set({ activeIsland: null }),
}));
