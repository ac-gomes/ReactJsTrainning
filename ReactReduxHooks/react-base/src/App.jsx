import './App.css'
import React from 'react';

import Header from './components/layout/Heade';
import Primeiro from './components/basic/Primeiro'
import ComParametro  from './components/basic/ComParametro'
import ComFilhos from './components/basic/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basic/Repeticao';
import Condiction from './components/basic/Condiction';
import IfCondiction from './components/basic/IfCondiction';
import Pai from './components/communication/direct/Pai';
import Super from './components/communication/indirect/Super';
import Input from './components/form/Input';
import Contador from './components/contador/Contador';


const App = (props) => (
  <div className="App">
    <Header titulo="Fundamentos React"/>

    <div className="Cards">
      <Card titulo=" #10 - Contador (Class Component)" color="#293e6a">
        <Contador passo={10} valor={100}></Contador>
      </Card>
      <Card titulo=" #09 - Input" color="#9c0f5f">
        <Input/>
      </Card>
      <Card titulo=" #08 - Comunicação Indireta" color="#000">
        <Super></Super>
      </Card>
      <Card titulo=" #07 - Comunicação Direta" color="#4298b5">
        <Pai sobrenome="Freitas"></Pai>
      </Card>
      <Card titulo=" #06 - Condicional if()" color="#fa6900">
        <ComFilhos >
        <IfCondiction numero={15}></IfCondiction>
        </ComFilhos >
      </Card>
      <Card titulo=" #05 - Condicional Ternário" color="#008080">
        <ComFilhos >
        <Condiction numero={10}></Condiction>
        </ComFilhos >
      </Card>
      <Card titulo=" #04 - Repetição" color="#40E0D0">
        <ComFilhos >
          <Repeticao></Repeticao>
        </ComFilhos >
      </Card>
      <Card titulo=" #03 - Componente Com Filhos" color="#9FE2BF">
        <ComFilhos >
          <ul>
            <li>Zé</li>
            <li>Mario</li>
            <li>João</li>
            <li>Andre</li>
          </ul>
        </ComFilhos >
      </Card>
      <Card titulo="#02 - Componente Com Parametro" color="#6495ED">
        <ComParametro
          titulo="Esse é o titulo"
          subtitulo="Esse é o subtitulo"
        />
      </Card>
      <Card titulo="#01 - Primeiro Component" color="#FF7F50">
        <Primeiro />
      </Card>
    </div>
  </div>
);

export default App;