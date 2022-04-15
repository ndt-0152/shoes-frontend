import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import LayoutPages from '../components/LayoutPages';
import HomeContainer from '../containers/HomeContainer';
import { fetchColors } from '../redux/color';
import { fetchGenders } from '../redux/gender';
import { getListProducts } from '../redux/product';
import { fetchSizes } from '../redux/size';
import { fetchSliders } from '../redux/slider';

const Home: NextPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSliders());
    dispatch(fetchColors());
    dispatch(fetchSizes());
    dispatch(fetchGenders());
    dispatch(getListProducts());
  }, []);

  return (
    <LayoutPages hasFooter>
      <HomeContainer />
    </LayoutPages>
  );
};

export default Home;
