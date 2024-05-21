export enum TypeAction {
  FETCH_POKEMON = 'FETCH_POKEMON',
  FETCH_CATEGORIES = 'FETCH_CATEGORIES',
}

type PokemonType = {
  type: {
    name: string;
    url: string;
  };
};

export type PokemonResponse = {
  id: number;
  name: string;
  url: string;
  sprites: {
    front_default: string;
    back_default: string;
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  color: {
    name: string;
  };
  types: PokemonType[];
};

export type ParamFetchPokemon = {
  limit: number;
  offset: number;
};

export type PokemonCategoriesResponse = {
  name: string;
};
