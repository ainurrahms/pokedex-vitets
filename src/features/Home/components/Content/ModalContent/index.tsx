import Card from '@components/Card';
import { PokemonResponse } from '@reducers/home/type';

interface ModalContentProps {
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
  pokemon: PokemonResponse | null;
}

const ModalContent: React.FC<ModalContentProps> = ({ onClose, pokemon }) => {
  if (!pokemon) return null;

  return (
    <Card className="w-48 h-48 font-mono">
      <div className="w-full">
        <button
          onClick={onClose}
          type="button"
          className="inline-flex items-center justify-center float-right p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-indigo-500"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div
        style={{ backgroundImage: `url(${pokemon.sprites.other.dream_world.front_default})` }}
        className="w-full h-full pt-5 bg-center bg-no-repeat bg-contain"
      ></div>
    </Card>
  );
};

export default ModalContent;
