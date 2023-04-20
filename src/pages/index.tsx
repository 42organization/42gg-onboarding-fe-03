import type { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
import DefaultLayout from '@/components/layouts/DefaultLayout';

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <p>This is</p>
      <p>Home</p>
      <p>page</p>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Home;
