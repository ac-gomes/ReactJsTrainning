import React from 'react'

const PassoForm = props =>{

  return (
    <div>
      <label for="passoInput">Passo: </label>
      <input id="passoInput" type="number"
        value={props.passo}
        onChange={ e => props.onChangePasso(+e.target.value)}/>
    </div>
  )
}

export default PassoForm;