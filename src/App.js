import React from 'react';
import photo from './Img/keqing.png';
import './style.css';

export default function App() {
  return (
    <div className='nav0'>
      <div className='nav00'>
      <div className='nav1'>
        <div className='nav2'>
          WISTIA
        </div>
        <div className='nav3'>
          Product
        </div>
        <div className='nav3'>
          Learning center
        </div>
        <div className='nav3'>
          Podcast&Series
        </div>
        <div className='nav3'>
          About
        </div>
        <div className='nav4'></div>
        <div className='nav3'>
          <button className='button1'>Login</button>
        </div>
        <div className='nav3'>
          <button className='button2'>Get started</button>
        </div>
      </div>
      <div className='nav0'>
        <div className='nav5'>
          <div style={{fontWeight: 'bold'}}>
            Let your video do the work
          </div>
          <div style={{fontSize: '29px'}}>
            Video marketing software that makes it easy to find, engage, and grow your audience.
          </div>
          <div className='nav6'>
            <div>
              <button className='button3'>Try for free</button>
            </div>
            <div>
              <button className='button4'>Watch video</button>
            </div>
          </div>
        </div>
        <div className='nav5'>
          <img src={photo} alt="" width={"600px"}/>
        </div>
      </div>
      </div>
    </div>
  )
}
