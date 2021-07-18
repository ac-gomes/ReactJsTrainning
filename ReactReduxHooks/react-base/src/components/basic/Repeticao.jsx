import React from 'react';

import products from '../../data/products'
const repeticao =  props => {

  function getProductsListItem() {
    return products.map(prod =>{
      return <li key={prod.id}>
        {prod.name} - R$ {prod.price}
      </li>
    })
  }


  return (
    <div>
      <h2>Repetição</h2>
        <ul>
          {getProductsListItem()}
        </ul>
    </div>
  )
}

export default repeticao;