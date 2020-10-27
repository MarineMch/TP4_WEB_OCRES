import imgage1 from './Jeanne.JPG';
import imgage2 from './Martine.JPG';
import imgage3 from './Claude.JPG';
import './App.css';
import { useState } from 'react';

const profil = [
    {
        prenom: "Jeanne",
        nom: "D'arc",
        date: "30 janvier 1995",
        image: imgage1,
        publication: { content: "Hey, j'adore la guitare !" }
    },
    {
        prenom: "Martine",
        nom: "Dupond",
        date: "17 septembre 1975",
        image: imgage2,
        publication: { content: "Hey, j'adore le PS !" }
    },
    {
        prenom: "Claude",
        nom: "Pastis",
        date: "08 mars 1969",
        image: imgage3,
        publication: { content: "Hey, j'adore les cocktails" }
    }
];

const App = () => {
    const [monProfil, setmonProfil] = useState(profil[0]) //par défaut on affiche le profil 1
    const [color, setColored] = useState("white"); //par défaut la couleur est blanche

    const backgroundChange = () => {
        setColored(color === "thistle" ? "white" : "thistle") // change la couleur du profil
    }
    const buttons = profil.map(p => <Button content={p.prenom} callback={prenom => {const profileClicked = profil.filter(p => p.prenom === prenom)[0]
        setmonProfil(profileClicked)
    }}></Button>) //on appelle la fonction Button

    return (
        <div className="App">
            <header class="d-flex justify-content-end">
                <div className="profiles" class="col-4 wrapper m-4 d-flex justify-content-around">{buttons}</div>
            </header>
            <br />
            <div className="container" class="col-8 offset-2">
                <div className="thumbnail" style={{ backgroundColor: color }}>
                    <div class="mt-5 d-flex justify-content-center">
                        <img class="mt-5" src={monProfil.image} alt="icone" height="150" width="170"></img>
                    </div>
                    <div class="mt-5 d-flex justify-content-between">
                        <h3>{monProfil.prenom}</h3>
                        <h3>{monProfil.nom}</h3>
                    </div>
                    <div class="mt-5 d-flex justify-content-start">
                        <h3>{monProfil.date}</h3>
                    </div>
                    <div class="mt-5 d-flex justify-content-end">
                        <Button callback={backgroundChange} content="Changer de style"></Button>
                    </div>
                </div>
            </div>

            <div className="container" class="col-8 offset-2">
                <div className="thumbnail" style={{ backgroundColor: color }}>
                    <div class=" mt-5 d-flex justify-content-between">
                        <h3>{monProfil.publication.content}</h3>
                    </div>
                    <br></br>
                    <div class="d-flex justify-content-start">
                        <Button content=" C'est super !"></Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Button = ({ content, callback }) => {
    var text = content //on reprend les infos
    var handleClick
    if (callback) {
        handleClick = () => callback(content)
    }
    return (
        <button className="button" onClick={handleClick}>
            {text}
        </button>
    )
}

export default App;

//j'ai été beaucoup aidé par Rémy du TD02A parce que j'avais des difficultés pour récupérer les données de chaque profil