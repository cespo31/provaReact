import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button , Grid, Row, Col, Label, Well} from 'react-bootstrap';

class App extends Component {

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
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Nutrition's App</h1>
        </header>
        <Grid >
          <Row className="show-grid">
            <p className="App-intro">Calcolo del BMI</p>
          </Row>
          <Row className="show-grid">
              <Col lg = {8}>
                  <Row className="show-grid">
                    <Col>
                    <h1><Label bsStyle="primary">Inserisci i tuoi dati</Label></h1>
                    </Col>
                  </Row>
                  <Row className="show-grid">
                    <Col xs = {12} md = {6}>
                      <h4>Altezza</h4>
                    </Col>
                    <Col >
                      <input type="number" min ="0" step=".001" placeholder="Inserisci Altezza" onChange={this.handleChangeAltezza}/>
                    </Col>
                  </Row>
                  <Row className="show-grid">
                    <Col xs = {12} md = {6}>
                      <h4>Peso</h4>
                    </Col>
                    <Col >
                      <input type="number" min = "0" placeholder="Inserisci Peso"  onChange={this.handleChangePeso} />
                    </Col>
                  </Row>
                  <Row className="show-grid">
                    <Col xs = {12} md = {6}>
                    </Col>
                    <Col xs = {12} md = {6}>
                      <Button bsStyle="primary" onClick={this.calcolaBMI}>Calcola</Button>
                    </Col>
                  </Row>   
              </Col>
              <Col  lg={4}>
                <p> Il tuo BMI è: {this.state.bmi} !</p>
                <Well bsSize="large">{this.state.risultato}</Well>
              </Col>
          </Row>
        </Grid>

      </div>
    );
  }


componentDidUpdate(prevProps, prevState) {
  if (this.state.bmi > prevState.bmi) {
    this.setRisultato();  
  }
}

  calcolaBMI(){
    this.setState({bmi: this.state.peso / (this.state.altezza*2)});
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
    this.setState({risultato: res});
  }
}

export default App;
