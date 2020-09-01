---
features:
- title: Vue APP
  details: Aplicacion web desarrollada bajo VUE. La mayoría de frontends trabajados con GestiOS la utilizan.
  button:
    link: /gestios-vue-framework/
    text: Acceder
- title: SDK JS
  details: Libreria de conexion a la API de GestiOS hecha en Javascript. Realiza todas las operaciones I/O.
  button:
    link: /gestios-sdk/
    text: Acceder
- title: API
  details: Nucleo de GestiOS desde donde se gestiona todo lo relacionado con la plataforma. API 1.0
  button:
    link: /gestios/
    text: Acceder
---


# ¿Que es GestiOS?

GestiOS es una suite de herramientas **Low Code** la cual nos ahorra mucho trabajo a la hora de desarrollar cualquier tipo de aplicaciones.

Esta basada principalmente en el concepto **BAAS** ***(Backend as a service)*** pero se extiende mas allá, ofreciendo herramientas adicionales dentro del entorno del desarrollo de apps. Con GestiOS puedes olvidarte de las tareas repetitivas en tus proyectos como:

- 📦 CRUD de aplicaciones *<small>(Altas, bajas, modificaciones y listados)</small>*
- ✅ Validacion de datos
- 🙍 Gestión de usuarios y grupos
- 🚦 Control de permisos en usuarios y grupos
- 📧 Sistema de notificaciones push y emails
- 💭 Comentarios en aplicaciones

La conexión a estos servicios se realiza mediante una **API REST** HTTP, la cual es el nucleo principal de nuestros servicios.

Además de nuestro núcleo, ofrecemos otras herramientas:

<div
      v-if="$frontmatter.features && $frontmatter.features.length"
      class="features"
    >
      <div
        v-for="(feature, index) in $frontmatter.features"
        :key="index"
        class="feature"
      >
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
        <NavLink :item="feature.button"/>
</div>
</div>
