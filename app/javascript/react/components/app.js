import React from 'react'
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from '../src/initialData'
import Column from './column'

class App extends React.Component {
  state = initialData;

  onDragEnd = result => {

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
          <div>
            {columns}
          </div>
        </DragDropContext>
    )
  }
}


export default App
