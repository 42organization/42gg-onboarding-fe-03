import React from 'react'
import LoginInput from '@/component/LoginInput'
import { NextPage } from 'next'
import { withoutLogin } from '@/component/PrivateRoute'

const Home: NextPage = () : JSX.Element => {
  withoutLogin();

  return (
      <main>
        <LoginInput />
      </main>
  )
}

export default Home;

// import React from 'react';
// import LoginInput from '@/component/LoginInput';
// import { NextPage, NextPageContext } from 'next';
// import axios from 'axios';

// interface HomeProps {
//   token?: string;
// }

// const Home: NextPage<HomeProps> = ({ token }) => {
//   console.log(token);
//   axios.get("")

//   return (
//     <main>
//       <LoginInput />
//     </main>
//   );
// };

// Home.getInitialProps = async (ctx: NextPageContext) => {
//   const token = ctx.req?.headers.cookie?.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
//   return { token };
// };

// export default Home;
