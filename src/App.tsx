import { useEffect } from 'react';
import { useSceneStore } from './store/useSceneStore';
import IntroVideo from './scenes/IntroVideo/IntroVideo';
import IslandMap from './scenes/IslandMap/IslandMap';
import IslandContentOverlay from './pages/IslandContentOverlay';
import { clearVisitedIslands } from './lib/visitedIslands';
import './App.css';

export default function App() {
  const scene = useSceneStore((s) => s.scene);

  useEffect(() => {
    // 페이지 새로고침 시 방문 기록 초기화
    clearVisitedIslands();
  }, []);

  return (
    <div className="app-root">
      {scene === 'intro-video' && <IntroVideo />}
      {scene === 'islands' && (
        <>
          <IslandMap />
          <IslandContentOverlay />
        </>
      )}
    </div>
  );
}
