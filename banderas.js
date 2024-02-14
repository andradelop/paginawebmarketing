   // Obtener todas las banderas (enlaces) en el selector de idiomas
   const languageLinks = document.querySelectorAll('.language-selector a');

   // Función para cambiar de idioma
   function changeLanguage(event) {
       // Prevenir el comportamiento predeterminado del enlace
       event.preventDefault();
   
       // Desactivar todos los enlaces
       languageLinks.forEach(link => {
           link.classList.remove('active');
       });
   
       // Activar el enlace seleccionado
       this.classList.add('active');
   
       // Obtener la URL del enlace
       const languageUrl = this.getAttribute('href');
   
       // Redirigir a la página en el idioma seleccionado
       window.location.href = languageUrl;
   }
   
   // Agregar un controlador de eventos a cada enlace
   languageLinks.forEach(link => {
       link.addEventListener('click', changeLanguage);
   });