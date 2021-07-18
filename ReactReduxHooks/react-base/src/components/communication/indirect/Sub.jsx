import React from 'react';

const Sub = props => {

  return (
    <div>
      <button onClick={() => {
        props.onClick(Math.random(),"Gerado");
      }}>Alterar</button>
    </div>
  )
}


  export default Sub;