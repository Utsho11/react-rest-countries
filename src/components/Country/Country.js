import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name,population,area,region,flags} = props.country;
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h2>Country Name: {name.common}</h2>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Region: {region}</p>
        </div>
    );
};

export default Country;