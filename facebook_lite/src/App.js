// import logo from './logo.svg';
import icone from './icone.png';
import './App.css';

/*const profils = [
  {
    nom: "bob"
  },
  {
    nom: "martine"
  },
  {
    nom: "camille"
  }
];*/

function App() {
  return (
    <div className="App">
      <header className="App-header" class="d-flex justify-content-end">
        {/* <img src={logo} className="App-logo" alt="logo" /> 
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <div class="col-4 wrapper m-4 d-flex justify-content-around">
          <input type="button" value="Jeanne"></input>
          <input type="button" value="Martine"></input>
          <input type="button" value="Claude"></input>
        </div>
      </header>

      <main class="col-6 offset-3">
        <div class="mt-5 d-flex justify-content-center">
          <img class="mt-5" src={icone} className="icone" alt="icone" height="140" width="130"></img>
        </div>
        <div class="mt-5 d-flex justify-content-between">
          <h3>Prenom</h3>
          <h3>Nom</h3>
        </div>
        <div class="mt-5 d-flex justify-content-start">
          <h3>Date de naissance</h3>
        </div>
        <div class="d-flex justify-content-end">
          <button class="m-3" id="style" type="submit">Changer de style</button>
        </div>
      </main>

      <article class="col-6 offset-3">
        <div class=" mt-5 d-flex justify-content-between">
          <h3>hello, blablablablablablablabla</h3>
        </div>
        <div class="d-flex justify-content-start">
          <button class="m-3" id="style" type="submit">C'est super !</button>
        </div>
      </article>

    </div>
  );
}

export default App;
