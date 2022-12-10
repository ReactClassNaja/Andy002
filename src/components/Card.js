import React from 'react'
import '../style/Card.css'

export default function Card() {

  const foods = [
    {id: 1, name: "Spaghetti", cal: 40, time: 6, person: 3, img: './Spaghetti.png'},
    {id: 2, name: "Kapao", cal: 30, time: 5, person: 1, img: './kapao.png'},
    {id: 3, name: "Burger", cal: 35, time: 6, person: 3, img: './burger.jpeg'},
    {id: 4, name: "Fried rice", cal: 30, time: 7, person: 1, img: './friedrice.png'},
  ]

  // const arr =[1,2,3,4]

  return (
    <div className='container'>
      {foods.map(row => 
      <div className='box' key={row.id}>
        <div className='image'>
          <img src={row.img} width='70%' height='100%'/>
        </div>
        <div>
          <h3>{row.name}</h3>
          <p>{row.cal} calories</p>
        </div>
        <div className='cardFooter'>
          <div style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}>
            <div>Time</div>
            <div>{row.time} mins</div>
          </div>
          <div style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            textAlign: "end",
          }}>
            <div>Portion</div>
            <div>{row.person} persons</div>
          </div>
        </div>
      </div>
      )}
    </div>
  )
}
