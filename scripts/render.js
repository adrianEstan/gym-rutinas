document.getElementById("rutina-selector").addEventListener("change", function () {
  const selected = this.value;
  const container = document.getElementById("rutina-container");

  fetch( selected)
    .then(response => {
      if (!response.ok) throw new Error("Archivo no encontrado");
      return response.text();
    })
    .then(html => {
      container.innerHTML = html;
    })
    .catch(error => {
      container.innerHTML = "<p>Error al cargar la rutina.</p>";
      console.error(error);
    });
});
