import React, {useState} from 'react'

export default function Test1(props) {
    const [show, setshow] = useState(true)

    const handleClick = () => {setshow(true)}
    const handleClick1 = () => {setshow(false)}

  return (
    <div>
        {show &&
        <h1>
            {props.number}
        </h1>
        }
        <button onClick={handleClick}>show</button>
        <button onClick={handleClick1}>Hide</button>
    </div>
  )
}
