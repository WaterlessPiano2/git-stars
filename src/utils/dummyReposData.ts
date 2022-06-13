import { Repo } from "../interfaces";

const dummyData = (numberOfRepos: number): Repo[] => {
  const repos: Repo[] = [];
  for (let i = 1; i <= numberOfRepos; i++) {
    repos.push({
      id: i,
      name: `Repo ${i}`,
      stars: i,
      url: `www.repo${i}.com`,
    });
  }
  return repos;
};
export default dummyData;
