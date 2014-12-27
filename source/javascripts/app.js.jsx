/** @jsx React.DOM */
window.APP = {}

!function () {
  'use strict';

  var TodoApp
    , todoItems

  TodoApp = React.createClass({
    render: function () {
      return(
        <div className="todo-items">
          {todoItems}
        </div>
      )
    }
  })

  todoItems = [1,2,3, 4, 5].map(function () {
    return(<TodoItem />);
  });

  React.render(
    <TodoApp todoItems={todoItems} />,
    document.getElementById('todo-app')
  )
}()
