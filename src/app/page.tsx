import { GetServerSideProps } from 'next';
import Profile from '../components/Profile';

interface HomeProps {
  token: string;
}

const Home: React.FC<HomeProps> = ({ token }) => {
  // if (!token) {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen">
  //       <a
  //         href={`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&scope=user,repo`}
  //         className="bg-blue-500 text-white px-4 py-2 rounded"
  //       >
  //         Login with GitHub
  //       </a>
  //     </div>
  //   );
  // }

  return <Profile token={token} />;
};

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const user = getUserFromCookie(ctx);

//   if (!user) {
//     return {
//       props: {
//         token: null,
//       },
//     };
//   }

//   return {
//     props: {
//       token: user.access_token,
//     },
//   };
// };

export default Home;
