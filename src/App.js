import React, { useState, useEffect } from 'react';
import Results from './Results';
import './App.scss';

export default function App() {
  const [ isOpen, setIsOpen ] = useState(false);
  const [ items, setItems ] = useState([]);
  const [ query, setQuery ] = useState('');
  const [ data, setData ] = useState([]);

  useEffect(() => {
    fetch(`https://data.nasa.gov/resource/gh4g-9sfh.json`)
      .then(res => res.json())
      .then(
        res => {
          setData(res);
        },
        err => {
          console.log(err);
        }
      );
  })

  return (
    <div className="App">
      <div className="main">
        <div className="app-header"><h2>Meteorite Explorer</h2></div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="inputs">
            <input value={query} onChange={handleChange} type="text" className="input" placeholder="Enter Search Value" />
            <input type="submit" value="SEARCH" />
          </div>
        </form>

        {
          isOpen && <Results items={items}/>
        }
      </div>
    </div>
  );

  function handleChange(e) {
    e.preventDefault();
    setQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsOpen(true);
    if(query === '') {
      setItems(data);
      return;
    }
    
    const newResult = data.filter(result => {
      const resultLowerCase = result.name.toLowerCase();
      const queryLowerCase = query.toLowerCase();
      return resultLowerCase.includes(queryLowerCase);
    });
    setItems(newResult);
  }
}
