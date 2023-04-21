import { GetStaticProps, GetStaticPaths } from 'next';
import data from '../../data.json';
import { useRouter } from 'next/router';

type UserProps = {
  email: string;
  name: string;
};

type Props = {
  user: UserProps;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = data.users.map((user) => ({
    params: { pid: user.email },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const { pid } = params;
  const user = data.users.find((u) => u.email === pid);
  return { props: { user } };
};

const UserPage = ({ user }: Props) => {
  const router = useRouter();

  return (
    <div>
      <h1>User Detail</h1>
      <p>Email: {user.email}</p>
      <p>Name: {user.name}</p>
      <button onClick={() => router.back()}>Back</button>
    </div>
  );
};

export default UserPage;