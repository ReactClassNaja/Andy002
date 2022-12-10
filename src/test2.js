import React from 'react'

export default function Test2(props) {
  return (
    <div>
        {props.arrey.map(arrey =>
        <h1>{arrey}</h1>
        )}
    </div>
  )
}
