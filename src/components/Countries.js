import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Countries = () => {
    const [data, setData] = useState([]); //Le useState permet de changer la valeur de la variable
    const [rangeValue, setRangeValue] = useState(36); // le chiffre 36 est un multiple de 12, qui est souvent utilisé pour afficher des cartes
    const [selectedRadio, setSelectedRadio] = useState("");
    const radios = ["Africa", "America", "Asia", "Europe", "Océania"];
    //Le useEffect se joue lorsque le composant est monté
    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all").then((res) => {
            setData(res.data);
        })
    }, []);

    return (
        <div className='countries'>
            <ul className='radio-container'>
                <input
                type="range"
                 min="1"
                 max="250"
                 defaultValue={rangeValue}
                 onChange={(e) =>
                setRangeValue(e.target.value)} // onChange est un évèvement qui permet de modifier la valeur rangeValue
                />
                {radios.map((continent) => (
                    <li>
                      <input
                      type="radio"
                      id={continent}
                      name="continentRadio"
                      checked={continent === selectedRadio}
                      onChange={(e) => setSelectedRadio(e.target.id)}/>
                      <label htmlFor={continent}>{continent}</label>
                      </li>
                ))}


            </ul>
            {selectedRadio &&
            <button onClick={() => setSelectedRadio("")}>Annuler la recherche</button> }
            {/* <h1>Countries</h1> */}
            <ul>
                {data
                .filter((country) => country.continents[0].includes(selectedRadio)) //d'abord filtrer, ensuite trier et couper le tableau
                .sort((a,b) => b.population - a.population)
                .slice(0, rangeValue)
                .map((country, index) =>
                 //<li key={index}>{country.translations.fra.commons}</li>
                 <Card key={index} country={country}/> //il va parcourir le map autant de fois qu'il y a de pays
                 )}
            </ul>
        </div>
    );
};

export default Countries;
