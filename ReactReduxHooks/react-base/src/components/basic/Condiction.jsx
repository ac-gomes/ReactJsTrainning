import React from 'react'

const condiction = props => {

  return (
    <div>
      <h2>O número {props.numero} é </h2>
        {props.numero % 2 === 0 ?
          <span>Par</span>
          : <span>Ímpar</span>
        }
    </div>
  )
}

export default condiction;