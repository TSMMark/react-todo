window.TodoItemModel = function (data) {
  this.data = Utils.merge({}, data)
}

TodoItemModel.changeCallbacks = []

TodoItemModel.onChange = function (fn) {
  TodoItemModel.changeCallbacks.push(fn)
}

TodoItemModel.callChangeCallbacks = function (fn) {
  TodoItemModel.changeCallbacks.forEach(function (fn) {
    fn()
  })
}

TodoItemModel.create = function (data) {
  var id = TodoItemModel.maxID() + 1
    , dataWithID = Utils.merge({}, data, { id: id })
    , model = new TodoItemModel(dataWithID)

  model.save()

  return model
}

TodoItemModel.findAll = function () {
  var i
    , max = TodoItemModel.maxID()
    , all = []

  for (i = 1; i <= max; i ++) {
    all.push(TodoItemModel.find(i))
  }

  return all
}

TodoItemModel.maxID = function () {
  return parseInt(localStorage.getItem("todo-items.maxID") || 0)
}

TodoItemModel.setMaxID = function (id) {
  if (id > TodoItemModel.maxID()) {
    localStorage.setItem("todo-items.maxID", id)
  }
}

TodoItemModel.find = function (id) {
  var title = localStorage.getItem("todo-items." + id + ".title")
    , done = localStorage.getItem("todo-items." + id + ".done") == "true"

  return new TodoItemModel({
    id: id,
    title: title,
    done: done
  })
}

TodoItemModel.prototype.save = function (data) {
  Utils.merge(this.data, data || {})

  TodoItemModel.setMaxID(this.data.id)
  localStorage.setItem("todo-items." + this.data.id + ".title", this.data.title)
  localStorage.setItem("todo-items." + this.data.id + ".done", this.data.done ? "true" : "false")

  TodoItemModel.callChangeCallbacks()
}
