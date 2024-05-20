import httpService from '@config/httpService';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ParamFetchPokemon, PokemonResponse, TypeAction } from './type';

export const fetchPokemon = createAsyncThunk(
  TypeAction.FETCH_POKEMON,
  async ({ limit, offset }: ParamFetchPokemon, { rejectWithValue }) => {
    try {
      const { data } = await httpService.get(`/pokemon?limit=${limit}&offset=${offset}`);
      const indexingPokemon = data.results.map((val: [], index: number) => ({
        ...val,
        id: index + 1 + offset,
      }));

      const promises = indexingPokemon.map(async (pokemon: PokemonResponse) => {
        const detailRes = await httpService.get(`/pokemon/${pokemon.id}`);
        const detailData = detailRes.data;

        const species = await httpService.get(`/pokemon-species/${pokemon.id}`);
        const speciesData = species.data;

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
    const { data } = await httpService.get('/type');

    data.results.splice(0, 0, {
      name: 'all',
    });

    return data.results;
  } catch (error) {
    if (typeof error === 'object' && error && 'message' in error && typeof error.message === 'string') {
      return rejectWithValue('An unknown error occurred');
    }
  }
});
