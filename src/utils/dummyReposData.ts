import { Repo } from "../interfaces";

const dummyData = (numberOfRepos: number): Repo[] => {
  const repos: Repo[] = [];
  for (let i = 1; i <= numberOfRepos; i++) {
    repos.push({
      githubId: i,
      name: `Repo ${i}`,
      stars: i,
      url: `www.repo${i}.com`,
      index: i,
      description: `Description of repo ${i}`,
      language: `Language of repo ${i}`,
      created_at: "2022-06-18T00:03:51Z",
    });
  }
  return repos;
};
export default dummyData;
