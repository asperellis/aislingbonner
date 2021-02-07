import React from "react";
import AudioPlayer from './AudioPlayer.js';
import {render} from "react-dom";
import 'normalize.css';
import './index.css';

import Instagram from './images/instagram.svg';
import TiktokIcon from './images/tiktok.svg';
import TwitterIcon from './images/twitter.svg';

function App() {
    return (
      <div className="app">
        <div className='content'>
          <header>
            <h1 className='name'>
              <span className='first-name'>AISLING</span><br/>BONNER
            </h1>
          </header>
          <nav className="nav">
            <a href="http://www.aislingbonner.com/resume.pdf" className="nav-link">RESUME</a>
            <a href="http://www.aislingbonner.com/" className="nav-link">PODCAST</a>
            <a href="mailto:aislingbonner1@gmail.com?subject=Hey Aisling!" className="nav-link">CONTACT</a>
          </nav>
          <div className='about'>
            <h2 className='subheader'>This is just a demo.  </h2>
            <p>
              But you deserve a killer site and I wanted to set you up with a starter. We can work together to build something you love and can use for job hunts if you want. Feel free to scrap this design, I'm a bit rusty when it comes to that. I love you qt. - Alex
            </p>
          </div>
          <AudioPlayer className="demo-player" audiourl="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/shoptalk-clip.mp3" />
          <aside className="social">
            <a href="https://www.instagram.com/aisling_bon" className="social-link" target="_blank"><Instagram /></a>
            <a href="https://twitter.com/aisling_bon" className="social-link" target="_blank"><TwitterIcon /></a>
            <a href="https://www.tiktok.com/@aisling_bon" className="social-link" target="_blank"><TiktokIcon /></a>
          </aside>
        </div>
      </div>
    );
}

render(<App />, document.getElementById("root"));
