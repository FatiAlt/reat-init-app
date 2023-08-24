import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Countries = () => {
    const [data, setData] = useState([]); //Le useState permet de changer la valeur de la variable
    //Le useEffect se joue lorsque le composant est monté
    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all").then((res) => {
            setData(res.data);
        })
    }, []);

    return (
        <div className='countries'>
            <h1>Countries</h1>
            <ul>
                {data.map((country, index) =>
                 //<li key={index}>{country.translations.fra.commons}</li>
                 <Card key={index} country={country}/> //il va parcourir le map autant de fois qu'il y a de pays
                 )}
            </ul>
        </div>
    );
};

export default Countries;
