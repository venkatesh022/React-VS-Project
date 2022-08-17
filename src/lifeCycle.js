import React from 'react'

class Container extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      show : true,
      count : 0
    }
  }

  delHeader = () => {
    this.setState({show : false})
  }

  componentDidMount(){
    console.log('ComponentDidMount Method');
  }

  componentDidUpdate(){
    console.log('ComponentDidUpdate Method');
  }

  render(){
    let myHeader;
    if(this.state.show){
      myHeader = <Child />
    }
    return(
      <div>
        <center>
          {myHeader}
          <button onClick={this.delHeader}>Delete Header</button> <hr /> <hr />
          <h3 style={{color : 'red'}}>Count : {this.state.count}</h3>
          <button onClick={() => this.setState({count : this.state.count+1})}>Increment</button>
        </center>
        <lifeCycle />
      </div>
    )
  }
}

class Child extends React.Component{
  componentWillUnmount(){
    console.log('ComponentWillUnmount Method');
  }
  render(){
    return(
      <h1>Life Cycle Method</h1>
    )
  }
}

export default Container;