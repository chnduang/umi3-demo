import React, { Component } from 'react';

interface childState {
  count: number;
}

class ChildClass extends Component<childState, childState> {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
  }

  shouldComponentUpdate(
    nextProps: Readonly<childState>,
    nextState: Readonly<childState>,
    nextContext: any,
  ): boolean {
    console.log('nextProps', nextProps, this.props);
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <button
        onClick={() => this.setState((state) => ({ count: state.count + 1 }))}
      >
        Count: {this.state.count}
      </button>
    );
  }
}

export default ChildClass;
