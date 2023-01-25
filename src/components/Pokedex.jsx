import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PokemonCard from "./PokemonCard";

const Pokedex = () => {
  const userName = useSelector((state) => state.userName);

  const [pokemon, setPokemon] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [types, setTypes] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279")
      .then((res) => setPokemon(res.data.results));

    axios
      .get("https://pokeapi.co/api/v2/type/")
      .then((res) => setTypes(res.data.results));
  }, []);

  const search = () => {
    navigate(`/pokemon/${inputSearch.toLocaleLowerCase()}`);
  };

  const filterType = (e) => {
    axios.get(e.target.value).then((res) => setPokemon(res.data.pokemon));
  };

  //Pagination
  const [page, setPage] = useState(1);
  const pokemonPerPage = 6;
  const lastIndex = page * pokemonPerPage;
  const firstIndex = lastIndex - pokemonPerPage;
  const pokemonPaginated = pokemon.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(pokemon.length / pokemonPerPage);

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div>
      <h1>Welcome {userName}!</h1>
      <div>
        <input
          className="input-pokemon"
          type="text"
          placeholder="search pokémon"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />{" "}
        <button className="btn-search" onClick={search}>
          search
        </button>{" "}
        <select className="select-search" onChange={filterType} name="" id="">
          {types.map((type) => (
            <option value={type.url} key={type.url}>
              {type.name}
            </option>
          ))}
        </select>{" "}
        <br />
      </div>

      {pages.map((number) => (
        <button className="btn-number-page" onClick={() => setPage(number)}>
          {number}
        </button>
      ))}
      <div>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Prev page
        </button>{" "}
        <b>
          {page} / {totalPages}{" "}
        </b>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
        >
          Next page
        </button>
      </div>
      <br />
      <div>
        <h2>Choose your Pokemon</h2>
        <hr />
        <br />
      </div>
      <h1>{types.name}</h1>

      <ul className="pokemon-list">
        {pokemonPaginated?.map((pokemon) => (
          <PokemonCard
            url={pokemon.url ? pokemon.url : pokemon.pokemon.url}
            key={pokemon.url ? pokemon.url : pokemon.pokemon.url}
          />
        ))}
      </ul>
    </div>
  );
};

export default Pokedex;
