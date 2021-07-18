import "./Contador.css"
import React, { Component} from 'react'
import Display from "./Display"
import PassoForm from "./PassoForm"
import Buttons from "./Buttons"


export default class Contador extends Component {
  state = {
    passo: this.props.passo || 1,
    valor: this.props.valor || 0,
  }

  increment = () =>{
    this.setState({
      valor: this.state.valor + this.state.passo
    })

  }

  decrement = () => {
    this.setState({
      valor: this.state.valor - this.state.passo
    })
  }

  changePasso = (novoPasso) => {
    this.setState({
      passo: novoPasso,
    })
  }

  render() {
    return (
      <div className= "contador">
        <h2>Contador</h2>
        <PassoForm passo={this.state.passo}
          onChangePasso={this.changePasso}></PassoForm>
        <Display valor={this.state.valor}></Display>
        <Buttons onIncrement={this.increment} onDecrement={this.decrement} ></Buttons>
      </div>
    )
  }
};