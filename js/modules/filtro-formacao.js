export default function initFiltroCursos() {
  const botoesFiltro = document.querySelectorAll(".filtros-cursos .btn");
  const gruposCursos = document.querySelectorAll(
    ".certificacoes .grupo-formacao",
  );

  if (botoesFiltro.length && gruposCursos.length) {
    function filtrarCursos(event) {
      const botaoClicado = event.currentTarget;
      const categoriaFiltro = botaoClicado.dataset.filtro;

      botoesFiltro.forEach((btn) => btn.classList.remove("ativo"));
      botaoClicado.classList.add("ativo");

      gruposCursos.forEach((grupo) => {
        const categoriaGrupos = grupo.dataset.categoria;
        const cardsNoGrupo = grupo.querySelectorAll(".card-curso");

        if (
          categoriaFiltro === "todos" ||
          categoriaGrupos === categoriaFiltro
        ) {
          grupo.style.display = "block";
          cardsNoGrupo.forEach((card) => {
            card.style.animation = "none";
            card.offsetHeight;
            card.style.animation = null;
          });
        } else {
          grupo.style.display = "none";
        }
      });
    }

    botoesFiltro.forEach((btn) => {
      btn.addEventListener("click", filtrarCursos);
    });
  }
}
