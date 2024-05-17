export enum TypeAction {
  FETCH_POKEMON = 'FETCH_POKEMON',
  FETCH_CATEGORIES = 'FETCH_CATEGORIES',
}

export type PokemonResponse = {
  id: number;
  name: string;
  url: string;
  sprites: {
    front_default: string;
    back_default: string;
  };
  color: {
    name: string;
  };
};

export type PokemonCategoriesResponse = {
  name: string;
};
