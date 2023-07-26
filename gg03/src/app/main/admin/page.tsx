'use client';

import { useSession } from 'next-auth/react';

function AdminPage() {
  const { status } = useSession({
    required: true,
  });

  return (
    <div>
      <h1>ADMIN</h1>
    </div>
  );
}

export default AdminPage;
