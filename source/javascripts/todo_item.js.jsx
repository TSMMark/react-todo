/** @jsx React.DOM */
'use strict';

window.TodoItem = React.createClass({
  render: function () {
    var classes = React.addons.classSet({
          "todo-item": true,
          "done": this.props.model.data.done
        })

    return(
      <div className={classes} onClick={this.toggleStatus}>
        {this.props.model.data.title}
      </div>
    )
  },

  toggleStatus: function (event) {
    event.preventDefault()
    this.props.model.save({
      done: !this.props.model.data.done
    })
  }
})
