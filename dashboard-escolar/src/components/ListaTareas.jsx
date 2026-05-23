import ItemTarea from "./ItemTarea";

function ListaTareas({
  tareas,
  setTareas,
}) {
  // Cambia el estado completada
  const toggleTarea = (id) => {
    const nuevasTareas = tareas.map(
      (tarea) =>
        tarea.id === id
          ? {
              ...tarea,
              completada:
                !tarea.completada,
            }
          : tarea
    );

    setTareas(nuevasTareas);
  };

  // Elimina tarea
  const eliminarTarea = (id) => {
    const nuevasTareas = tareas.filter(
      (tarea) => tarea.id !== id
    );

    setTareas(nuevasTareas);
  };

  return (
    <div className="lista-tareas">
      {tareas.map((tarea) => (
        <ItemTarea
          key={tarea.id}
          tarea={tarea}
          toggleTarea={toggleTarea}
          eliminarTarea={eliminarTarea}
        />
      ))}
    </div>
  );
}

export default ListaTareas;