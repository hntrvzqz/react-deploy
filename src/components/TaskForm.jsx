import { useState, useContext } from "react";
import {TaskContext} from '../context/TaskContext'

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const {createTask} = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="bg-slate-600 p-10 mb-4 rounded-md">
          <h2 className="text-white text-center font-bold mb-2 text-2xl">Blog IPLF</h2>
      <input
        placeholder="Escribe una Tarea aqui ✏️"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="bg-slate-200 p-3 w-full mb-2 rounded-md"
        autoFocus
      />
      <textarea
        placeholder="aqui deja escrita la tarea oye.🤠"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="bg-slate-200 p-3 w-full mb-2 rounded-md"
      ></textarea>

      <button className="bg-blue-800 hover:bg-blue-300 text-white font-bold px-3 py-1 rounded-md">Guardar</button>
    </form>
    </div>
  );
}

export default TaskForm;
