import React from "react";

class Vote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      down: 10,
      up: 10
    };

    this.downVote = this.downVote.bind(this);
    this.upVote = this.upVote.bind(this);
  }

  downVote() {
    this.setState((state, props) => {
      console.log(props);

      return {
        down: state.down--
      };
    });
  }

  upVote() {
    this.setState((state, props) => {
      return {
        up: state.up++
      };
    });
  }

  render() {
    return (
      <div className="main">
        <h1>Vote buttons</h1>
        <section className="container">
          <div className="button-down">
            <button onClick={this.downVote}>Downvote {this.state.down}</button>
          </div>
          <div className="button-up">
            <button onClick={this.upVote}>Upvote {this.state.up}</button>
          </div>
        </section>
      </div>
    );
  }
}

export default Vote;
