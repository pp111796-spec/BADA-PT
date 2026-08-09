import { useSceneStore } from './store/useSceneStore';
import IntroVideo from './scenes/IntroVideo/IntroVideo';
import IslandMap from './scenes/IslandMap/IslandMap';
import IslandContentOverlay from './pages/IslandContentOverlay';
import './App.css';

export default function App() {
  const scene = useSceneStore((s) => s.scene);

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
