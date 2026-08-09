import { useState } from 'react';
import { BOARD_MARKER, ISLANDS, type IslandId } from '../../lib/islandConfig';
import { useSceneStore } from '../../store/useSceneStore';
import { getVisitedIslands, markIslandVisited } from '../../lib/visitedIslands';
import './IslandMap.css';

const POP_BASE_DELAY = 0.2;
const POP_STAGGER = 0.13;

export default function IslandMap() {
  const selectIsland = useSceneStore((s) => s.selectIsland);
  const [visited, setVisited] = useState<Set<string>>(() => getVisitedIslands());

  const handleSelect = (id: IslandId) => {
    markIslandVisited(id);
    setVisited((prev) => new Set(prev).add(id));
    selectIsland(id);
  };

  return (
    <div className="island-map">
      <video
        className="island-map-bg"
        src="/videos/island-loop.mp4"
        poster="/videos/island-poster.jpg"
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

      {ISLANDS.map((island, index) => (
        <button
          key={island.id}
          className="map-tag"
          style={{ left: `${island.mapPosition[0]}%`, top: `${island.mapPosition[1]}%` }}
          onClick={() => handleSelect(island.id)}
        >
          <span
            className={`map-tag-pill${visited.has(island.id) ? ' map-tag-pill--visited' : ''}`}
            style={{ animationDelay: `${POP_BASE_DELAY + index * POP_STAGGER}s` }}
          >
            {island.label}
          </span>
        </button>
      ))}

      <button
        key={BOARD_MARKER.id}
        className="map-tag"
        style={{ left: `${BOARD_MARKER.mapPosition[0]}%`, top: `${BOARD_MARKER.mapPosition[1]}%` }}
        onClick={() => handleSelect(BOARD_MARKER.id)}
      >
        <span
          className={`map-tag-pill${visited.has(BOARD_MARKER.id) ? ' map-tag-pill--visited' : ''}`}
          style={{ animationDelay: `${POP_BASE_DELAY + ISLANDS.length * POP_STAGGER}s` }}
        >
          {BOARD_MARKER.label}
        </span>
      </button>
    </div>
  );
}
