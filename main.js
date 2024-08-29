const botonAgregar = document.getElementById("agregar");
const botonEliminar = document.getElementById("eliminar");
const elementoTareas = document.getElementById("lista");
const inputNombre = document.getElementById("nombre");

const db = window.localStorage;
const tareasIniciales = JSON.parse(db.getItem("listaDeTareas"));

const tareas = tareasIniciales ?? [];

if (tareas.length) {
  mostrarTareas(tareas);
}

botonAgregar.onclick = () => {
  if (inputNombre.value.trim() === "") return; // No agregar tareas vacías
  
  tareas.push(inputNombre.value.trim());
  db.setItem("listaDeTareas", JSON.stringify(tareas));
  mostrarTareas(tareas);
  inputNombre.value = "";
  inputNombre.focus();
}

botonEliminar.onclick = () => {
  tareas.pop(); // Eliminar la última tarea
  db.setItem("listaDeTareas", JSON.stringify(tareas));
  mostrarTareas(tareas);
}

function mostrarTareas(listaTareas) {
  elementoTareas.innerHTML = "";
  listaTareas.forEach((tarea, index) => {
    elementoTareas.innerHTML += `
      <div class="tarea">
        ${tarea}
        <button onclick="eliminarTarea(${index})">Eliminar</button>
      </div>
    `;
  });
}

function eliminarTarea(index) {
  tareas.splice(index, 1); // Eliminar la tarea en el índice especificado
  db.setItem("listaDeTareas", JSON.stringify(tareas));
  mostrarTareas(tareas);
}
