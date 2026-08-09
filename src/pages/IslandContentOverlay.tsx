import type { ComponentType } from 'react';
import { useSceneStore } from '../store/useSceneStore';
import type { IslandId } from '../lib/islandConfig';
import ReturnButton from '../components/ReturnButton';
import IntroPage from './islands/IntroPage';
import CompassPage from './islands/CompassPage';
import MatrixPage from './islands/MatrixPage';
import LighthousePage from './islands/LighthousePage';
import ProgressPage from './islands/ProgressPage';
import YangchonPage from './islands/YangchonPage';
import YeonmuPage from './islands/YeonmuPage';
import WavePage from './islands/WavePage';
import ResultsPage from './islands/ResultsPage';
import LimitationsPage from './islands/LimitationsPage';
import './IslandContentOverlay.css';

const PAGE_MAP: Record<IslandId, ComponentType> = {
  intro: IntroPage,
  compass: CompassPage,
  matrix: MatrixPage,
  lighthouse: LighthousePage,
  progress: ProgressPage,
  yangchon: YangchonPage,
  yeonmu: YeonmuPage,
  wave: WavePage,
  results: ResultsPage,
  limitations: LimitationsPage,
};

export default function IslandContentOverlay() {
  const activeIsland = useSceneStore((s) => s.activeIsland);
  const returnToIslands = useSceneStore((s) => s.returnToIslands);

  if (!activeIsland) return null;

  const PageComponent = PAGE_MAP[activeIsland];

  return (
    <div className="content-overlay">
      <ReturnButton onClick={returnToIslands} />
      <div className="content-overlay-inner">
        <PageComponent />
      </div>
    </div>
  );
}
