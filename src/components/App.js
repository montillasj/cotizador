import React, { Component } from 'react';
import { obtenerDiferenciaAnio, calcularMarca, obtenerPlan } from '../helper'
import Header from './Header'
import Formulario from './Formulario';
import Resumen from './Resumen';
import Resultado from './Resultado';


class App extends Component {

  state = {
    resultado: '',
    datos:{}
  }

  cotizarSeguro = (datos) =>{
   const {marca, plan, year} = datos;

    //costo base de 2000
    let resultado = 2000;
    //obtener la diferencia entre año 
    const diferencia = obtenerDiferenciaAnio(year);
    //por cada año de diferencia se resta el 3% de el valor de el seguro
    resultado -=((diferencia * 3) * resultado)/100;
    //Incremento por marca asiatico 5%, americano 15% y eruropeo 30% del valor actual
    resultado = calcularMarca(marca) * resultado;
    //consultamos que plan fue el seleccionado y lo guardamos
    let incrementoPlan = obtenerPlan(plan)
    //dependiendo de la covertura de plan hay un incremento en el valor de 20% (basico) y 50% (completo) 
    resultado = parseFloat(incrementoPlan * resultado).toFixed('2');//mostrar maximo dos decimales 
    //crear el objeto para el resumen
    const datosAuto = {
      marca: marca,
      plan: plan,
      year: year
    }
    //guardar resultado como state
    this.setState({
      resultado: resultado,
      datos:datosAuto
    })
  }

  render() {
    return (
      <div className="contenedor">
        <Header
          titulo = 'Cotizador de Seguro de Auto'
        />
        <div className="contenedor-formulario">
          <Formulario
            cotizarSeguro={this.cotizarSeguro}
          />
          <Resumen
            datos={this.state.datos}
            resultado={this.state.resultado}
          />
          <Resultado
            resultado= {this.state.resultado}
          />
        </div>
      </div>
    );
  }
}

export default App;
