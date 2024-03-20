import React, { useState } from "react";


// Function to create a Todo component
// The 4 functions defined in the Todo component
function Todo({ task = "default todo", id = "1", remove, updateTodo }) {
    // Set the state of the task to be edited
    const [editTask, setEditTask] = useState(task);
    // Set the state of the task to be edited
  const [isEditing, setIsEditing] = useState(false);
    // Toggle the edit state
  const toggleEdit = () => {
    setIsEditing(edit => !edit);
  };
  // Handle the change of the task
    const handleChange = e => {
        setEditTask(e.target.value);
    };
// Handle the delete of the task
    const handleDelete = () => remove(id);
    // Handle the update of the task
    const handleUpdate = e => {
        // Prevent the default action
        e.preventDefault();
        updateTodo(id, editTask);
        setIsEditing(false);
    };
    // Default view
    let jsx = (
        <div>
            <li>{task}</li>
            <button onClick={toggleEdit}>Edit</button>
            <button onClick={handleDelete}>X</button>
        </div>
    );
    // Todo when editing
    if (isEditing) {
        jsx = (
            <div>
                <form onSubmit={handleUpdate}>
                    <input type="text" value={editTask} onChange={handleChange} />
                    <button>Update!</button>
                </form>
            </div>
        );
    }
    return jsx;
}
export default Todo;