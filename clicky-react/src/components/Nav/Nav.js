import React from "react"
import "./nav.css"

// By extending the React.Component class, Counter inherits functionality from it
class Nav extends React.Component {
    // Setting the initial state of the Counter component
    state = {
      score: 0,
      topScore : 0
    };

    checkScore = () => {
        if (this.state.score > this.state.topScore) {
            this.state.topScore = this.state.score;
        }
    }

    // handleIncrement increments this.state.count by 1
    handleIncrement = () => {
      // We always use the setState method to update a component's state
      this.setState({score: this.state.score + 1 });
    };

    // The render method returns the JSX that should be rendered
    render() {
      return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <a className="nav-link title">Clicky Game</a>
            </li>
            <li className="nav-item">
                <p className="nav-link">correctConfirm</p>
            </li>
            <li className="nav-item ">
                <p className="nav-link score">Score:  {this.state.score} | Top score: {this.state.topScore}</p>
            </li>
        </ul>
      );
    }
}

export default Nav

