import React from 'react'

const Buttons = props =>{

  return (
    <div>
      <button onClick={props.onIncrement}> + </button>
      <button onClick={props.onDecrement}> - </button>
  </div>
  )
}

export default Buttons;