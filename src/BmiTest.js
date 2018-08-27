import React, { Component } from 'react';
import './BmiTest.css';


class BmiTest extends Component {

	constructor(){
        super();
        this.state = {
            altezza: 0,
            peso: 0,
            bmi: 0,
            risultato : "",
        };
        this.calcolaBMI = this.calcolaBMI.bind(this);
        this.handleChangePeso = this.handleChangePeso.bind(this);
        this.handleChangeAltezza = this.handleChangeAltezza.bind(this)

}


  render() {
    return (
        <div className = "container" >
        <h6 id = "bmiTest"></h6>
          <div className="row">
            <div className ="col-sm-12 col-md-6">
              <div className="row justify-content-center">
                <div className = "col-sm-12 col-md-6 ">
                  <h3>Calcolo del BMI</h3>
                </div>
            </div>
            <div className="row justify-content-start">
              <div className = "col-sm-12 col-md-6 " >
                <h4>Altezza</h4>
              </div>
              <div className = "col-sm-12 col-md-6" >
                <input type="number" min ="0" step=".001" placeholder="Inserisci Altezza (m)" onChange={this.handleChangeAltezza}/>
              </div>
            </div>
            <div className="row justify-content-start">
              <div className = "col-sm-12 col-md-6" >
                <h4>Peso</h4>
              </div>
              <div className = "col-sm-12 col-md-6" >
                <input type="number" min = "0" placeholder="Inserisci Peso (kg)"  onChange={this.handleChangePeso} />
              </div>
            </div>
            <div className="row justify-content-end">
              <div className = "col-sm-12 col-md-6" >
              </div>
              <div className = "col-sm-12 col-md-6" >
                <button type ="button" className="btn btn-primary" onClick={this.calcolaBMI}>Calcola</button>
              </div>
            </div>   
          </div>
            <div className = "col-sm-12 col-md-6" >
                <div id = "risultato"className="jumbotron jumbotron-fluid">
                  <div className="container">
                    <p class="lead">Il tuo BMI è: {this.state.bmi} !</p>
                    <h1 class="display-6" >  {this.state.risultato} </h1>
                  </div>
                </div>
            </div>
          </div>
        </div>

    );
  }


componentDidUpdate(prevProps, prevState) {
  if (this.state.bmi !== prevState.bmi) {
    this.setRisultato();  
  }
}

  calcolaBMI(){
    this.setState(
      {bmi: (this.state.peso / (this.state.altezza*2)).toFixed(2)});
  }

  handleChangeAltezza(event){
    this.setState({altezza: event.target.value});
    console.log(this.state.altezza)
  }

  handleChangePeso(event){
    this.setState({peso: event.target.value});
  }

  setRisultato(){
    // Sottopeso severo: minore di 16.5
 // Sottopeso: da 16.5 a 18.4
// Normopeso:  18.5 a 24.9
// Sovrappeso: da 25 a 30
// Obesità leggera: da 30.1 a 34.9
// Obesità media: da 35 a 40
// Obesità grave: maggiore di 40
    var bmi = this.state.bmi;
    var res = "Nessun riscontro";
    if( bmi < 16.5){
      res = "Sottopeso Severo"
    }
    else if (bmi <= 18.4){
      res = "Sottopeso"
    }
    else if (bmi <= 24.9){
      res = "Normopeso"
    }
    else if (bmi <= 30){
      res = "Sovrappeso"
    }
    else if (bmi <= 34.9){
      res = "Obesità leggera"
    }
    else if (bmi <= 40){
      res = "Obesità media"
    }
    else if (bmi > 40){
      res = "Obesita grave"
    }
    this.setState({risultato: "Sei in " + res});
  }
}

export default BmiTest;