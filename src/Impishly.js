//Impishly.js

//Component class from react modules
import React, { Component } from 'react';
import './Impishly.css';

class Impishly extends Component {
    //instantiation, calls out to parent super 
    constructor(props) {
        super(props);
        this.state = { greeting: 'I read ' };
        this.notRead = this.notRead.bind(this);
    }

notRead() {
  this.setState({ greeting: "I did not read " });
}

  render() {
    return (
      <div className="Impishly">{this.state.greeting}
        {this.props.book}!
            <br/>
            <button onClick=
        {this.notRead}>Not Read!</button>
            </div>
    );
  }
}
export default Impishly;
