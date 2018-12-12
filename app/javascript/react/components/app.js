import React from 'react'
import initialData from '../src/initialData'
import Column from './column'

class App extends React.Component {
  state = initialData;

  render() {
    const columns = this.state.columnOrder.map((columnId) => {
      const column = this.state.columns[columnId];
      const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

      return (
        <Column key={column.id} column={column} task={tasks} />
      )
    })
    return (
      <div>
        {columns}
      </div>
    )
  }
}


export default App
