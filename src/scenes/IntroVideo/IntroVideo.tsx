import { useEffect, useRef, useState } from 'react';
import { useSceneStore } from '../../store/useSceneStore';
import { INTRO_VIDEO_SRC } from '../../lib/constants';
import './IntroVideo.css';

export default function IntroVideo() {
  const finishIntroVideo = useSceneStore((s) => s.finishIntroVideo);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    // 섬 화면 전환 시 검은 화면 없이 바로 재생되도록 미리 버퍼링해 둔다.
    // 언마운트 시 제거하지 않음: 전환 시점에 지우면 버퍼가 함께 날아갈 수 있다.
    const preload = document.createElement('video');
    preload.src = '/videos/island-loop.mp4';
    preload.preload = 'auto';
    preload.muted = true;
    preload.style.display = 'none';
    document.body.appendChild(preload);
  }, []);

  const toggleSound = () => {
    setMuted((prev) => {
      const next = !prev;
      if (videoRef.current) videoRef.current.muted = next;
      return next;
    });
  };

  return (
    <div className="intro-video-scene">
      {!failed && (
        <video
          ref={videoRef}
          className="intro-video-el"
          src={INTRO_VIDEO_SRC}
          autoPlay
          muted={muted}
          playsInline
          onEnded={finishIntroVideo}
          onError={() => setFailed(true)}
        />
      )}

      {failed && (
        <div className="intro-video-fallback">
          <h1>BADA</h1>
          <p>영상 아직 준비 중이야.</p>
          <button onClick={finishIntroVideo}>시작하기</button>
        </div>
      )}

      {!failed && (
        <div className="intro-video-controls">
          <button className="intro-video-sound" onClick={toggleSound}>
            {muted ? '🔇 소리 켜기' : '🔊 소리 끄기'}
          </button>
          <button className="intro-video-skip" onClick={finishIntroVideo}>
            건너뛰기 →
          </button>
        </div>
      )}
    </div>
  );
}
