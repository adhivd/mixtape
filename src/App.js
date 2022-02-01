import logo from './logo.svg';
import { useState, useCallback } from 'react';

import './App.css';
import AudioPlayer from 'react-modular-audio-player';
import bh42 from './audio/bh42.mp3';
import cherrywine from './audio/cherrywine.mp3'
import dawg from './audio/dawg.mp3'
import madness from './audio/madness.mp3'
import hangover from './audio/hangover.mp3'
import laid from './audio/laid.mp3'
import tamiko from './audio/tamiko.mp3'

import cover from './img/tck.png';


function App() {

  let audioFiles = [
    {
      src: cherrywine,
      title: "cherry wine",
    },
    {
      src: bh42,
      title: "BH 42 take 1",
    },
    {
      src: dawg,
      title: "dawg fuck you",
    },
    {
      src: madness,
      title: "madness for your eyes",
    },
    {
      src: hangover,
      title: "hangover buncha ideas",
    },
    {
      src: laid,
      title: "laid back melody but in jazz",
    },
    {
      src: tamiko,
      title: "tamiko jones",
    },
  ];
  
  //inside Component render()
  
    
  return (
    <div className="App">
      <header className="App-header">
        <img src={cover} className="App-logo" alt="logo" />
        <AudioPlayer
        audioFiles={audioFiles}/>
        <h1>todo: album name</h1>
        <p>cherry wine</p>
        <p>bh42</p>
        <p>dawg fuck you</p>
        <p>madness for your eyes</p>
        <p>hangover buncha ideas</p>
        <p>laid back melody but in jazz</p>
        <p>tamiko jones</p>
      </header>

    
    </div>
  );
}

export default App;
