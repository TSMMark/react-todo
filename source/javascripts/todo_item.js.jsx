/** @jsx React.DOM */
'use strict';

window.TodoItem = React.createClass({
  getInitialState: function () {
    return {
      editing: false
    }
  },

  render: function () {
    var classes = React.addons.classSet({
          "todo-item": true,
          "done": this.props.model.data.done,
          "editing": this.state.editing
        })
      , statusActionClasses = React.addons.classSet({
          "fa": true,
          "fa-check": !this.props.model.data.done,
          "fa-undo": this.props.model.data.done
        })
      , editActionClasses = React.addons.classSet({
          "fa": true,
          "fa-edit": !this.state.editing,
          "fa-save": this.state.editing,
          "hidden": this.props.model.data.done
        })

    return(
      <div className={classes}>
        <div className="todo-item-text">
          {this.props.model.data.title}
        </div>
        <input className="edit-field" type="text"
               ref="editField"
               defaultValue={this.props.model.data.title}
               onKeyDown={this.handleKeyDown} />
        <div className="todo-item-actions">
          <span className={statusActionClasses} onClick={this.toggleStatus}></span>
          <span className={editActionClasses} onClick={this.toggleEdit}></span>
        </div>
      </div>
    )
  },

  toggleStatus: function (event) {
    event.preventDefault()
    this.props.model.save({
      done: !this.props.model.data.done
    })
  },

  toggleEdit: function (event) {
    event.preventDefault()
    if (this.state.editing) {
      this.saveEdits()

    }
    else {
      var editField = this.refs.editField.getDOMNode()
      Utils.async(function () {
        editField.select();
      })
    }

    this.setEditing(!this.state.editing)
  },

  handleKeyDown: function (event) {
    switch (parseInt(event.which)) {
    case TodoItem.ENTER_KEY:
      this.saveEdits()
      this.setEditing(false)
      break
    case TodoItem.ESCAPE_KEY:
      this.refs.editField.getDOMNode().value = this.props.model.data.title
      this.setEditing(false)
      break
    }
  },

  setEditing: function (isEditing) {
    this.setState({
      editing: isEditing
    })
  },

  saveEdits: function () {
    this.props.model.save({
      title: this.refs.editField.getDOMNode().value
    })
  }
})

window.TodoItem.ENTER_KEY = 13
window.TodoItem.ESCAPE_KEY = 27
