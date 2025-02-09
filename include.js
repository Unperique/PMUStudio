// Función para incluir el header
function includeHeader() {
    fetch('header.html')
      .then(response => response.text())
      .then(data => {
        document.querySelector('header').innerHTML = data;
        // Activar el menú toggle en móviles
        const menuToggle = document.getElementById('menuToggle');
        const navMenu = document.querySelector('.nav-menu');
        menuToggle.addEventListener('click', () => {
          navMenu.classList.toggle('active');
        });
      });
  }
  
  // Función para incluir el footer
  function includeFooter() {
    fetch('footer.html')
      .then(response => response.text())
      .then(data => {
        document.querySelector('footer').innerHTML = data;
      });
  }
  
  // Llamar a las funciones
  includeHeader();
  includeFooter();