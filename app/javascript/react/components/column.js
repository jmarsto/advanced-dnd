import React from 'react';
import Task from './task';

class Column extends React.Component {
  render() {
    return (
      <div className="container">
        <h3 className="title">{this.props.column.title}</h3>
        <div className="task-list">
          {this.props.task.map(task => <Task key={task.id} task={task} />)}
        </div>
      </div>
    )
  }
}

export default Column
