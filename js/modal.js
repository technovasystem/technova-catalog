<!-- ? Aquí va el SCRIPT del MODAL -->
<script>
  document.querySelectorAll('.btn-ver-ejemplo').forEach(btn => {
    btn.addEventListener('click', () => {
      const imgSrc = btn.getAttribute('data-img');
      const desc = btn.getAttribute('data-desc');
      const contenido = 
        <img src="${imgSrc}" alt="Ejemplo" style="max-width: 100%; border-radius: 8px; margin-bottom: 1rem;">
        <p>${desc}</p>
      ;
      document.getElementById('modalContenido').innerHTML = contenido;
      document.getElementById('modalEjemplo').style.display = 'block';
    });
  });

  document.getElementById('modalCerrar').addEventListener('click', () => {
    document.getElementById('modalEjemplo').style.display = 'none';
  });
</script> 