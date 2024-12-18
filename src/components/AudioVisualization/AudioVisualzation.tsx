import React, { useRef, useMemo, useCallback } from 'react';
import Timeline from 'wavesurfer.js/dist/plugins/timeline.esm.js';
import { useWavesurfer } from '@wavesurfer/react';
import { ArrowDownTrayIcon, PlayIcon, PauseIcon } from '@heroicons/react/20/solid';
import type { RootState } from '../../app/store';
import { useSelector, useDispatch } from 'react-redux';
import {
  addCommercial,
  addCharacter,
  pauseCommercial,
  pauseCharacter,
  DLCommercial,
  DLCharacter,
} from '../../features/counter/counterSlice';
import './AudioVisualization.css';
import { ActionCreator, UnknownAction } from 'redux';

// Define the interface for the props
interface AudioVisualzationProps {
  audioSrc: string;
}

const AudioVisualzation: React.FC<AudioVisualzationProps> = ({ audioSrc }) => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  let functions: ActionCreator<UnknownAction>,
    {} = {
      acom: addCommercial,
      achar: addCharacter,
      apcom: pauseCommercial,
      apchar: pauseCharacter,
      dlcom: DLCommercial,
      dlchar: DLCharacter,
    };

  const handleFunction = (event: any) => {
    console.log('handleFunction:', event.target);
    if (audioSrc === 'commercial') {
      audioSource = '../audio/Ian_Kleinfeld_Commercial_Demo_2024-11-15.mp3';
      if (document.getElementsByClassName('btn-play')) {
        dispatch(addCommercial());
        console.log('dispatch(addCommercial())');
      } else if (document.getElementsByClassName('btn-pause')) {
        dispatch(pauseCommercial());
        console.log('dispatch(pauseCommercial())');
      } else if (document.getElementsByClassName('btn dl')) {
        dispatch(DLCommercial());
        console.log('dispatch(DLCommercial())');
      }
    } else if (audioSrc === 'character') {
      audioSource = '../audio/Ian_Kleinfeld_Character_Game_Animation_Demo_2024-11-15.mp3';
      if (document.getElementsByClassName('btn-play')) {
        dispatch(addCharacter());
      } else if (document.getElementsByClassName('btn-pause')) {
        dispatch(pauseCharacter());
      } else if (document.getElementsByClassName('btn dl')) {
        dispatch(DLCharacter());
      }
    }
  };
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
            className={isPlaying ? 'btn-pause' : 'btn btn-play'}
            onClick={onPlayPause}
            style={{ minWidth: '5em' }}
          >
            {isPlaying ? 'Pause' : 'Play'}
            {isPlaying ? <PauseIcon className='icon-pp' /> : <PlayIcon className='icon-pp' />}
          </button>

          <a
            className='btn dl'
            download
            href={audioSource}
            onClick={handleFunction}
          >
            <ArrowDownTrayIcon className='icon-dl' />
            Download
          </a>
        </div>
      </section>
    </>
  );
};

export default AudioVisualzation;
