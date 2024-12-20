import React, { useRef, useMemo, useCallback } from 'react';
import Timeline from 'wavesurfer.js/dist/plugins/timeline.esm.js';
import { useWavesurfer } from '@wavesurfer/react';
import { ArrowDownTrayIcon, PlayIcon, PauseIcon } from '@heroicons/react/20/solid';
// import type { RootState } from '../../app/store';
import {  useDispatch } from 'react-redux';
import {
  addCommercial,
  addCharacter,
  pauseCommercial,
  pauseCharacter,
  DLCommercial,
  DLCharacter,
} from '../../features/counter/counterSlice';
import './AudioVisualization.css';
// import { ActionCreator, UnknownAction } from 'redux';

// Define the interface for the props
interface AudioVisualzationProps {
  audioSrc: string;
}

const AudioVisualzation: React.FC<AudioVisualzationProps> = ({ audioSrc }) => {
  // const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  // let functions: ActionCreator<UnknownAction>,
  //   {} = {
  //     acom: addCommercial,
  //     achar: addCharacter,
  //     apcom: pauseCommercial,
  //     apchar: pauseCharacter,
  //     dlcom: DLCommercial,
  //     dlchar: DLCharacter,
  //   };

  const handleDownload = (event: any) => {
    console.log('handleDownload:', event.target.id);
    const pdfUrl = '/Ian_Kleinfeld_Acting_resume_2024.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = pdfUrl; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFunction = (event: any) => {
    console.log('handleFunction:', event.target.id);
    event.preventDefault();
    if (audioSrc === 'commercial') {
      audioSource = '../audio/Ian_Kleinfeld_Commercial_Demo_2024-11-15.mp3';
      console.log(event.target.id);
      if (event.target.id === 'btn-play') {
        dispatch(addCommercial());
        console.log('dispatch(addCommercial())');
      } else if (event.target.id === 'btn-pause') {
        dispatch(pauseCommercial());
        console.log('dispatch(pauseCommercial())');
      } else if (event.target.id === 'download') {
        dispatch(DLCommercial());
        handleDownload(event);
        console.log('dispatch(DLCommercial())');
      }
    } else if (audioSrc === 'character') {
      audioSource = '../audio/Ian_Kleinfeld_Character_Game_Animation_Demo_2024-11-15.mp3';
      if (event.target.id === 'btn-play') {
        dispatch(addCharacter());
      } else if (event.target.id === 'btn-pause') {
        dispatch(pauseCharacter());
      } else if (event.target.id === 'download') {
        dispatch(DLCharacter());
        handleDownload(event);
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

  const onPlayPause = useCallback(
    (event: any) => {
      wavesurfer && wavesurfer.playPause();
      handleFunction(event);
    },
    [wavesurfer]
  );

  return (
    <>
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
            {isPlaying ? 'Pause' : 'Play'}
            {isPlaying ? <PauseIcon className='icon-pp' /> : <PlayIcon className='icon-pp' />}
          </button>

          <a
            className='btn dl'
            id='download'
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
