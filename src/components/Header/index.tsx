import pokeBallLogo from '@assets/pokeball-pokemon.svg';

const Header = () => {
  return (
    <div className="flex">
      <img src={pokeBallLogo} className="logo motion-safe:animate-spin" alt="React Pokeball" />
      <p className="flex items-center mx-auto my-0 text-2xl font-bold text-red-500">PokeDex Pedia</p>
    </div>
  );
};

export default Header;
