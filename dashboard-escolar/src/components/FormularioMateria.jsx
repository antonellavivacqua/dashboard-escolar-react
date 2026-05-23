import { useState } from "react";

function FormularioMateria({
  materias,
  setMaterias,
}) {
  const [nombre, setNombre] = useState("");
  const [nota, setNota] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones básicas
    if (!nombre.trim()) {
      alert("Ingresá un nombre válido");
      return;
    }

    if (nota < 1 || nota > 10) {
      alert(
        "La nota debe ser un número entre 1 y 10"
      );
      return;
    }

    const nuevaMateria = {
      id: Date.now(),
      nombre,
      nota,
    };

    setMaterias([
      ...materias,
      nuevaMateria,
    ]);

    setNombre("");
    setNota("");
  };

  return (
    <form
      className="form"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Nombre de la materia"
        value={nombre}
        onChange={(e) =>
          setNombre(e.target.value)
        }
      />

      <input
        type="number"
        placeholder="Nota"
        min="1"
        max="10"
        value={nota}
        onChange={(e) =>
          setNota(e.target.value)
        }
      />

      <button type="submit">
        Agregar
      </button>
    </form>
  );
}

export default FormularioMateria;