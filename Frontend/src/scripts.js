document.addEventListener("DOMContentLoaded", () => {
  const buscador = document.getElementById("buscador");
  const sugerencias = document.getElementById("sugerencias");
  const listaComidas = document.getElementById("lista-comidas");

  let recetas = [];

  // Cargar recetas desde JSON
  fetch("data/recetas.json")
    .then(res => res.json())
    .then(data => {
      recetas = data;
      mostrarTodasLasRecetas(recetas); // Cargar todo al principio
    });

  // Mostrar recetas en cuadrícula
  function mostrarTodasLasRecetas(lista) {
    listaComidas.innerHTML = "";
    lista.forEach(receta => {
      const div = document.createElement("div");
      div.className = "card-comida";
      div.innerHTML = `
        <img src="${receta.imagen}" alt="${receta.titulo}">
        <h3>${receta.titulo}</h3>
        <a href="receta.html?id=${receta.id}" class="btn-ver">Ver Receta</a>
      `;
      listaComidas.appendChild(div);
    });
  }

  // Autocompletar
  buscador.addEventListener("input", () => {
    const termino = buscador.value.toLowerCase();
    sugerencias.innerHTML = "";

    if (termino.length > 0) {
      const filtradas = recetas.filter(r => r.titulo.toLowerCase().includes(termino));
      
      filtradas.forEach(r => {
        const li = document.createElement("li");
        li.textContent = r.titulo;
        li.onclick = () => {
          window.location.href = `receta.html?id=${r.id}`;
        };
        sugerencias.appendChild(li);
      });
    }
  });

  // Ocultar sugerencias al hacer clic fuera
  document.addEventListener("click", (e) => {
    if (!buscador.contains(e.target)) {
      sugerencias.innerHTML = "";
    }
  });
});
