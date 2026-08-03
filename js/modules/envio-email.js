export default function initFormContato() {
  const contatoForm = document.getElementById("contato-form");

  if (contatoForm) {
    contatoForm.addEventListener("submit", async function (event) {
      event.preventDefault();

      const btnEnviar = contatoForm.querySelector(".btn-enviar");
      const textoOriginal = btnEnviar.innerHTML;
      btnEnviar.innerHTML = "Enviando... ⏳";
      btnEnviar.disabled = true;

      const data = new FormData(contatoForm);

      try {
        const response = await fetch(contatoForm.action, {
          method: contatoForm.method,
          body: data,
          headers: {
            Accept: "application/json",
          },
        });

        if (response.ok) {
          btnEnviar.innerHTML = "Mensagem Enviada! ✅";
          contatoForm.reset();

          setTimeout(() => {
            btnEnviar.innerHTML = textoOriginal;
            btnEnviar.disabled = false;
          }, 4000);
        } else {
          throw new Error("Erro na resposta da API");
        }
      } catch (error) {
        btnEnviar.innerHTML = "Erro ao enviar! ❌";
        setTimeout(() => {
          btnEnviar.innerHTML = textoOriginal;
          btnEnviar.disabled = false;
        }, 4000);
      }
    });
  }
}
