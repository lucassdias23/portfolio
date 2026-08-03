export default function initbotaoMobile() {
  const btnMobile = document.getElementById("btn-mobile");
  const nav = document.getElementById("nav");

  btnMobile.addEventListener("click", () => {
    nav.classList.toggle("active");
    btnMobile.classList.toggle("active");
  });
}
