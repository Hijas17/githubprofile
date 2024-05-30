import { useQuery } from 'react-query';
import axios from 'axios';

const fetchGitHubData = async (token: string) => {
  const { data: user } = await axios.get('https://api.github.com/user', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const { data: repos } = await axios.get('https://api.github.com/user/repos', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const { data: followers } = await axios.get('https://api.github.com/user/followers', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const { data: following } = await axios.get('https://api.github.com/user/following', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return { user, repos, followers, following };
};

export const useGitHubData = (token: string) => {
  return useQuery(['githubData', token], () => fetchGitHubData(token));
};
