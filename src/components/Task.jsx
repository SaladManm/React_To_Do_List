import "../App.css";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React, { useState } from 'react';

function Task({ name, deleteTask, taskId, editTask, checkState }) {
  const [isChecked, setIsChecked] = useState(checkState);
  const [isEditing, setEdit] = useState(false);
  const [newName, setName] = useState(name);

  const changeCheck = () => {
    setIsChecked(!isChecked);
    editTask(taskId, newName, !isChecked);
  };

  const startEditing = () => setEdit(true);

  const editing = (event) => setName(event.target.value);

  const save = () => {
    editTask(taskId, newName, isChecked);
    setEdit(false);
  };

  return (
    <div className="task">
      <div className="informations">
        <input type="checkbox" checked={isChecked} onChange={changeCheck} />
        {isEditing ? (
          <input type="text" value={newName} onChange={editing} onBlur={save} autoFocus />
        ) : (
          <p>{newName}</p>
        )}
      </div>
      <div className="informations">
        <span><DeleteIcon onClick={deleteTask} /></span>
        <span><EditIcon onClick={startEditing} /></span>
      </div>
    </div>
  );
}

export default Task;
