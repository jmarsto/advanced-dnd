import React from 'react'
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from '../src/initialData'
import Column from './column'

class App extends React.Component {
  state = initialData;

  onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const startColumn = this.state.columns[source.droppableId];
    const finishColumn = this.state.columns[destination.droppableId];

    if (startColumn === finishColumn) {
      const newTaskIds = Array.from(startColumn.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...startColumn,
        taskIds: newTaskIds
      }

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn
        }
      }

      this.setState(newState);
      return;
    }

    const startColumnTaskIds = Array.from(startColumn.taskIds);
    startColumnTaskIds.splice(source.index, 1);
    const newStartColumn = {
      ...startColumn,
      taskIds: startColumnTaskIds
    }

    const finishColumnTaskIds = Array.from(finishColumn.taskIds);
    finishColumnTaskIds.splice(destination.index, 0, draggableId);
    const newFinishColumn = {
      ...finishColumn,
      taskIds: finishColumnTaskIds
    }

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStartColumn.id]: newStartColumn,
        [newFinishColumn.id]: newFinishColumn
      }
    }

    this.setState(newState);
    return;
  };

  render() {
    const columns = this.state.columnOrder.map((columnId) => {
      const column = this.state.columns[columnId];
      const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

      return (
        <Column key={column.id} column={column} task={tasks} />
      )
    })
    return (
        <DragDropContext onDragEnd={this.onDragEnd}>
          <div className="drag-drop">
            {columns}
          </div>
        </DragDropContext>
    )
  }
}


export default App
