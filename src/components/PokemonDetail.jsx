import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const PokemonDetail = () => {
  const { id } = useParams();

  const [pokemon, setPokemon] = useState({});

  const height = pokemon.height / 10;
  const weight = pokemon.weight / 10;

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => setPokemon(res.data))
      .catch(() => alert("This Pokémon does not exist"));
  }, []);

  console.log(pokemon);

  return (
    <div>
      <div className="pokemon-card-details">
        <div className={`container-${pokemon.types?.[0].type.name}`}>
          <img src={pokemon.sprites?.other.dream_world.front_default} />
        </div>
        <div>
          <h2>#{pokemon.id} </h2>
        </div>
        <h2>{pokemon.name}</h2>
        <hr />
        <h2>Details</h2>
        <div className="details">
          <div>
            <p>weight</p>
            <b>{weight} kg</b>
          </div>
          <div>
            <p> height</p>
            <b> {height} m</b>
          </div>
          <div>
            <p>type</p>
            <div className={`type-container-${pokemon.types?.[0]?.type.name}`}>
              <b>{pokemon.types?.[0]?.type.name}</b>
            </div>

            <br />
            <div className={`type-container-${pokemon.types?.[1]?.type.name}`}>
              <b>{pokemon.types?.[1]?.type.name}</b>
            </div>
          </div>
          <div>
            <p>abilities</p>
            <b>{pokemon.abilities?.[0]?.ability.name}</b>
            <br />
            <b>{pokemon.abilities?.[1]?.ability.name}</b>
          </div>
        </div>
        <br />
        <hr />
        <h2>Stats</h2>
        <div className="stats">
          <div>
            <p>{pokemon.stats?.[0].stat.name}</p>
            <b>{pokemon.stats?.[0].base_stat}</b>
          </div>
          <div>
            <p>{pokemon.stats?.[1].stat.name}</p>
            <b>{pokemon.stats?.[1].base_stat}</b>
          </div>
          <div>
            <p>{pokemon.stats?.[2].stat.name}</p>
            <b>{pokemon.stats?.[2].base_stat}</b>
          </div>
          <div>
            <p>{pokemon.stats?.[3].stat.name}</p>
            <b>{pokemon.stats?.[3].base_stat}</b>
          </div>
          <div>
            <p>{pokemon.stats?.[4].stat.name}</p>
            <b>{pokemon.stats?.[4].base_stat}</b>
          </div>
          <div>
            <p>{pokemon.stats?.[5].stat.name}</p>
            <b>{pokemon.stats?.[5].base_stat}</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
