import React from 'react';
import ReactDOM from 'react-dom';

// import Primeiro from './componentes/Primeiro'
// import BomDia from './componentes/BomDia'
import {BoaTarde, BoaNoite} from './componentes/Multiplos'

ReactDOM.render(
    <div>
        <BoaTarde nome="Vitor"></BoaTarde>
        <BoaNoite nome="Vitor"></BoaNoite>
    </div>
, document.getElementById('root'))