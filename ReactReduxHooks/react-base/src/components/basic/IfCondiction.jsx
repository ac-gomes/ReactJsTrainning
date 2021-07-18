import React from 'react'
import Ifcondictional from './If.jsx'

const condictional = props => {

  return (
    <div>
      <h2>O número {props.numero} é </h2>
      <Ifcondictional test={props.numero % 2 === 0}>
        <span>Par</span>
      </Ifcondictional>
      <Ifcondictional test={props.numero % 2 === 1}>
        <span>Ímpar</span>
      </Ifcondictional>
    </div>
  )
}

export default condictional;