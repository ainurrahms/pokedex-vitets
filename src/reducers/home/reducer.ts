import { createReducer } from '@reduxjs/toolkit';
import { fetchCategories, fetchPokemon } from './action';
import { PokemonCategoriesResponse, PokemonResponse } from './type';

type HomeState = {
  pokemonData: PokemonResponse[] | null;
  categoriesData: PokemonCategoriesResponse[] | null;
  isLoading: boolean;
  error: string | null;
};

const initialState: HomeState = {
  pokemonData: null,
  categoriesData: null,
  isLoading: false,
  error: null,
};

const homeReducer = createReducer(initialState, builder => {
  builder.addCase(fetchPokemon.pending, state => {
    state.isLoading = true;
  });

  builder.addCase(fetchPokemon.fulfilled, (state, action) => {
    state.isLoading = false;
    state.pokemonData = state.pokemonData ? [...state.pokemonData, ...action.payload] : action.payload;
  });

  builder.addCase(fetchPokemon.rejected, state => {
    state.isLoading = false;
    state.error = 'An unknown error occurred';
  });
  builder.addCase(fetchCategories.pending, state => {
    state.isLoading = true;
  });

  builder.addCase(fetchCategories.fulfilled, (state, action) => {
    state.isLoading = false;
    state.categoriesData = action.payload || [];
  });

  builder.addCase(fetchCategories.rejected, state => {
    state.isLoading = false;
    state.error = 'An unknown error occurred';
  });
});

export default homeReducer;
