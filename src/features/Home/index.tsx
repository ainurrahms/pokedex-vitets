import pokeBallLogo from '@assets/pokeball-pokemon.svg';

const Home = () => {
  return (
    <div>
      <a href="https://react.dev" target="_blank">
        <img src={pokeBallLogo} className="logo react" alt="React logo" />
      </a>
    </div>
  );
};

export default Home;
