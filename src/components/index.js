import React from "react";

class VoteButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 10
    };

    this.text = this.props.voteType === "Upvote" ? "Upvote" : "Downvote";
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // this.setState((state, props) => {
    //   console.log(state);
    //   return props.voteType === "Upvote" ? state.counter++ : state.counter--;
    // });

    this.setState((state, props) => {
      console.log(state);

      let updatedCounter = state.counter;
      if (props.voteType === "Upvote") {
        updatedCounter++;
      } else {
        updatedCounter--;
      }
      return {
        counter: updatedCounter
      };
    });
  }

  render() {
    return (
      <div className="main">
        <button onClick={this.handleClick}>
          {this.text} {this.state.counter}
        </button>
      </div>
    );
  }
}

export default VoteButton;
