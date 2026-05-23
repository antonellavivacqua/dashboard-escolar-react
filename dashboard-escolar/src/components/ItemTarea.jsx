function ItemTarea({
  tarea,
  toggleTarea,
  eliminarTarea,
}) {
  return (
    <div className="tarea-item">
      <div className="tarea-left">
        <input
          type="checkbox"
          checked={tarea.completada}
          onChange={() =>
            toggleTarea(tarea.id)
          }
        />

        <p
          className={
            tarea.completada
              ? "texto-completado"
              : ""
          }
        >
          {tarea.texto}
        </p>
      </div>

      <button
        className="delete-btn"
        onClick={() =>
          eliminarTarea(tarea.id)
        }
      >
        X
      </button>
    </div>
  );
}

export default ItemTarea;