import Card from '@components/Card';
import CloseButton from '@components/CloseButton';
import ProgressBar from '@components/ProgressBar';
import { renderColor } from '@helper/typeColor';
import { PokemonResponse } from '@reducers/home/type';

interface ModalContentProps {
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
  pokemon: PokemonResponse | null;
}

const ModalContent: React.FC<ModalContentProps> = ({ onClose, pokemon }) => {
  if (!pokemon) return null;

  return (
    <Card className="flex flex-col font-mono w-500 h-500">
      <div className="flex justify-end">
        <CloseButton onClose={onClose} />
      </div>
      <div className="flex flex-col w-full h-full p-3">
        <p className="font-bold text-left capitalize">{pokemon.name}</p>
        <div
          style={{ backgroundImage: `url(${pokemon.sprites.other.dream_world.front_default})` }}
          className="w-full pt-5 bg-center bg-no-repeat bg-contain h-1/3"
        ></div>
        <div className="flex flex-row justify-center gap-2 mt-3">
          {pokemon.types.map((val, index) => (
            <p
              key={index}
              className={`inline p-1 font-mono text-xs font-bold text-white uppercase rounded-md ${renderColor(
                val.type.name,
              )}`}
            >
              {val.type.name}
            </p>
          ))}
        </div>
        <div className="mt-5">
          <ul>
            {pokemon.stats.map((val, index) => (
              <li className="flex flex-row items-center justify-around" key={index}>
                <p className="w-full text-left capitalize">{val.stat.name.replace(/[^a-zA-Z ]/g, ' ')}</p>
                <p className="w-full">{val.base_stat}</p>
                <ProgressBar />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default ModalContent;
