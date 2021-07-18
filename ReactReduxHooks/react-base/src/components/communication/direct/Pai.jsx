import React from 'react'
import Filho from './Filho';

const pai = props =>
  <div>
    {/* Três formas de passar as propriedades do pai para os filhos */}
    <Filho {...props}>Maria</Filho>
    <Filho sobrenome={props.sobrenome}>Pedro</Filho>
    <Filho sobrenome="Silva">José</Filho>
  </div>

export default pai;