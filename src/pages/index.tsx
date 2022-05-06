import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import LayoutPages from '../components/LayoutPages';
import { ITEMS_PER_PAGE } from '../configs';
import HomeContainer from '../containers/HomeContainer';
import { fetchColors } from '../redux/color';
import { fetchGenders } from '../redux/gender';
import { getBestProducts, getListProducts } from '../redux/product';
import { fetchSizes } from '../redux/size';
import { fetchSliders } from '../redux/slider';

const Home: NextPage = () => {
  const [search, setSearch] = useState<string | undefined>();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSliders());
    dispatch(fetchColors());
    dispatch(fetchSizes());
    dispatch(fetchGenders());
    dispatch(getListProducts({ offset: 0, limit: ITEMS_PER_PAGE }));
    dispatch(getBestProducts());
  }, []);

  const getDataSearch = (value?: string) => {
    setSearch(value);
  };

  return (
    <LayoutPages hasFooter getSearch={getDataSearch}>
      <HomeContainer search={search} />
    </LayoutPages>
  );
};

export default Home;
