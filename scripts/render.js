const params = new URLSearchParams(window.location.search);
const rutina = params.get("rutina");

if (rutina) {
  fetch(`markdown/${rutina}.md`)
    .then(response => {
      if (!response.ok) throw new Error("No encontrado");
      return response.text();
    })
    .then(md => {
      document.getElementById("contenido").innerHTML = marked.parse(md);
    })
    .catch(err => {
      document.getElementById("contenido").innerHTML = `<p>No se encontró la rutina para "${rutina}".</p>`;
    });
}
