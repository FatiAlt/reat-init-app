import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Countries = () => {
    const [data, setData] = useState([]); //Le useState permet de changer la valeur de la variable
    const [rangeValue, setRangeValue] = useState(36); // le chiffre 36 est un multiple de 12, qui est souvent utilisé pour afficher des cartes
    //Le useEffect se joue lorsque le composant est monté
    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all").then((res) => {
            setData(res.data);
        })
    }, []);

    return (
        <div className='countries'>
            <ul className='radio-container'>
                <input type="range"
                 min="1"
                 max="250"
                 defaultValue={rangeValue}
                 onChange={(e) =>
                setRangeValue(e.target.value)} // onChange est un évèvement qui permet de modifier la valeur rangeValue
                />

            </ul>
            <h1>Countries</h1>
            <ul>
                {data
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
