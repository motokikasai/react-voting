import React from "react";
import "./App.css";
import Vote from "./components/index";

function App() {
  return (
    <div className="App">
      <Vote up="Upvote" down="Downvote" />
    </div>
  );
}

export default App;
