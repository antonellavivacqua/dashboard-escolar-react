function Estadisticas({ materias, tareas }) {
  // Calcula promedio general
  const promedio =
    materias.length > 0
      ? (
          materias.reduce(
            (acc, materia) =>
              acc + Number(materia.nota),
            0
          ) / materias.length
        ).toFixed(1)
      : 0;

  // Calcula progreso de tareas
  const tareasCompletadas = tareas.filter(
    (tarea) => tarea.completada
  ).length;

  const progreso =
    tareas.length > 0
      ? Math.round(
          (tareasCompletadas / tareas.length) * 100
        )
      : 0;

  return (
    <section className="stats">
      <div className="stat-card">
        <h3>Promedio</h3>
        <p>{promedio}</p>
      </div>

      <div className="stat-card">
        <h3>Materias</h3>
        <p>{materias.length}</p>
      </div>

      <div className="stat-card">
        <h3>Progreso</h3>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${progreso}%`,
            }}
          ></div>
        </div>

        <span>{progreso}% completado</span>
      </div>
    </section>
  );
}

export default Estadisticas;