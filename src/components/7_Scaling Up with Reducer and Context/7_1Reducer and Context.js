import AddTask from './7.1.2AddTask.js';
import TaskList from './7.1.3TaskList.js';
import { TasksProvider } from './7.1.1TasksProvider.js';

export default function TaskApp() {
  return (
    <div>
      <h2>1. Reduce, Context and Provider in one file</h2>
      <h3>Day off in Kyoto</h3>
    <TasksProvider>
      <AddTask />
      <TaskList />
    </TasksProvider>
    </div>
  )
}