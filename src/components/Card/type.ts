export interface CardProps {
  name: string;
  img: string;
  color: string;
  types: PokemonType[];
}

export type PokemonType = {
  type: {
    name: string;
    url: string;
  };
};
