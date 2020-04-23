import React, { useEffect, useState } from 'react';

const Card = () =>{
    const [data, setData] = useState([]);

    const getData = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`);
      const data = await response.json();
      setData(data);
      console.log(data);
    }
    useEffect( () =>{
        getData();
      }, [])
  return (
    <div>
          <img alt={data.name} src={data.sprites ? data.sprites.front_default: ''} /><br />
      {data.name}    
    </div>
);
}


export default Card;