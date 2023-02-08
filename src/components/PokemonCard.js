import React from 'react';

function PokemonCard({ url, name }) {
console.log(name)
  return (
    <div>
        <p>{name}</p>
        <img src={url}/>
    </div>
  );
}

export { PokemonCard };
