import Card from '@components/Card';
import CardSkeleton from '@components/Card/CardSkeleton';
import Categories from '@components/Categories';
import CategoriesSkeleton from '@components/Categories/CategoriesSkeleton';
import { fetchCategories, fetchPokemon } from '@reducers/home/action';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'src/store';

const Content: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [offset, setOffset] = useState(0);
  const limit = 12;

  const { pokemonData, isLoadingPokemonData, isLoadingCategoriesData, categoriesData, numSkeleton } = useSelector(
    (state: RootState) => state.home,
  );

  useEffect(() => {
    dispatch(fetchPokemon({ limit, offset }));
    dispatch(fetchCategories());
  }, [dispatch, limit, offset]);

  const loadMore = () => {
    setOffset(prevOffset => prevOffset + limit);
  };

  return (
    <div>
      {isLoadingCategoriesData ? (
        <div className="flex flex-wrap justify-center gap-3">
          {[...Array(numSkeleton)].map((_, index) => (
            <CategoriesSkeleton key={index} />
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-3">
          {categoriesData?.map((categories, index) => (
            <Categories key={index} text={categories.name} />
          ))}
        </div>
      )}

      {isLoadingPokemonData ? (
        <>
          <div className="w-full mt-5">
            <div className="flex flex-wrap justify-center gap-2 p-1">
              {[...Array(numSkeleton)].map((_, index) => (
                <CardSkeleton key={index} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-full mt-5">
            <div className="flex flex-wrap justify-center gap-2 p-1">
              {pokemonData?.map((item, index) => (
                <Card key={index} name={item.name} img={item.sprites.front_default} color={item.color.name} />
              ))}
            </div>
          </div>
          <p className="mt-5 duration-300 cursor-pointer hover:text-red-500" onClick={loadMore}>
            Load More
          </p>
        </>
      )}
    </div>
  );
};

export default Content;
