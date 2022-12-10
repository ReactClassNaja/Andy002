import React from 'react'
import '../style/Navbar.css'

export default function Navbar() {
  return (
    <div className='root'>
        <div className='logo'>
            <img src='./logo.png' width={60}/>
        </div>
        <div className='text'>
            <h1>COOKING</h1>
        </div>
    </div>
  )
}
