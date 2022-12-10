import React, {useState} from 'react'
import photo from './Img/food.jpg';
import logo from './Img/logo.png';
import profile from './Img/myself1.jpeg'
import './style.css';

export default function App() {

  const food = [
    {id: 1, menu: "Spaghetti", price: "25.000 Kip", img: './Spaghetti.png'},
    {id: 2, menu: "Kapao", price: "30.000 Kip", img: './kapao.png'},
    {id: 3, menu: "Noodles", price: "25.000 Kip", img: './noodle.png'},
    {id: 4, menu: "Fried rice", price: "25.000 Kip", img: './friedrice.png'},
  ]
  return (
    <div style={{ width: '100%', backgroundImage: `url(${photo})`, height:'100vh'}}>

      <div className='nav0'>
      <div>
        <img src={logo} width='30px' style={{padding:'0px 15px'}} />
      </div>
      <div>
        COOKING
      </div>
      </div>

      <div className='nav1'>
        <h1>Simple and Tasty Recipes</h1>
      </div>
      <div className='nav2'>
        Food is a basic necessity for survival and also the key to a healthy life.
        <br/>
        Without regular healthy meals children struggle to go to school, carers struggle to work and communities are left battling to survive.
        <br/>
        Here at RGW, we have identified over 100 refugee families and their children to be part of a food protection program.
        <br/>
        he families are currently living in tent cities in Adana Turkey.
      </div>

      <div className='nav4'>
        <div>
        <img className='nav3' src={profile} alt=''/>
        </div>
        <div className='nav5'></div>
        <div>
          By Phonesavanh Keonouchanh
        </div>
      </div>

      <div style={{display: "flex"}}>
        {food.map(row =>
          <div key={row.id} className='nav6'>
            <img src={row.img} width={"80%"}/>
            <p>{row.menu}</p>
            <p>{row.price}</p>
          </div>
          )}
      </div>
    </div>
  )
}
