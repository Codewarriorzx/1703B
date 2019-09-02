import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props)
    this.myRef = React.createRef()
  }
  state={
    msg:'你好'
  }
  render() {
    let {msg} = this.state
    return (
      <div ref={this.myRef}>
        hello world{msg}
        <div ref='aaa'>1111111</div>
      </div>
    )
  }
  componentWillMount(){
    console.log(this,"componentWillMount")
    
  }
  componentDidMount(){
    console.log(this,"componentDidMount")
    this.setState({msg:'zx'})
    console.log(this.myRef.current.innerText)
  }
  componentWillReceiveProps(){
    console.log(this,"componentWillReceiveProps")

  }
  shouldComponentUpdate(){
    console.log(this,"shouldComponentUpdate")
    return true
  }
  componentWillUpdate(){
    console.log(this,"componentWillUpdate")
    console.log(this.refs)
  }
  componentDidUpdate(){
    console.log(this,"componentDidUpdate")
    
  }
  componentWillUnmount(){
    console.log(this,"componentWillUnmount")

  }
  
}

