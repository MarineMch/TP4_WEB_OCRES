import img1 from './Jeanne.JPG';
import img2 from './Martine.JPG';
import img3 from './Claude.JPG';
import './App.css';
import { useState } from 'react';

const profil = [
    {
        prenom: "Jeanne",
        nom: "D'arc",
        date: "30 janvier 1995",
        image: img1,
        publication: { content: "Hey, j'adore la guitare !" }
    },
    {
        prenom: "Martine",
        nom: "Dupond",
        date: "17 septembre 1975",
        image: img2,
        publication: { content: "Hey, j'adore le PS !" }
    },
    {
        prenom: "Claude",
        nom: "Pastis",
        date: "08 mars 1969",
        image: img3,
        publication: { content: "Hey, j'adore les cocktails" }
    }
];

const App = () => {
    const [monProfil, setmonProfil] = useState(profil[0])
    const [color, setColored] = useState("white");

    const handleProfileClick = prenom => {
        const profileClicked = profil.filter(p => p.prenom === prenom)[0] //on parcours les profils pour trouver le prenom qui correspond
        setmonProfil(profileClicked) //on récupère les données
    }

    const handleBackgroundChange = () => {
        setColored(color === "thistle" ? "white" : "thistle") // change la couleur du profil
    }
    const buttons = profil.map(p => <Button content={p.prenom} callback={handleProfileClick}></Button>)

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
                        <Button callback={handleBackgroundChange} content="Changer de style"></Button>
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

const Button = ({ content, clickable, callback }) => {
    //const [clicked, setClicked] = useState(false);
    var text = content //on reprend les infos
    var handleClick
    if (callback) {
        handleClick = () => callback(content)
    }
    return (
        <button
            className="button"
            onClick={handleClick}
        >
            {text}
        </button>
    )
}

export default App;