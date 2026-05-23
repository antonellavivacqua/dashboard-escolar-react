function TarjetaMateria({
  materia,
  eliminarMateria,
}) {
  return (
    <article className="materia-card">
      <h3>{materia.nombre}</h3>

      <p className="nota">
        Nota: {materia.nota}
      </p>

      <button
        className="delete-btn"
        onClick={() =>
          eliminarMateria(materia.id)
        }
      >
        Eliminar
      </button>
    </article>
  );
}

export default TarjetaMateria;