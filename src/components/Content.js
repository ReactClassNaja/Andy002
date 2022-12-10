import React from 'react'
import '../style/Content.css'

export default function Content() {
  return (
    <div className='contentRoot'>
      <div className='header'>
        <p>Simple and Tasty Recipes</p>
      </div>
      <div className='paragraph'>
        <p>
          Food is a basic necessity for survival and also the key to a healthy life.
          Without regular healthy meals children struggle to go to school, carers struggle to work and communities are left battling to survive.
        </p>
      </div>
      <div className='avatar'>
        <img src='./myself1.jpeg' width='50px'/>
        <p>by Phonesavanh Keonouchanh</p>
      </div>
    </div>
  )
}
