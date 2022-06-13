import dummyData from "./dummyReposData";

test("dummyData function generates correct number of repos", () => {
  const repos = dummyData(3);
  expect(repos.length).toBe(3);
});

test("dummyData function generates correct data for each repo", () => {
  const repos = dummyData(2);
  expect(repos[0].githubId).toBe(1);
  expect(repos[0].name).toBe("Repo 1");
  expect(repos[0].stars).toBe(1);
  expect(repos[0].url).toBe("www.repo1.com");

  expect(repos[1].githubId).toBe(2);
  expect(repos[1].name).toBe("Repo 2");
  expect(repos[1].stars).toBe(2);
  expect(repos[1].url).toBe("www.repo2.com");
});
