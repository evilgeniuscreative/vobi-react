import React, { useRef, useMemo, useCallback } from 'react';
import Timeline from 'wavesurfer.js/dist/plugins/timeline.esm.js';
import { useWavesurfer } from '@wavesurfer/react';
import { ArrowDownTrayIcon, PlayIcon, PauseIcon } from '@heroicons/react/20/solid';

import './AudioVisualization.css';

// Define the interface for the props
interface AudioVisualzationProps {
  audioSrc: string;
}

const audioMap = {
  commercial: '../audio/Ian_Kleinfeld_Commercial_Demo_2024-11-15.mp3',
  character: '../audio/Ian_Kleinfeld_Character_Game_Animation_Demo_2024-11-15.mp3',
  billnye: '../audio/Ian_Kleinfeld_Bill_Nye_Soundalike_2024-11-15.mp3',
  bcbs1: '../audio/Ian_Kleinfeld_Sports_Theme_2024-11-15.mp3',
  bcbs2: '../audio/Ian_Kleinfeld_BCBSNC_2024-11-15.mp3',
  threshold: '../audio/Ian_Kleinfeld_Threshold_2024-11-15.mp3',
};

const AudioVisualzation: React.FC<AudioVisualzationProps> = ({ audioSrc }) => {
  const containerRef = useRef(null);

  const formatTime = (seconds: number) =>
    [seconds / 60, seconds % 60].map((v) => `0${Math.floor(v)}`.slice(-2)).join(':');

  const audioSource = audioMap[audioSrc as keyof typeof audioMap];

  const { wavesurfer, isPlaying, currentTime } = useWavesurfer({
    container: containerRef,
    height: 100,
    waveColor: '#ffffff',
    progressColor: 'rgb(129, 131, 240)',
    barWidth: 2,
    url: audioSource,
    plugins: useMemo(() => [Timeline.create()], [audioSource]),
  });

  const onPlayPause = useCallback(() => {
    wavesurfer && wavesurfer.playPause();
  }, [wavesurfer]);

  return (
    <section className='demo'>
      <div ref={containerRef} />
      <p className='timer'>Current time: {formatTime(currentTime)}</p>
      <div className='btn-control'>
        <button
          className='btn'
          id={isPlaying ? 'btn-pause' : 'btn-play'}
          onClick={onPlayPause}
          style={{ minWidth: '5em' }}
        >
          <span className='icon-btn'>
            {isPlaying ? <PauseIcon className='icon-pp' /> : <PlayIcon className='icon-pp' />}
          </span>
          <span className='rl-text'> {isPlaying ? 'Pause' : 'Play'}</span>
        </button>

        <a
          className='btn dl'
          id={audioSrc}
          href={audioSource}
          download
        >
          <span className='icon-dl'>
            <ArrowDownTrayIcon className='icon-dl' />
          </span>
          <span className='rl-text'>Download</span>
        </a>
      </div>
    </section>
  );
};

export default AudioVisualzation;
