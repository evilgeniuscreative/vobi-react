import React, { useRef, useMemo, useCallback } from 'react';
// import { createRoot } from 'react-dom/client'
import Timeline from 'wavesurfer.js/dist/plugins/timeline.esm.js';
import { useWavesurfer } from '@wavesurfer/react';
import './AudioVisualization.css';
// import WaveSurfer from 'wavesurfer.js';

// Define the interface for the props
interface AudioVisualzationProps {
  audioSrc: string;
}

const AudioVisualzation: React.FC<AudioVisualzationProps> = ({ audioSrc }) => {
  let audioSource: string = audioSrc;
  if (audioSrc === 'commercial') {
    audioSource = '../audio/Ian_Kleinfeld_Commercial_Demo_2024-11-15.mp3';
  } else if (audioSrc === 'character') {
    audioSource = '../audio/Ian_Kleinfeld_Character_Game_Animation_Demo_2024-11-15.mp3';
  }

  const containerRef = useRef(null);
  const formatTime = (seconds: number) =>
    [seconds / 60, seconds % 60].map((v) => `0${Math.floor(v)}`.slice(-2)).join(':');

  const { wavesurfer, isPlaying, currentTime } = useWavesurfer({
    container: containerRef,
    height: 100,
    waveColor: '#ffffff',
    progressColor: 'rgb(129, 131, 240)',
    barWidth: 2,
    url: audioSource,
    plugins: useMemo(() => [Timeline.create()], []),
  });

  const onPlayPause = useCallback(() => {
    wavesurfer && wavesurfer.playPause();
  }, [wavesurfer]);

  return (
    <>
      <section className='demo'>
        <div ref={containerRef} />
        <p className='timer'>Current time: {formatTime(currentTime)}</p>
        <div className='btn-control'>
          <button
            className={isPlaying ? 'btn-pause' : 'btn'}
            onClick={onPlayPause}
            style={{ minWidth: '5em' }}
          >
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <a
            className='btn dl'
            download
            href={audioSource}
          >
            Download
          </a>
        </div>
      </section>
    </>
  );
};

export default AudioVisualzation;
