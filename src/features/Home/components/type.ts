export interface CardContentProps {
  img: string;
  types: PokemonType[];
  name: string;
}

type PokemonType = {
  type: {
    name: string;
    url: string;
  };
};
