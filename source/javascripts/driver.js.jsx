!function () {
  'use strict';

  var supportedBrowser = !!window.localStorage
    , todoAppElement = document.getElementById('todo-app')

  if (!supportedBrowser || !todoAppElement) return

  function render () {
    var todoItems = TodoItemModel.findAll()

    todoItems = todoItems.map(function (model) {
      return(<TodoItem model={model}/>)
    })

    React.render(
      <TodoApp todoItems={todoItems} />,
      todoAppElement
    )
  }

  TodoItemModel.onChange(render)

  render()
}()
