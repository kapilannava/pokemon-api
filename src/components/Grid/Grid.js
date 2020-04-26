import React, { useEffect, useState } from 'react';
import './style.css';

const Grid = () =>{
    const [data, setData] = useState([]);
    const [pokeList, setPokeList] = useState([]);
    const [initialUrl, setUrl] = useState('');
    const [newData, setNew] = useState([]);

    const getData = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10`);
      const data = await response.json();
      setData(data);
    const pokeList = data.results.map((list) => 
    <li className="list" key={list.url}>{list.name}<br />
    <img src={list.url}/></li>
    );
        setPokeList(pokeList);
        const initialUrl = data.results.map((list) => 
        list.url
        );
        setUrl(initialUrl);
        console.log(initialUrl);
        
    const newResponse = await fetch(initialUrl[1]);
    const newData = await newResponse.json();
    setNew(newData);
    console.log(newData);

    }


    useEffect( () =>{
        getData();
      }, [])

  return (
    <div>
           {pokeList}
    </div>
);
}


export default Grid;