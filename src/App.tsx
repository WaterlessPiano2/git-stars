/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-labels */
/* eslint-disable no-label-var */
import React, { useState, useEffect } from "react";
import "./App.css";
import List from "./components/List";
import { Repo } from "./interfaces";
import { getLocalData } from "./utils/localStore";
import useFetch from "./utils/useFetch";

function App() {
  const [currentFilter, setCurrentFilter] = useState("Showing all repos.");
  const [reposToShow, setReposToShow] = useState<Repo[]>([]);

  let date = new Date();
  date.setTime(date.getTime() - 7 * 86400000);
  const dateString = date.toISOString().split("T")[0];

  const [result, isLoading, error] = useFetch(
    `https://api.github.com/search/repositories?q=created:%3E${dateString}&sort=stars&order=desc`
  );

  useEffect(() => {
    if (result) {
      setReposToShow(repos);
    }
  }, [result]);

  const repos: Repo[] =
    typeof result !== "boolean"
      ? result
          .sort((a, b) => b["stargazers_count"] - a["stargazers_count"])
          .map((res, index) => {
            return {
              index: index + 1,
              name: res["full_name"],
              stars: res["stargazers_count"],
              url: res["html_url"],
              githubId: res["id"],
              description: res["description"],
              language: res["language"],
              created_at: res["created_at"],
            };
          })
      : [];

  const displayResults = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    } else if (error) {
      return <div>Error</div>;
    } else {
      return <List repos={reposToShow} />;
    }
  };

  const filterOut = (filter: string) => {
    const favourites = getLocalData("gitStars");
    if (filter === "Showing all repos.") {
      setCurrentFilter("Showing all repos.");
      setReposToShow(repos);
    } else if (filter === "Showing your favourites.") {
      setCurrentFilter("Showing your favourites.");
      setReposToShow(favourites);
    } else if (filter === "Showing your not favourites.") {
      setCurrentFilter("Showing your not favourites.");
      setReposToShow(
        repos.filter(
          (repo) => !favourites.find((fav) => fav["githubId"] === repo.githubId)
        )
      );
    } else {
      setCurrentFilter("Showing all repos.");
      setReposToShow(repos);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Top repositories created in the last week.</p>
        <p>
          <button
            onClick={() => filterOut("Showing all repos.")}
            className="filter"
          >
            Show All
          </button>
          <button
            onClick={() => filterOut("Showing your favourites.")}
            className="filter"
          >
            My Favouries
          </button>
          <button
            onClick={() => filterOut("Showing your not favourites.")}
            className="filter"
          >
            Not My Favourite
          </button>
        </p>
        <div>{currentFilter}</div>
        {displayResults()}
        <p className="link10">
          <a href="https://twitter.com/mo_solah">Mo_Solah on Twitter</a>
        </p>
        <p>Salih Cagdas Derya 2022</p>
      </header>
    </div>
  );
}

export default App;
