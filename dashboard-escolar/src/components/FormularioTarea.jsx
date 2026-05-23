import { useState } from "react";

function FormularioTarea({
  tareas,
  setTareas,
}) {
  const [texto, setTexto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!texto.trim()) {
      alert("Ingresá una tarea");
      return;
    }

    const nuevaTarea = {
      id: Date.now(),
      texto,
      completada: false,
    };

    setTareas([
      ...tareas,
      nuevaTarea,
    ]);

    setTexto("");
  };

  return (
    <form
      className="form"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Nueva tarea"
        value={texto}
        onChange={(e) =>
          setTexto(e.target.value)
        }
      />

      <button type="submit">
        Añadir
      </button>
    </form>
  );
}

export default FormularioTarea;