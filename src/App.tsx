import React from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";
import { Repo } from "./interfaces";
import dummyData from "./utils/dummyReposData";
import useFetch from "./utils/useFetch";

function App() {
  useFetch(
    "https://api.github.com/search/repositories?q=created:%3E2017-01-10&sort=stars&order=desc"
  );

  const repos: Repo[] = dummyData(1);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <List repos={repos} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
