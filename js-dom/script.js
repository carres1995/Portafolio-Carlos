document.querySelectorAll(".alert-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      alert("Abriste proyectos de " + btn.dataset.name);
    });
  });