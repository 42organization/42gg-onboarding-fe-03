import type { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
import DefaultLayout from '@/components/layouts/DefaultLayout';

const Manager: NextPageWithLayout = () => {
  return (
    <div>
      <p>This is</p>
      <p>Manager</p>
      <p>page</p>
    </div>
  );
};

Manager.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Manager;
