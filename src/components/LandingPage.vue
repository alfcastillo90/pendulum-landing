<template>
  <div>
    <!-- Navegación -->
    <nav class="navbar navbar-expand-lg navbar-light sticky-top">
      <div class="container">
        <!-- Logo (si tienes uno) -->
        <a class="navbar-brand" href="#">
          Algoritmo del Péndulo
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#beneficios">Características</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#como-funciona">Cómo Funciona</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contacto">Contacto</a>
            </li>
            <!-- Botón de acción -->
            <li class="nav-item">
              <a href="#registro" class="btn btn-primary ml-3">Regístrate</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <header class="jumbotron text-center d-flex flex-column justify-content-center align-items-center">
      <h1>Algoritmo de búsqueda del pendulo</h1>
      <p>Optimizando la distribución de medicamentos: Una solución tecnológica ante el desabastecimiento</p>

      <!-- Espacio para la imagen -->
      <div class="placeholder-image my-4"
        style="width: 100%; max-width: 300px; height: 200px; background-color: #d3d3d3;">
        Ingresa la imagen aquí
      </div>

      <button class="btn btn-primary">Más información</button>
    </header>

    <!-- Beneficios y Características -->
    <section class="container-fluid" id="beneficios">
      <h2 class="text-center mb-4">Beneficios y Características</h2>
      <div class="row">
        <div class="col-md-6">
          <ul>
            <li>Optimización Efectiva: Soluciones óptimas en tiempos razonables.</li>
            <li>Reducción de Costos Computacionales: Soluciones con costos acotados.</li>
            <li>Integración Sencilla: Facilidad de integración con otros sistemas.</li>
            <li>Respuesta al Desabastecimiento: Mejora en la atención médica.</li>
            <li>Seguridad en la Distribución: Reducción de riesgos en la cadena de suministros.</li>
            <li>Mejora en la Atención Médica: Disponibilidad de medicamentos esenciales.</li>
          </ul>
        </div>
        <div class="col-md-6">
          <ul>
            <li>Algoritmo de Búsqueda del Péndulo (PSA).</li>
            <li>API Restful con Node.js y MongoDB.</li>
            <li>Aplicación Web Integrada.</li>
            <li>Basado en Investigación Exhaustiva.</li>
            <li>Enfoque en la Realidad Chilena.</li>
            <li>Pruebas y Evaluaciones Rigurosas.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Sección Cómo Funciona -->
    <section class="container-fluid" id="como-funciona">
      <h2 class="text-center mb-4">Cómo Funciona</h2>

      <div class="row">
        <!-- Paso 1: Usuario Interactúa con la Aplicación Web -->
        <div class="col-md-3 text-center">
          <div class="mb-3">
            <font-awesome-icon :icon="['fas', 'mouse-pointer']" size="3x"></font-awesome-icon>
          </div>
          <h4>1. Interacción del Usuario</h4>
          <p>El usuario interactúa con la aplicación web, ingresando datos o solicitando información.</p>
        </div>

        <!-- Paso 2: La Aplicación Web se comunica con la API RESTful -->
        <div class="col-md-3 text-center">
          <div class="mb-3">
            <font-awesome-icon :icon="['fas', 'exchange-alt']" size="3x"></font-awesome-icon>
          </div>
          <h4>2. Comunicación con la API</h4>
          <p>La aplicación web envía y recibe datos a través de la API RESTful desarrollada con NestJS.</p>
        </div>

        <!-- Paso 3: La API procesa la solicitud usando NestJS -->
        <div class="col-md-3 text-center">
          <div class="mb-3">
            <font-awesome-icon :icon="['fas', 'code']" size="3x"></font-awesome-icon>
          </div>
          <h4>3. Procesamiento con NestJS</h4>
          <p>NestJS procesa la solicitud, interactuando con la base de datos o ejecutando lógica de negocio.</p>
        </div>

        <!-- Paso 4: MongoDB almacena o recupera datos -->
        <div class="col-md-3 text-center">
          <div class="mb-3">
            <font-awesome-icon :icon="['fas', 'hdd']" size="3x"></font-awesome-icon>
          </div>
          <h4>4. Interacción con MongoDB</h4>
          <p>MongoDB almacena o recupera los datos necesarios, asegurando eficiencia y escalabilidad.</p>
        </div>

      </div>
    </section>



    <!-- Sección de Contacto -->
    <section class="container-fluid" id="contacto">
      <h2 class="text-center mb-4">Contáctanos</h2>

      <div class="row justify-content-center">
        <div class="col-md-8">
          <form @submit.prevent="submitForm">
            <!-- Nombre -->
            <div class="mb-3">
              <label for="name" class="form-label">Nombre</label>
              <input type="text" class="form-control" id="name" v-model="contact.name" required>
            </div>

            <!-- Correo Electrónico -->
            <div class="mb-3">
              <label for="email" class="form-label">Correo Electrónico</label>
              <input type="email" class="form-control" id="email" v-model="contact.email" required>
            </div>

            <!-- Asunto -->
            <div class="mb-3">
              <label for="subject" class="form-label">Asunto</label>
              <input type="text" class="form-control" id="subject" v-model="contact.subject" required>
            </div>

            <!-- Mensaje -->
            <div class="mb-3">
              <label for="message" class="form-label">Mensaje</label>
              <textarea class="form-control" id="message" rows="4" v-model="contact.message" required></textarea>
            </div>

            <!-- Botón de Enviar -->
            <div class="text-center">
              <button type="submit" class="btn btn-primary">Enviar Mensaje</button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-dark text-white py-4">
      <div class="container text-center">
        <p>Sígueme en:</p>
        <a :href="linkedinUrl" target="_blank" class="text-white mx-2">
          <font-awesome-icon :icon="['fab', 'linkedin']" size="2x"></font-awesome-icon>
        </a>
        <a :href="githubUrl" target="_blank" class="text-white mx-2">
          <font-awesome-icon :icon="['fab', 'github']" size="2x"></font-awesome-icon>
        </a>
      </div>
    </footer>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      linkedinUrl: 'https://www.linkedin.com/in/alfcastillo/',
      githubUrl: 'https://github.com/alfcastillo90',
      contact: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      // Aquí puedes manejar el envío del formulario, por ejemplo, enviando los datos a una API.
      console.log(this.contact);
    }
  }
};
</script>

  
<style>
/* Estilos personalizados para responsividad */
@media (max-width: 767px) {

  /* Estilos para pantallas pequeñas */
  .jumbotron h1 {
    font-size: 24px;
  }

  .jumbotron p {
    font-size: 16px;
  }

  .jumbotron .btn {
    font-size: 14px;
    padding: 10px 20px;
  }

  /* Testimonios de Usuarios */
  .rounded-circle {
    max-width: 80%;
    margin: 0 auto;
    /* Centrar imágenes */
  }
}

@media (min-width: 768px) {
  /* Estilos para pantallas medianas y más grandes */
}

/* Estilos generales */
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
}

/* Estilos de encabezado */
.jumbotron {
  background-color: #f8f9fa;
  padding: 60px 0;
  margin-bottom: 0;
}

/* Imágenes responsivas */
.img-fluid {
  max-width: 100%;
  height: auto;
}

/* Otros estilos según necesidad */
/* Estilo para el placeholder de la imagen */
.placeholder-image {
  font-weight: bold;
  color: #7a7a7a;
  border: 2px dashed #7a7a7a;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Estilos basados en colores de Vue.js */
.navbar {
  background-color: #35495E;
}

.navbar .navbar-brand,
.navbar .nav-link {
  color: white !important;
}

.jumbotron {
  background-color: #42B883;
  color: white;
}

#beneficios {
  background-color: #35495E;
  color: white;
}

#como-funciona {
  background-color: #42B883;
  color: white;
}

#contacto {
  background-color: #35495E;
  color: white;
}

footer {
  background-color: #42B883;
}
</style>
  