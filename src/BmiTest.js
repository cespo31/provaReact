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
        this.handleInputChange = this.handleInputChange.bind(this);

        this.testBmiSpiegazione =
        <div>
	        <p> L'indice di massa corporea (abbreviato IMC o BMI, dall'inglese body mass index)
	        è un dato biometrico, espresso come rapporto tra peso e quadrato dell'altezza di un individuo ed è utilizzato come
	        un indicatore dello stato di peso forma. </p>
	        <p>Questo indice è di frequente utilizzato in maniera grossolana, in quanto non integrato da un fattore basilare come
	        il sesso e da caratteristiche morfologiche di base quali larghezza delle spalle, larghezza ossea del bacino, circonferenza 
	        cranica, rapporto tra lunghezza delle gambe e lunghezza del tronco, corporatura di tipo tendenzialmente muscoloso o flaccido
	        e altri fattori. È inoltre fondamentale considerare la percentuale di massa grassa e massa magra del soggetto.
	        Ad esempio, un paziente di 90 kg e 175 cm di altezza può essere normopeso, se ha una percentuale di massa magra (muscolare)
	        maggiore della percentuale di massa grassa.
			Operativamente l'indice di massa corporea si calcola come il rapporto tra la massa-peso, espressa in chilogrammi, 
			e il quadrato dell'altezza, espressa in metri. </p>
		</div>
		this.tabellaBmi = <div id= "tabellaBmi" className="table-responsive">
			<tbody className="table table-bordered">
			<tr>
			<th scope="col">Situazione peso
			</th>
			<th scope="col">Min
			</th>
			<th scope="col">Max
			</th>
			</tr>
			<tr>
			<td>Obesità di III classe (gravissima)</td>
			<td>&gt;40,00</td>
			<td>
			</td></tr>
			<tr>
			<td>Obesità di II classe (grave)</td>
			<td>35,01</td>
			<td>40,00
			</td></tr>
			<tr>
			<td>Obesità di I classe (moderata)</td>
			<td>30,01</td>
			<td>35,00
			</td></tr>
			<tr>
			<td>Sovrappeso</td>
			<td>25,01</td>
			<td>30,00
			</td></tr>
			<tr>
			<td>Regolare</td>
			<td>18,51</td>
			<td>25,00
			</td></tr>
			<tr>
			<td>Leggermente sottopeso</td>
			<td>17,51</td>
			<td>18,50
			</td></tr>
			<tr>
			<td>Sottopeso</td>
			<td>16,01</td>
			<td>17,50
			</td></tr>
			<tr>
			<td>Grave magrezza</td>
			<td>&nbsp;</td>
			<td>&lt;16,01
			</td></tr></tbody>
			</div>

}



  render() {
    return (
        <div  className = "container" >
	        <div className="row justify-content-center">
	        <h2> Il test del BMI </h2>
	        </div>
	        <div className="row">{this.testBmiSpiegazione}  {this.tabellaBmi}</div>
          <div id = "bmiTest" className="row">
            <div className ="col-sm-12 col-md-6">
              <div className="row justify-content-center">
                <div className = "col-sm-12 col-md-6 ">
                  <h3>Calcolo del BMI</h3>
                </div>
            </div>
            <div className="row justify-content-start">
              <div className = "col-sm-12 col-md-6 " >
                <h4>Altezza (m)</h4>
              </div>
              <div className = "col-sm-12 col-md-6" >
                <input type="number" min ="0" step=".001" placeholder="Inserisci Altezza (m)" 
                name = "altezza" onChange={this.handleInputChange}/>
              </div>
            </div>
            <div className="row justify-content-start">
              <div className = "col-sm-12 col-md-6" >
                <h4>Peso (kg)</h4>
              </div>
              <div className = "col-sm-12 col-md-6" >
                <input type="number" min = "0" step=".001" placeholder="Inserisci Peso (kg)" 
                name = "peso" onChange={this.handleInputChange} />
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
                <div id = "risultato" className="jumbotron jumbotron-fluid">
                  <div className="container">
                    <p className="lead">Il tuo BMI è: {this.state.bmi} !</p>
                    <h1 className="display-6" >  {this.state.risultato} </h1>
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
      {bmi: (this.state.peso / (this.state.altezza * this.state.altezza)).toFixed(2)});
  }

handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
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