import React from "react";

class VoteButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 10,
      disabled: ""
    };

    this.text = this.props.voteType === "Upvote" ? "Upvote" : "Downvote";
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state, props) => {
      console.log(state);
      !state.counter ? (state.disabled = true) : (state.disabled = false);
      return props.voteType === "Upvote"
        ? { counter: state.counter++ }
        : { counter: state.counter-- };
    });
  }

  render() {
    return (
      <div className="main">
        <button onClick={this.handleClick} disabled={this.state.disabled}>
          {this.text} {this.state.counter}
        </button>
      </div>
    );
  }
}

export default VoteButton;
