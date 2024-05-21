import Card from '@components/Card';
import CardSkeleton from '@components/Card/CardSkeleton';
import Categories from '@components/Categories';
import CategoriesSkeleton from '@components/Categories/CategoriesSkeleton';
import Modal from '@components/Modal';
import { fetchCategories, fetchPokemon } from '@reducers/home/action';
import { PokemonResponse } from '@reducers/home/type';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'src/store';
import CardContent from './CardContent';
import ModalContent from './ModalContent';

const Content: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [offset, setOffset] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showPopupEachPokemon, setPopupEachPokemon] = useState<boolean>(false);
  const [eachPokemon, setEachPokemon] = useState<PokemonResponse | null>(null);
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

  const selectCategories = (category: string) => {
    setSelectedCategory(category);
  };

  const showPokemonDetail = (item: PokemonResponse) => {
    setPopupEachPokemon(true);
    setEachPokemon(item);
  };

  const filteredPokemonData =
    selectedCategory === 'all'
      ? pokemonData
      : pokemonData?.filter(pokemon => pokemon.types.find(type => type.type.name === selectedCategory));

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
            <Categories
              key={index}
              text={categories.name}
              onClick={() => selectCategories(categories.name)}
              isActive={categories.name === selectedCategory}
            />
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
              {filteredPokemonData?.length !== 0 ? (
                <>
                  {filteredPokemonData?.map(item => (
                    <Card
                      key={item.id}
                      onClick={() => showPokemonDetail(item)}
                      className="flex flex-col justify-center w-48 h-48 duration-300 cursor-pointer group hover:bg-slate-500"
                    >
                      <CardContent
                        name={item.name}
                        img={item.sprites.other.dream_world.front_default}
                        types={item.types}
                      />
                    </Card>
                  ))}
                </>
              ) : (
                <p className="text-center">No Pokemon found in this category.</p>
              )}
            </div>
          </div>
          {filteredPokemonData?.length !== 0 && (
            <p className="mt-5 duration-300 cursor-pointer hover:text-red-500" onClick={loadMore}>
              Load More
            </p>
          )}
        </>
      )}
      <Modal show={showPopupEachPokemon}>
        <ModalContent onClose={() => setPopupEachPokemon(!showPopupEachPokemon)} pokemon={eachPokemon} />
      </Modal>
    </div>
  );
};

export default Content;
