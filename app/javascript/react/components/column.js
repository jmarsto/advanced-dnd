import { Droppable } from 'react-beautiful-dnd';
import React from 'react';
import Task from './task';

class Column extends React.Component {
  render() {
    return (
      <div className="container">
        <h3 className="title">{this.props.column.title}</h3>
        <Droppable droppableId={this.props.column.id}>
          {(provided) => (
            <div
              className="task-list"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {this.props.task.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    )
  }
}

export default Column
