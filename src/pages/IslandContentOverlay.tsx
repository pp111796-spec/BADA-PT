import type { ComponentType } from 'react';
import { useSceneStore } from '../store/useSceneStore';
import type { IslandId } from '../lib/islandConfig';
import ReturnButton from '../components/ReturnButton';
import IntroPage from './islands/IntroPage';
import DeparturePage from './islands/DeparturePage';
import CompassPage from './islands/CompassPage';
import MatrixPage from './islands/MatrixPage';
import LighthousePage from './islands/LighthousePage';
import ForkPage from './islands/ForkPage';
import YangchonPage from './islands/YangchonPage';
import WavePage from './islands/WavePage';
import RootPage from './islands/RootPage';
import ProgressPage from './islands/ProgressPage';
import LimitationsPage from './islands/LimitationsPage';
import './IslandContentOverlay.css';

const PAGE_MAP: Record<IslandId, ComponentType> = {
  intro: IntroPage,
  departure: DeparturePage,
  compass: CompassPage,
  matrix: MatrixPage,
  lighthouse: LighthousePage,
  fork: ForkPage,
  yangchon: YangchonPage,
  wave: WavePage,
  root: RootPage,
  progress: ProgressPage,
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
