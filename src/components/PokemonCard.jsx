import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PokemonCard = ({ url }) => {
  const [pokemon, setPokemon] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(url).then((res) => setPokemon(res.data));
  }, []);

  return (
    <div
      className="pokemon-card"
      onClick={() => navigate(`/pokemon/${pokemon.id}`)}
    >
      <div className="pokemon-card-inside">
        <h4>#{pokemon.id} </h4>
        <h4>{pokemon.name}</h4>
        <img src={pokemon.sprites?.front_default} />
      </div>
    </div>
  );
};

export default PokemonCard;
