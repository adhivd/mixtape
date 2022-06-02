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
import album from './img/1.png';



function App() {

  let audioFiles = [
    {
      src: cherrywine,
      title: "cherry wine",
    },
    {
      src: bh42,
      title: "BH 42",
    },
    {
      src: madness,
      title: "madness",
    },
    {
      src: tamiko,
      title: "tamiko jones",
    },
    {
      src: hangover,
      title: "hangover",
    },
  ];
  
  //inside Component render()
  
    
  return (
    <div className="App">
      <header className="App-header">
        <img src={album} className="App-logo" alt="logo" />
        <AudioPlayer
        audioFiles={audioFiles}/>
        <h1>all good, all gone</h1>
        <p>cherry wine</p>
        <p>BH 42</p>
        <p>madness</p>
        <p>tamiko jones</p>
        <p>hangover</p>
        <br />
        <a href="https://docs.google.com/document/d/1XxNqRT-Bd8EKvdTNpKt2i2Dfmunx1-usEguehjS_XME/edit#heading=h.bg9qanc2ghfg" target="_blank" >lyrics doc</a>

      </header>

    
    </div>
  );
}

export default App;
