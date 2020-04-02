import React from "react";

class Vote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      down: 10,
      up: 10
    };
  }

  downVote() {
    //   vote it down
  }

  upVote() {
    //   vote it up
  }

  render() {
    return (
      <div className="main">
        <h1>Vote buttons</h1>
        <section className="container">
          <div className="button-down">
            <button onClick={this.downVote}>Downvote 10</button>
          </div>
          <div className="button-up">
            <button onClick={this.upVote}>Upvote 10</button>
          </div>
        </section>
      </div>
    );
  }
}

export default Vote;
