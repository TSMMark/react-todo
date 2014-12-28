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
    return(
      <div className="todo-items">
        {this.props.todoItems}
        {this.state.addNew}
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
