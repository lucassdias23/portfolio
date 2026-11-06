export default function initScrollAnimacao() {
  const sections = document.querySelectorAll(
    ".grupo-formacao, .card-curso, .card-projeto, .card-ux-ui",
  );

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.75;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTopo = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTopo - windowMetade < 0;

        if (isSectionVisible) {
          section.classList.add("ativo");
        }
      });
    }

    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}
