import { useState } from "react";

interface Task {
    id: number;
    story: string;
    priority: string;
    dueDate: string;
    status: string;
  }
  
 
  const TaskList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([
        { id: 1, story: 'Implement login feature', priority: 'High', dueDate: '2023-10-01' , status: 'In Progress'},
        { id: 2, story: 'Setup database', priority: 'Medium', dueDate: '2023-10-15', status: 'In Progress' },
        { id: 3, story: 'Create landing page', priority: 'Low', dueDate: '2023-11-01', status: 'Completed' },
        { id: 4, story: 'Implement login feature', priority: 'High', dueDate: '2023-10-01' , status: 'Completed'},
        { id: 5, story: 'Setup database', priority: 'Medium', dueDate: '2023-10-15' , status: 'Open'},
        { id: 6, story: 'Create landing page', priority: 'Low', dueDate: '2023-11-01', status: 'Open' }
    ]);
      const [selectedTasks, setSelectedTasks] = useState<number[]>([]); // Explicitly type as array of numbers
    
      const toggleTaskSelection = (taskId: number) => {
        const newSelection = selectedTasks.includes(taskId)
          ? selectedTasks.filter(id => id !== taskId)
          : [...selectedTasks, taskId];
        setSelectedTasks(newSelection);
      };
    
      const deleteSelectedTasks = () => {
        setTasks(tasks.filter(task => !selectedTasks.includes(task.id)));
        setSelectedTasks([]); // Clear selection after deletion
      };
    
      const openSelectedTasks = () => {
        console.log('Opening tasks:', tasks.filter(task => selectedTasks.includes(task.id)));
      };
    
      return (
        <div >
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th className="text-left p-2"><input type="checkbox" onChange={(e) => {
                  const checked = e.target.checked;
                  setSelectedTasks(checked ? tasks.map(task => task.id) : []);
                }} /></th>
                <th className="text-left p-2">Story</th>
                <th className="text-left p-2">Priority</th>
                <th className="text-left p-2">Due Date</th>
                <th className="text-left p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map(task => (
                <tr key={task.id} className={selectedTasks.includes(task.id) ? 'table-active' : ''}>
                  <td className="p-2"><input type="checkbox" checked={selectedTasks.includes(task.id)} onChange={() => toggleTaskSelection(task.id)} /></td>
                  <td className="p-2">{task.story}</td>
                  <td className="p-2">{task.priority}</td>
                  <td className="p-2">{task.dueDate}</td>
                  <td className="p-2">{task.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn btn-secondary" onClick={deleteSelectedTasks}>Delete Selected</button>
          <button className="btn btn-primary mx-4" onClick={openSelectedTasks}>Open Selected</button>
        </div>
      );
}

export default TaskList;