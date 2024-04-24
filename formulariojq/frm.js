$(document).ready(function() {
    let registros = [];
  
    $('#registroForm').on('submit', function(event) {
      event.preventDefault();
  
      let nombre = $('#nombre').val();
      let direccion = $('#direccion').val();
      let ci = $('#ci').val();
      let fecha = $('#fecha').val();
  
      let registro = {
        nombre: nombre,
        direccion: direccion,
        ci: ci,
        fecha: fecha
      };
  
      registros.push(registro);
  
      mostrarRegistros();
  
      // Limpiar los campos del formulario
      $('#nombre').val('');
      $('#direccion').val('');
      $('#ci').val('');
      $('#fecha').val('');
    });
  
    function mostrarRegistros() {
      $('#registrosList').empty();
      registros.forEach(function(registro, index) {
        $('#registrosList').append(`<li>${index + 1}. ${registro.nombre} - ${registro.ci} - ${registro.fecha}</li>`);
      });
    }
  });
  