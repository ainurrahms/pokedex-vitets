import { createReducer } from '@reduxjs/toolkit';
import { fetchCategories, fetchPokemon } from './action';
import { PokemonCategoriesResponse, PokemonResponse } from './type';

type HomeState = {
  pokemonData: PokemonResponse[] | null;
  categoriesData: PokemonCategoriesResponse[] | null;
  isLoadingPokemonData: boolean;
  isLoadingCategoriesData: boolean;
  numSkeleton: number;
  error: string | null;
};

const initialState: HomeState = {
  pokemonData: null,
  categoriesData: null,
  isLoadingPokemonData: false,
  isLoadingCategoriesData: false,
  numSkeleton: 12,
  error: null,
};

const homeReducer = createReducer(initialState, builder => {
  builder.addCase(fetchPokemon.pending, state => {
    state.isLoadingPokemonData = true;
  });

  builder.addCase(fetchPokemon.fulfilled, (state, action) => {
    state.isLoadingPokemonData = false;
    state.pokemonData = state.pokemonData ? [...state.pokemonData, ...action.payload] : action.payload;
  });

  builder.addCase(fetchPokemon.rejected, state => {
    state.isLoadingPokemonData = false;
    state.error = 'An unknown error occurred';
  });
  builder.addCase(fetchCategories.pending, state => {
    state.isLoadingCategoriesData = true;
  });

  builder.addCase(fetchCategories.fulfilled, (state, action) => {
    state.isLoadingCategoriesData = false;
    state.categoriesData = action.payload || [];
  });

  builder.addCase(fetchCategories.rejected, state => {
    state.isLoadingCategoriesData = false;
    state.error = 'An unknown error occurred';
  });
});

export default homeReducer;
