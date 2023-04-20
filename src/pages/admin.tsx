import type { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
import DefaultLayout from '@/components/layouts/DefaultLayout';

const Admin: NextPageWithLayout = () => {
  return (
    <div>
      <p>This is</p>
      <p>Admin</p>
      <p>page</p>
    </div>
  );
};

Admin.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Admin;
