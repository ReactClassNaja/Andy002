import React from 'react'
import Navbar from './components/Navbar'
import Content from './components/Content'
import Card from './components/Card'
import './style/style.css'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Content/>
      <Card/>
    </div>
  )
}
