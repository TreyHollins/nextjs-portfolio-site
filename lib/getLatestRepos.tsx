import axios from "axios";

const getLatestRepos = async () => {
  try {
    const username = 'TreyHollins';

    let token = `token ${process.env.GITHUB_AUTH_TOKEN}`;

    if (token) {
      const res = await axios.get(
        `https://api.github.com/users/${username}/repos?sort=created&direction=desc`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      let repos = res.data;
      let latestSixRepos = repos.splice(0, 6);
      return latestSixRepos;
    } else {
      const res = await axios.get(
        `https://api.github.com/users/${username}/repos?sort=created&direction=desc`
      );
      let repos = res.data;
      let latestSixRepos = repos.splice(0, 6);
      return latestSixRepos;
    }
  } catch (err) {
    console.log(err);
  }
};

export default getLatestRepos;