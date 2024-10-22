import React, { Component } from "react";
import "./Todoapp.css";

class Todoapp extends Component {
  state = {
    firstinput: "",
    lastinput: "",
    arr1: [],
    arr2: [],
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(this.state.firstinput);
    console.log(this.state.lastinput);
  };
  storeItem = (event) => {
    event.preventDefault();
    const { firstinput, lastinput } = this.state;
    this.setState({
      arr1: [...this.state.arr1, firstinput],
      arr2: [...this.state.arr2, lastinput],
      firstinput : "",
      lastinput :""
      
    });
  };
  deleteItem2 =key2=>{
    const items2 = this.state.arr2;
    items2.splice(key2, 1);

    this.setState({
      arr2 :items2
    })

  };
  deleteItem1 =key1=>{
    const items1 = this.state.arr1;
    items1.splice(key1, 1);

    this.setState({
      arr1 :items1
    })

  };
  render() {
    const { firstinput, lastinput, arr1, arr2 } = this.state;
    console.log(arr1, arr2);
    return (
      <div className="main-div">
        <form onSubmit={this.storeItem}>
          <div className="second-div">
            <h1>Calculator</h1>

            <input
              className="in1"
              type="text"
              name="firstinput"
              vlaue={firstinput}
              onChange={this.handleChange}
              placeholder="enter your first digit"
            />
            <input
              className="in2"
              type="text"
              name="lastinput"
              vlaue={lastinput}
              onChange={this.handleChange}
              placeholder="enter your second digit"
            />
            <br />
            <button className="b1">add</button>
            <button className="b2">sustract</button>
            <button className="b3">multiply</button>
            <button className="b4">division</button>
          </div>
          <ul>
            {arr1.map((data1, index1) => (
              <li key={index1}>
                first digit : {data1}
                <i className="fa-regular fa-trash-can" onClick={() => this.deleteItem1(index1)}></i>
              </li>
            ))}

            {arr2.map((data2, index2) => (
              <li key={index2}>
                second  digit : {data2}
                <i className="fa-regular fa-trash-can" onClick={() => this.deleteItem2(index2)}></i>
              </li>
            ))}
          </ul>
        </form>
      </div>
    );
  }
}
export default Todoapp;
