import type { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
import { AccessType } from '@/types/accessType';
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
  return <DefaultLayout auth={1 as AccessType}>{page}</DefaultLayout>;
};

export default Home;
