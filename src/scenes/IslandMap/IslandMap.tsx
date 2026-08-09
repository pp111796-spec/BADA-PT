import { ISLANDS } from '../../lib/islandConfig';
import { useSceneStore } from '../../store/useSceneStore';
import './IslandMap.css';

export default function IslandMap() {
  const selectIsland = useSceneStore((s) => s.selectIsland);

  return (
    <div className="island-map">
      <video
        className="island-map-bg"
        src="/videos/island-loop.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <header className="map-header">
        <h1 className="map-header-title">
          셀럽이 되고 싶어? <em>SEL-UP!</em>
        </h1>
      </header>

      {ISLANDS.map((island) => (
        <button
          key={island.id}
          className="map-tag"
          style={{ left: `${island.mapPosition[0]}%`, top: `${island.mapPosition[1]}%` }}
          onClick={() => selectIsland(island.id)}
        >
          {island.label}
        </button>
      ))}
    </div>
  );
}
