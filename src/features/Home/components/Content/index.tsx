import Card from '@components/Card';
import Categories from '@components/Categories';
import { fetchCategories, fetchPokemon } from '@reducers/home/action';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'src/store';

const Content: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { pokemonData, categoriesData, isLoading } = useSelector((state: RootState) => state.home);

  useEffect(() => {
    dispatch(fetchPokemon());
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div>
      {isLoading ? (
        <p>Load...</p>
      ) : (
        <>
          <div className="flex flex-wrap justify-center gap-3">
            {categoriesData?.map((categories, index) => (
              <Categories key={index} text={categories.name} />
            ))}
          </div>
          <div className="w-full mt-5">
            <div className="flex flex-wrap justify-center gap-2 p-1">
              {pokemonData?.map((item, index) => (
                <Card key={index} name={item.name} img={item.sprites.front_default} color={item.color.name} />
              ))}
            </div>
          </div>
          <p className="mt-5 duration-300 cursor-pointer hover:text-red-500">Load More</p>
        </>
      )}
    </div>
  );
};

export default Content;
