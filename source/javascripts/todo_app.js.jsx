/** @jsx React.DOM */
'use strict';

window.TodoApp = React.createClass({
  getInitialState: function () {
    return {
      addNew: <input type="text" className="todo-item add-new"
               placeholder="Add an item..."
               onKeyDown={this.handleKeyDown} />
    }
  },

  render: function () {
    var numItems = this.props.todoItems.length
      , h1 = "I need to" +
             (numItems ? " do " + numItems + " things" : "") +
             "..."
    return(
      <div className="todo-app">
        <h1>{h1}</h1>
        <div className="todo-items">
          {this.props.todoItems}
          {this.state.addNew}
        </div>
        <p className="note">Click "Add an item", enter a title, hit the return key.</p>
      </div>
    )
  },

  handleKeyDown: function (event) {
    switch (parseInt(event.which)) {
    case TodoApp.ENTER_KEY:
      event.preventDefault()
      this.createTodoItem(event.target.value)
      this.clearAddNew(event.target)
      break
    case TodoApp.ESCAPE_KEY:
      this.clearAddNew(event.target)
      break
    }
  },

  createTodoItem: function (title) {
    TodoItemModel.create({
      title: title
    })
  },

  clearAddNew: function (element) {
    element.value = ""
  }
})

window.TodoApp.ENTER_KEY = 13
window.TodoApp.ESCAPE_KEY = 27
