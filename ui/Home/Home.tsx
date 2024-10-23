import { Suspense } from 'react';
import Carousel from './Carousel';
import Products from './Products';

function Home() {
  return (
    <>
      <Carousel />
      <Suspense>
        <Products />
      </Suspense>
    </>
  );
}

export default Home;
