/** @jsx React.DOM */

!function () {
  'use strict';

  var TodoApp = React.createClass({
    render: function () {
      return <p>This is the to-do app</p>;
    }
  });

  React.render(
    <TodoApp />,
    document.getElementById('todo-app')
  );
}();
