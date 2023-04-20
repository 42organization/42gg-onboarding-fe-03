import type { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
import DefaultLayout from '@/components/layouts/DefaultLayout';

const PageB: NextPageWithLayout = () => {
  return (
    <div>
      <p>This is</p>
      <p>Normal B</p>
      <p>page</p>
    </div>
  );
};

PageB.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default PageB;
