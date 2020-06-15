import React, { Component } from 'react';

class Formulario extends Component {
    
    marcaRef = React.createRef();
    yearRef = React.createRef();
    planBasicoRef = React.createRef();
    planCompleteoRef = React.createRef();

    cotizarSeguro=(e) => {
        e.preventDefault();
        const plan =this.planBasicoRef.current.checked ? 'basico':'complerto';

        const infoAuto = {
            marca:this.marcaRef.current.value,
            year: this.yearRef.current.value,
            plan: plan
        }

        //console.log(infoAuto);
        this.props.cotizarSeguro(infoAuto); //enviar datos al componente principal
       // e.currentTarget.reset() //reset info formulario
    }

    render() {
        return (
            <form className="cotizar-auto" onSubmit={this.cotizarSeguro}>
                <div className="campo">
                    <label>Marca</label>
                    <select name="marca" ref={this.marcaRef}>
                        <option value="americano">Americano</option>
                        <option value="europeo">Europeo</option>
                        <option value="asiatico">Asiatico</option>
                    </select>
                </div>

                <div className="campo">
                    <label>Año</label>
                    <select name="year" ref={this.yearRef}>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                    </select>
                </div>
                <div className="campo">
                    <label>Plan:</label>
                    <input type="radio" ref={this.planBasicoRef} name="plan" value="basico"/> Básico
                    <input type="radio" ref={this.planCompleteoRef} name="plan" value="completo"/> Completo
                </div>

                <button type="submit" className="boton">Cotizar</button>
            </form>
        );
    }
}
export default Formulario;