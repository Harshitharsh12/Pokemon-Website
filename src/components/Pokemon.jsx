import { useEffect, useState } from "react";
import "../index.css";
import PokemonCard from "./PokemonCard";
export const Pokemon = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonSearch, setPokemonSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API = "https://pokeapi.co/api/v2/pokemon?limit=100";
  // const API = "https://restcountries.com/v3.1/all";
  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      const dPokemonData = data.results.map(async (a) => {
        const res = await fetch(a.url);
        const data = await res.json();
        return data;
      });
      const deatiledResponses = await Promise.all(dPokemonData);
      console.log(deatiledResponses);
      setPokemonData(deatiledResponses);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPokemon();
  }, []);
  const searchData = pokemonData.filter((a) =>
    a.name.toLowerCase().includes(pokemonSearch.toLowerCase())
  );
  return (
    <div>
      <section className="container">
        <header>
          <h1>Lets Catch Pokemon:</h1>
        </header>
        <div className="pokemon-search">
          <input
            type="text"
            placeholder="Search your Favourite Pokemon"
            value={pokemonSearch}
            onChange={(e) => {
              setPokemonSearch(e.target.value);
            }}
          />
        </div>

        <div>
          <ul className="cards">
            {loading ? (
              <h2>
                <b> Loading...</b>
              </h2>
            ) : error ? (
              <h2>
                {" "}
                <b>{error.message}</b>
              </h2>
            ) : (
              searchData.map((currentPokemonData) => {
                return (
                  <PokemonCard
                    key={currentPokemonData.id}
                    data={currentPokemonData}
                  />
                );
              })
            )}
          </ul>
        </div>
      </section>
    </div>
  );
};
