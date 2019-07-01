import React, { Component } from "react";
import { render } from "react-dom";
import "./index.css";

class WalkDogListItem extends React.Component {
  render() {
    return (
      <tr class="todo-list-item">
        <td>Walk Dog</td>
        <td>
          <input type="checkbox" checked />
        </td>
      </tr>
    );
  }
}
class BuyBreadListItem extends React.Component {
  render() {
    return (
      <tr class="todo-list-item">
        <td>Bu Bread</td>
        <td>
          <input type="checkbox" />
        </td>
      </tr>
    );
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>
          Get It Done! <br />
          <small>For the truly industrious</small>
        </h1>
        <table>
          <thead>
            <tr>
              <td>Task</td>
              <td>Done?</td>
            </tr>
          </thead>
          <tbody>
            <WalkDogListItem />
            <BuyBreadListItem />
          </tbody>
        </table>
      </div>
    );
  }
}

render(<TodoList />, document.getElementById("root"));
