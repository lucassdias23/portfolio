export default function initEfeitoDigitacao() {
  const elementoTags = document.querySelector(".tags-typing");

  if (elementoTags) {
    const textoCompleto = elementoTags.dataset.texto || "";
    elementoTags.textContent = "";

    let index = 0;
    const velocidade = 50;

    function digitar() {
      if (index < textoCompleto.length) {
        elementoTags.textContent += textoCompleto.charAt(index);
        index++;
        setTimeout(digitar, velocidade);
      }
    }

    setTimeout(digitar, 800);
  }
}
