import { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";
import "./index.css";

function App() {
  // Estado global de materias
  const [materias, setMaterias] = useState(() => {
    const dataGuardada = localStorage.getItem("materias");
    return dataGuardada ? JSON.parse(dataGuardada) : [];
  });

  // Estado global de tareas
  const [tareas, setTareas] = useState(() => {
    const dataGuardada = localStorage.getItem("tareas");
    return dataGuardada ? JSON.parse(dataGuardada) : [];
  });

  // Persistencia automática en localStorage
  useEffect(() => {
    localStorage.setItem(
      "materias",
      JSON.stringify(materias)
    );
  }, [materias]);

  useEffect(() => {
    localStorage.setItem(
      "tareas",
      JSON.stringify(tareas)
    );
  }, [tareas]);

  return (
    <div className="app">
      <Dashboard
        materias={materias}
        setMaterias={setMaterias}
        tareas={tareas}
        setTareas={setTareas}
      />
    </div>
  );
}

export default App;