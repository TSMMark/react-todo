!function () {
  'use strict';

  var supportedBrowser = !!window.localStorage

  if (!supportedBrowser) return

  function render () {
    var todoItems = TodoItemModel.findAll()

    todoItems = todoItems.map(function (model) {
      return(<TodoItem model={model}/>)
    })

    React.render(
      <TodoApp todoItems={todoItems} />,
      document.getElementById('todo-app')
    )
  }

  TodoItemModel.onChange(render)

  render()
}()
