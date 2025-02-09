/**
 * Muestra u oculta los detalles de cuidados para un procedimiento específico
 * @param {string} procedimiento - ID del procedimiento a mostrar/ocultar
 */
function mostrarCuidados(procedimiento) {
    // Obtener el elemento de detalles
    const detalles = document.getElementById(`cuidados-${procedimiento}`);
    
    // Si los detalles están ocultos
    if (detalles.style.display === 'none') {
      // Ocultar todos los detalles primero
      document.querySelectorAll('.cuidados-detalle').forEach(el => {
        el.style.display = 'none';
      });
      
      // Mostrar los detalles del procedimiento seleccionado
      detalles.style.display = 'block';
    } else {
      // Ocultar los detalles si ya estaban visibles
      detalles.style.display = 'none';
    }
  }
  
  // Agregar animación suave al scroll cuando se hace clic en los botones
  document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn-cuidados');
    
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        const procedimiento = this.closest('.procedimiento');
        procedimiento.scrollIntoView({ behavior: 'smooth' });
      });
    });
  });