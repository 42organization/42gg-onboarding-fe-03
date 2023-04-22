import type { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
import { AccessType } from '@/types/accessType';
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
  return <DefaultLayout auth={3 as AccessType}>{page}</DefaultLayout>;
};

export default Admin;
