import Card from '@components/Card';
import Categories from '@components/Categories';
import { useEffect, useState } from 'react';

const BASE_URL = 'https://pokeapi.co/api/v2';
const PER_PAGE = 12;

interface Pokemon {
  id: number;
  name: string;
  url: string;
  sprites: SpritesPokemon;
  color: SpeciesPokemon;
}

interface SpeciesPokemon {
  name: string;
}

interface SpritesPokemon {
  front_default: string;
}

interface PokemonResponse {
  results: Pokemon[];
}

interface PokemonCategories {
  name: string;
}

interface PokemonCategoriesResponse {
  results: PokemonCategories[];
}

const Content: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [pokemonCategories, setPokemonCategories] = useState<PokemonCategories[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await fetch(`${BASE_URL}/pokemon?limit=${PER_PAGE}`);
        const data: PokemonResponse = await res.json();
        const indexingPokemon = data.results.map((pokemon, index) => ({
          ...pokemon,
          id: index + 1,
        }));

        setPokemons(indexingPokemon);

        const promises = indexingPokemon.map(async (pokemon: Pokemon) => {
          const detailRes = await fetch(`${BASE_URL}/pokemon/${pokemon.id}`);
          const detailData: PokemonResponse = await detailRes.json();

          const species = await fetch(`${BASE_URL}/pokemon-species/${pokemon.name}`);
          const speciesData: PokemonResponse = await species.json();

          setPokemons(prevPokemons =>
            prevPokemons.map(prevPokemon => {
              if (prevPokemon.id === pokemon.id) {
                return { ...prevPokemon, ...detailData, ...speciesData };
              }
              return prevPokemon;
            }),
          );
        });
        await Promise.all(promises);
      } catch (error) {
        if (typeof error === 'object' && error && 'message' in error && typeof error.message === 'string') {
          setError(error.message);
        }
      }
    };
    fetchPokemon();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`${BASE_URL}/type`);
        const data: PokemonCategoriesResponse = await res.json();
        setPokemonCategories(data.results);
      } catch (error) {
        if (typeof error === 'object' && error && 'message' in error && typeof error.message === 'string') {
          setError(error.message);
        }
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      {error && <p>Gagal Load...</p>}
      <div className="flex flex-wrap justify-center gap-3">
        {pokemonCategories.map((categories, index) => (
          <Categories key={index} text={categories.name} />
        ))}
      </div>
      <div className="w-full mt-5">
        <div className="flex flex-wrap justify-center gap-2 p-1">
          {pokemons.map((pokemon, index) => (
            <Card key={index} name={pokemon.name} img={pokemon?.sprites?.front_default} color={pokemon?.color?.name} />
          ))}
        </div>
      </div>
      <p className="mt-5 duration-300 cursor-pointer hover:text-red-500">Load More</p>
    </div>
  );
};

export default Content;
