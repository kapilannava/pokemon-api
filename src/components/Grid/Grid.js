import React, { useEffect, useState } from 'react';
import './style.css';

const Grid = () =>{
    const [data, setData] = useState([]);
    const [pokeList, setPokeList] = useState([]);

    const getData = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`);
      const data = await response.json();
      setData(data);
    const pokeList = data.results.map((list) => 
    <li className="list" style={{ fontSize: '30px' }}key={list.url}>{list.name}</li>);
        setPokeList(pokeList);
    }
    useEffect( () =>{
        getData();
      }, [])

console.log(pokeList);

  return (
    <div>
           {pokeList}
    </div>
);
}


export default Grid;