import React, { Component } from 'react';

class FuncEcho extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      val: 0,
    };
  }

  componentDidMount() {
    // this.setState({
    //   val: this.state.val + 1,
    // });
    this.setState((pre) => ({
      val: pre.val + 1,
    }));
    console.log('a---', this.state.val);
    // this.setState({
    //   val: this.state.val + 2,
    // });
    this.setState((pre) => ({
      val: pre.val + 7,
    }));
    console.log('b---', this.state.val);
    setTimeout(() => {
      this.setState((pre) => ({
        val: pre.val + 3,
      }));
      this.setState({ val: this.state.val + 3 });
      console.log('c---', this.state.val);
      //   this.setState((pre) => ({
      //     val: pre.val + 4,
      //   }));
      this.setState({ val: this.state.val + 5 });
      console.log('d---', this.state.val);
    }, 10);
  }

  // ! setState使用函数时不会覆盖， a: 使用函数，b: 正常set; a 在前时 b会覆盖； b 在前时 a不会覆盖；
  handleClick = () => {
    console.log('---start---', this.state.val);

    // this.setState((pre) => ({
    //   val: pre.val + 1,
    // }));
    // this.setState({
    //   val: this.state.val + 1,
    // });
    Promise.resolve().then(() => {
      console.log('promise--then');
    });
    this.setState(
      {
        val: this.state.val + 1,
      },
      () => {
        console.log('this.state', this.state.val);
      },
    );
    console.log('---end---', this.state.val);
  };

  render() {
    return (
      <>
        <div onClick={this.handleClick}>test function echo{this.state.val}</div>
      </>
    );
  }
}

export default FuncEcho;
