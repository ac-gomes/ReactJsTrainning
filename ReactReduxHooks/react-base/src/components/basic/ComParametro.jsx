import React from 'react'

const props = props =>
//props é somente leitura.
  <>
    <h3>{props.titulo}</h3>
    <p>{props.subtitulo}</p>
  </>

export default props;