import React from "react";
import "./App.css";
import VoteButton from "./components/index";

function App() {
  return (
    <div className="App">
      <h1>Vote buttons</h1>
      <section className="container">
        <VoteButton voteType="Downvote" />
        <VoteButton voteType="Upvote" />
      </section>
    </div>
  );
}

export default App;
