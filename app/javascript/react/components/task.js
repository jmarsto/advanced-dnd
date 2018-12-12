import React from 'react';
import { Draggable } from 'react-beautiful-dnd'

class Task extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index} >
        {(provided) => (
          <div
            className="task-container"
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            innerRef={provided.innerRef}
          >
            {this.props.task.content}
          </div>
        )}
      </Draggable>
    )
  }
}

export default Task;
