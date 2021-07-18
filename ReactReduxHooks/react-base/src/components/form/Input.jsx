import React, {useState} from 'react'

const Input = props =>{
  const [nome, setNome] = useState('Pedro');

  return (
    <>
      <h2>{nome}</h2>
      <input
        type="text"
        value={nome}
        onChange={e =>
          setNome(e.target.value)
        }/>
    </>
  )
}

export default Input;

/* Componentes Controlados (Controlled Components)
 Em HTML, elementos de formulário como <input>, <textarea> e <select>
 normalmente mantêm seu próprio estado
 e o atualiza baseado na entrada do usuário. Em React,
 o estado mutável é normalmente mantido na propriedade state dos componentes
 e atualizado apenas com setState().
  MEU COMENTARIO: a interface no React
//se modifica/atualiza apartir do atualizações/alterações no estado */