import { createAsyncThunk } from '@reduxjs/toolkit';
import { ParamFetchPokemon, PokemonResponse, TypeAction } from './type';

const BASE_URL = 'https://pokeapi.co/api/v2';

export const fetchPokemon = createAsyncThunk(
  TypeAction.FETCH_POKEMON,
  async ({ limit, offset }: ParamFetchPokemon, { rejectWithValue }) => {
    try {
      const res = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
      const data = await res.json();
      const indexingPokemon = data.results.map((val: [], index: number) => ({
        ...val,
        id: index + 1 + offset,
      }));

      const promises = indexingPokemon.map(async (pokemon: PokemonResponse) => {
        const detailRes = await fetch(`${BASE_URL}/pokemon/${pokemon.id}`);
        const detailData = await detailRes.json();

        const species = await fetch(`${BASE_URL}/pokemon-species/${pokemon.id}`);
        const speciesData = await species.json();

        return { ...pokemon, ...detailData, ...speciesData };
      });
      return await Promise.all(promises);
    } catch (error) {
      return rejectWithValue('An unknown error occurred');
    }
  },
);

export const fetchCategories = createAsyncThunk(TypeAction.FETCH_CATEGORIES, async (_, { rejectWithValue }) => {
  try {
    const res = await fetch(`${BASE_URL}/type`);
    const data = await res.json();
    return data.results;
  } catch (error) {
    if (typeof error === 'object' && error && 'message' in error && typeof error.message === 'string') {
      return rejectWithValue('An unknown error occurred');
    }
  }
});
