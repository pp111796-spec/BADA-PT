import { useEffect, useRef, useState } from 'react';
import { BOARD_MARKER, ISLANDS } from '../../lib/islandConfig';
import { useSceneStore } from '../../store/useSceneStore';
import './IslandMap.css';

/** island-loop.mp4 원본 해상도 (1280x720) — 메타데이터 로드 전 초기값으로 사용 */
const VIDEO_ASPECT = 1280 / 720;

interface ContentRect {
  left: number;
  top: number;
  width: number;
  height: number;
}

function computeContentRect(containerWidth: number, containerHeight: number, videoAspect: number): ContentRect {
  const containerAspect = containerWidth / containerHeight;
  let width: number;
  let height: number;
  if (videoAspect > containerAspect) {
    width = containerWidth;
    height = containerWidth / videoAspect;
  } else {
    height = containerHeight;
    width = containerHeight * videoAspect;
  }
  return {
    left: (containerWidth - width) / 2,
    top: (containerHeight - height) / 2,
    width,
    height,
  };
}

export default function IslandMap() {
  const selectIsland = useSceneStore((s) => s.selectIsland);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [rect, setRect] = useState<ContentRect | null>(() =>
    typeof window === 'undefined'
      ? null
      : computeContentRect(window.innerWidth, window.innerHeight, VIDEO_ASPECT),
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let videoAspect = VIDEO_ASPECT;

    const update = () => {
      const { clientWidth, clientHeight } = container;
      if (clientWidth === 0 || clientHeight === 0) return;
      setRect(computeContentRect(clientWidth, clientHeight, videoAspect));
    };

    const video = videoRef.current;
    const onLoadedMetadata = () => {
      if (video && video.videoWidth && video.videoHeight) {
        videoAspect = video.videoWidth / video.videoHeight;
      }
      update();
    };
    video?.addEventListener('loadedmetadata', onLoadedMetadata);

    update();
    const observer = new ResizeObserver(update);
    observer.observe(container);

    return () => {
      observer.disconnect();
      video?.removeEventListener('loadedmetadata', onLoadedMetadata);
    };
  }, []);

  return (
    <div className="island-map" ref={containerRef}>
      <video
        ref={videoRef}
        className="island-map-bg"
        src="/videos/island-loop.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {rect && (
        <div
          className="island-map-content"
          style={{ left: rect.left, top: rect.top, width: rect.width, height: rect.height }}
        >
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

          <button
            key={BOARD_MARKER.id}
            className="map-star-button"
            style={{ left: `${BOARD_MARKER.mapPosition[0]}%`, top: `${BOARD_MARKER.mapPosition[1]}%` }}
            onClick={() => selectIsland(BOARD_MARKER.id)}
            aria-label={BOARD_MARKER.label}
          >
            <span className="map-star-halo" aria-hidden="true" />
            <span className="map-star-label">{BOARD_MARKER.label}</span>
          </button>
        </div>
      )}
    </div>
  );
}
