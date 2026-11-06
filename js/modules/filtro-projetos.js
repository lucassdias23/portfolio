export default function initFiltroProjetos() {
  const botoesFiltro = document.querySelectorAll(
    ".projetos-filtro .btn-filtro",
  );
  const itensProjetos = document.querySelectorAll(
    ".projetos-bloco-1 > div, .projetos-bloco-2, .projetos-bloco-3",
  );

  const spanBloco2 = document.querySelector(".categoria-projeto.front");

  if (botoesFiltro.length && itensProjetos.length) {
    function filtrarProjetos(event) {
      const botaoClicado = event.currentTarget;
      const categoriaFiltro = botaoClicado.dataset.filtro;

      botoesFiltro.forEach((btn) => btn.classList.remove("ativo"));
      botaoClicado.classList.add("ativo");

      itensProjetos.forEach((item) => {
        const categoriaItem = item.dataset.categoria;

        if (categoriaFiltro === "todos" || categoriaItem === categoriaFiltro) {
          if (item.classList.contains("projetos-bloco-3")) {
            item.style.display = "block";
          } else if (item.tagName === "SECTION") {
            item.style.display = "grid";
          } else {
            item.style.display = "block";
          }
        } else {
          item.style.display = "none";
        }
      });

      if (spanBloco2) {
        if (categoriaFiltro === "todos" || categoriaFiltro === "frontend") {
          spanBloco2.style.display = "block";
        } else {
          spanBloco2.style.display = "none";
        }
      }
    }
    botoesFiltro.forEach((btn) => {
      btn.addEventListener("click", filtrarProjetos);
    });
  }
}
