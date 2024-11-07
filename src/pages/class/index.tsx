import React, { Component } from 'react';
import ChildClass from './child';

class ClassHome extends Component {
  constructor(props) {
    super(props);
    this.state = { count: [{ id: 1 }], color: 2 };
  }

  render() {
    return (
      <div>
        <button
          onClick={() => this.setState((state) => ({ color: state.color + 1 }))}
        >
          home-index: {this.state.color}
        </button>
        <ChildClass count={this.state.count} />
      </div>
    );
  }
}

export default ClassHome;
