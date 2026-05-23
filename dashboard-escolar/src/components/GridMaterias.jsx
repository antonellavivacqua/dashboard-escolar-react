import TarjetaMateria from "./TarjetaMateria";

function GridMaterias({
  materias,
  setMaterias,
}) {
  const eliminarMateria = (id) => {
    const nuevasMaterias = materias.filter(
      (materia) => materia.id !== id
    );

    setMaterias(nuevasMaterias);
  };

  return (
    <div className="grid-materias">
      {materias.map((materia) => (
        <TarjetaMateria
          key={materia.id}
          materia={materia}
          eliminarMateria={eliminarMateria}
        />
      ))}
    </div>
  );
}

export default GridMaterias;