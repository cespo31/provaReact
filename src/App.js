import React, { Component } from 'react';
import './App.css';
import BmiTest from './BmiTest.js'


class App extends Component {

  render() {
    return (
      <div className="App">
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#home">Nutrition App</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
{/*              <li className="nav-item active">
               <a className="nav-link" href="#home">Home </a>
              </li>*/}
              <li className="nav-item">
                <a className="nav-link" href="#bmiTest">BMITest</a>
              </li>
{/*              <li class="nav-item">
                <a class="nav-link" href="#">Contatti</a>
              </li>
*/}           </ul>
          </div>
        </nav>
        <div id = "home" className = "container">
          <h2 id="intro"> Benvenuto nel sito</h2>
          <h4> L'alimentazione corretta </h4>
          <p>Un'alimentazione sana è quella che fornisce tramite gli alimenti assunti quotidianamente la quantità di nutrienti che corrisponde al proprio fabbisogno. La nutrizione, come tutte le scienze, è in continua evoluzione e l'acquisizione di nuovi dati e nuovi studi fa sì che le raccomandazioni per una dieta corretta vengano periodicamente aggiornate in funzione delle nuove conoscenze.

Uno schema utilizzato per visualizzare quali sono le proporzioni di alimenti che è consigliabile assumere è quello delle piramidi alimentari. Si tratta di piramidi divise da piani che delimitano dei volumi. Ad ogni settore coincide una tipologia di alimento e la sua relativa quantità, compresa l'acqua, ed eventualmente anche la quantità di attività motoria come elemento fondamentale. I volumi maggiori della piramide trovano gli alimenti che possono essere consumati in quantità maggiore. Proseguendo troviamo quei cibi il cui consumo deve essere progressivamente più limitato.

Esistono diverse versioni della piramide alimentare, che riflettono diverse teorie scientifiche in merito. Descrivendo brevemente una delle piramidi a frazionamento orizzontale vediamo che alla base della piramide si trova l'acqua, poi frutta e ortaggi, essenziali per l'apporto in vitamine e minerali, ma anche di fibre, importanti non per la funzione nutriente ma per il mantenimento della funzione digestiva dell'intestino. Al terzo piano si trovano i cibi ricchi in carboidrati complessi (pasta, pane, riso, cereali), che in molti regimi alimentari dovrebbero rappresentare la maggiore fonte di energia. Al quarto piano si trovano gli alimenti proteici (carne, pesce, uova, legumi). Al quinto piano si trovano latte e derivati, e al sesto i grassi (olio e burro): questi alimenti, in condizioni metaboliche e di attività medie vanno consumati in quantità limitate anche perché hanno una densità energetica maggiore (cioè a parità di peso forniscono più calorie delle altre categorie di alimenti). All'apice troviamo vino e birra, ed infine i dolci.
In molti casi la piramide alimentare viene combinata con consigli per un'adeguata attività fisica, altro elemento insieme alla dieta che permette di mantenersi in salute. Questo tipo di schema viene definito "piramide alimentare-motoria".

Questa è una suddivisione semplificata e di massima, considerando una notevole variabilità di approcci alimentaristi, dal vegetarianismo, all'esclusione dei latticini per motivi di indigeribilità genetica del lattosio, al bando religioso di alcune carni animali o delle bevande fermentate, fattori inerenti eventuali patologie a parte.

La scienza della nutrizione umana studia il rapporto tra l'alimentazione e lo stato di salute o malattia, dove molti comuni problemi di salute possono essere evitati o alleviati con una dieta appropriata. La figura professionale competente per la prescrizione di una terapia dietetica (che può essere un intervento di tipo artificiale - nutrizione enterale/parenterale - o dietetico) è il medico-chirurgo (tutte le specialità), mentre le figure competenti per l'elaborazione della dieta sono il dietologo (medico-chirurgo specializzato in scienza dell'alimentazione) ed il dietista (professione sanitaria tecnico-assistenziale).

<h4> Nutrizione e prevenzione </h4>
La dieta può rivestire un fattore importante nella prevenzione di alcune patologie, anche tenendo conto il considerevole innalzamento della soglia di longevità nelle società moderne che portano alla luce effetti a lungo termine, oltre ai dati relativi alle più note malattie da carenza.
Questa branca della nutrizione si basa principalmente su studi di epidemiologia, cioè sull'osservazione di relazioni tra determinati fattori (ad esempio un'alimentazione ricca in uno specifico alimento) e l'incidenza di alcune malattie. L'osservazione di questi fenomeni è alla base della successiva verifica tramite esperimenti.
<h4> Sovrappeso e obesità </h4>

L'obesità è una delle malattie più diffuse nel mondo moderno, e la sua diffusione è legata alla evoluzione delle abitudini alimentari e degli stili di vita. Sebbene esistano anche dei fattori genetici coinvolti nello sviluppo di questa patologia, l'associazione di uno stile di vita sedentario e di abitudini alimentari quantitativamente e qualitativamente scorrette è il principale fattore causale. Dal punto di vista nutrizionale gioca un ruolo preponderante il consumo di bibite zuccherate in sostituzione dell'acqua (che non ha calorie) e di alimenti ad alta densità energetica come snack dolci o salati. Il principale intervento nutrizionale per prevenire il sovrappeso e l'obesità è il privilegiare cibi a bassa densità energetica, come frutta e verdura e carboidrati complessi (ad alimenti ricchi in zuccheri e amido, preferire alimenti più ricchi in fibre, a base di cereali integrali). Queste scelte alimentari contribuiscono ad aumentare il senso di sazietà diminuendo l'apporto di calorie, e ad aumentare l'assunzione di micronutrienti. All'intervento nutrizionale va ovviamente associata la correzione dello stile di vita in favore di una maggiore attività fisica.

Le definizione di sovrappeso e obesità (che non sono necessariamente la medesima cosa) dipendono da 2 importanti parametri fisici degli individui. Il primo prende il nome di indice di massa corporea, ed è un valore adimensionale funzione del peso e dell'altezza; il secondo è la percentuale di massa grassa, ed è un rapporto percentuale tra la massa grassa dell'organismo e la massa complessiva dello stesso.

In luce di ciò si può quindi determinare il sovrappeso e l'obesità come segue:
<ul>
  <li>  sovrappeso: situazione fisica per cui il valore di Indice di Massa Corporea è superiore a 25. In sostanza il sovrappeso, come dice la parola, è un eccesso di peso. Esso può essere causato non solo da una sovrabbondanza di grassi, ma anche da un surplus di muscoli;</li>
  <li>  obesità: situazione fisica per cui il valore percentuale di massa grassa va oltre i limiti suggeriti da alcune tabelle salutistiche nelle quali mediamente il confine è 20%-25%</li>
</ul>
Se ne conviene che non tutte le persone in sovrappeso sono anche obese, e non tutte le persone obese sono in sovrappeso. </p>
        </div>
        <BmiTest />
      </div>
    );
  }


componentDidUpdate(prevProps, prevState) {
}

}

export default App;
