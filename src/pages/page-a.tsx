import type { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
import DefaultLayout from '@/components/layouts/DefaultLayout';

const PageA: NextPageWithLayout = () => {
  return (
    <div>
      <p>This is</p>
      <p>Normal A</p>
      <p>page</p>
    </div>
  );
};

PageA.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default PageA;
