import React from 'react';
import './Results.scss';

export default function Result({ name, id, nametype, recclass, mass, fall, year, latitude, longitude, length }) {
    console.log(length);
    return (
        <div className="result">
            <h5>{name}</h5>
            <h5>{id}</h5>
            <h5>{nametype}</h5>
            <h5>{recclass}</h5>
            <h5>{mass}</h5>
            <h5>{fall}</h5>
            <h5>{year}</h5>
            <h5>{latitude}</h5>
            <h5>{longitude}</h5>
        </div>
    )
}