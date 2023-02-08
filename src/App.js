import React, { useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { PokemonCard } from './components/PokemonCard';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const LIMIT = 150;
const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;
const pokeImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",';

function App() {
  const [rawPokemon, setRawPokemon] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  const fetchPokemon = async () => {
    const response = await fetch(pokeApi)
    const data = await response.json()

    const newPokemon = [];
    for(let i = 0; i < data.results.length; i++){
      // console.log(data.results[i].url)
      const response2 = await fetch(data.results[i].url);
      const data2 = await response2.json();
      // console.log(data2)
      newPokemon.push(data2)
    }
    
    setRawPokemon(newPokemon);
    setFilteredPokemon(rawPokemon);
    console.log(filteredPokemon);
  };

  

  useEffect(()=>{
    fetchPokemon()
  },[])


  return (
    <div data-testid="app">
      <Navigation />

      {filteredPokemon.map(pokemon => <PokemonCard url={pokemon.sprites.front_default} name={pokemon.name}/>)}
      <PokemonCard />
    </div>
  );
}

export { App };
