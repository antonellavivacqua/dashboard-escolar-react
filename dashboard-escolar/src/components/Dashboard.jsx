import Estadisticas from "./Estadisticas";
import FormularioMateria from "./FormularioMateria";
import GridMaterias from "./GridMaterias";
import FormularioTarea from "./FormularioTarea";
import ListaTareas from "./ListaTareas";

import "../styles/dashboard.css";

function Dashboard({
  materias,
  setMaterias,
  tareas,
  setTareas,
}) {
  return (
    <main className="dashboard">
      <header className="dashboard-header">
        <h1>Dashboard Escolar</h1>
        <p>
          Gestión de materias, notas y tareas
        </p>
      </header>

      <Estadisticas
        materias={materias}
        tareas={tareas}
      />

      <section className="section">
        <div className="section-title">
          <h2>Materias</h2>
        </div>

        <FormularioMateria
          materias={materias}
          setMaterias={setMaterias}
        />

        <GridMaterias
          materias={materias}
          setMaterias={setMaterias}
        />
      </section>

      <section className="section">
        <div className="section-title">
          <h2>Tareas</h2>
        </div>

        <FormularioTarea
          tareas={tareas}
          setTareas={setTareas}
        />

        <ListaTareas
          tareas={tareas}
          setTareas={setTareas}
        />
      </section>
    </main>
  );
}

export default Dashboard;