/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-labels */
/* eslint-disable no-label-var */
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";
import { Repo } from "./interfaces";
import dummyData from "./utils/dummyReposData";
import useFetch from "./utils/useFetch";

function App() {
  let date = new Date();
  date.setTime(date.getTime() - 7 * 86400000);
  const dateString = date.toISOString().split("T")[0];

  const [result, isLoading, error] = useFetch(
    `https://api.github.com/search/repositories?q=created:%3E${dateString}&sort=stars&order=desc`
  );

  const repos: Repo[] =
    typeof result !== "boolean"
      ? result.map((res, index) => {
          return {
            name: res["full_name"],
            stars: res["stargazers_count"],
            url: res["html_url"],
            id: index,
          };
        })
      : [];

  const displayResults = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    } else if (error) {
      return <div>Error</div>;
    } else {
      return <List repos={repos} />;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Top repositories created in the last week.</p>
        {displayResults()}
        <p>Salih Cagdas Derya 2022</p>
      </header>
    </div>
  );
}

export default App;
