# PASO 1 - NOMBRE DEL PROYECTO

Buscar la palabra "REEMPLAZAR" en todo el proyecto y reemplazar por el nombre del nuevo proyecto

# PASO 2 - INDEX

- En index.html completar el contenido de head con lo necesario para ejecutar el nuevo proyecto.
 En index.html completar el contenido de body con los scripts.
- No olvidar app-root en el body.

# PASO 3 - ASSETS

- Copiar y reemplazar el contenido de la carpeta assets.
- Verificar que las rutas definidas en index.html sean correctas.

# PASO 4 - TOPBAR

- Copiar contenido del body del nuevo proyecto al componente top-bar.

# PASO 5 - FOOTER

- Copiar contenido del body del nuevo proyecto al componente app-footer.

# PASO 6 - BODY

- Copiar contenido del body del nuevo proyecto al componente app-home.

# PASO 7 - CONTACT

- Copiar contenido del body del nuevo proyecto al componente app-contact.

# PASO 8 - ENVIO DE EMAIL

- Crear un nuevo email si es necesario
- Crear un formulario en <https://formspree.io/>
- Implementar formulario de contacto en app-contact

# PASO 9 - DEPLOY

- ng build del proyecto
- firebase init
- usar la ruta dist/nombre-del-proyecto
- Marcar todo que NO
- firebase deploy

# Paso 10 - SEO

Para asegurar que el contenido dentro de `<app-root>` sea detectado y adecuadamente indexado por los motores de búsqueda, es importante abordar algunos aspectos clave de SEO para aplicaciones de una sola página (SPA) como las que se desarrollan con Angular. Aquí hay algunos puntos a considerar y mejoras que podrías implementar:

1. **Server-Side Rendering (SSR)**:
   Las aplicaciones Angular pueden beneficiarse significativamente del renderizado del lado del servidor (SSR) usando Angular Universal. Esto permite que el contenido se renderice en el servidor antes de enviarlo al cliente, lo cual es beneficioso para SEO porque los motores de búsqueda pueden indexar el contenido más fácilmente.

2. **Pre-rendering**:
   Alternativamente, puedes pre-renderizar tu aplicación para generar archivos HTML estáticos para cada ruta, lo que también ayuda con la indexación.

3. **Meta tags dinámicos**:
   Asegúrate de que tu aplicación esté configurada para actualizar dinámicamente las etiquetas meta y el título de la página en función del contenido mostrado.

4. **Uso de `robots.txt` y `sitemap.xml`**:
   Incluye un archivo `robots.txt` para permitir a los motores de búsqueda rastrear tu sitio y un archivo `sitemap.xml` para proporcionar una lista de todas las URL de tu sitio.

Aquí hay una guía paso a paso para implementar Angular Universal en tu proyecto:

### Implementación de Angular Universal

1. **Agregar Angular Universal**:
   Ejecuta el siguiente comando en tu terminal para agregar Angular Universal a tu proyecto:

   ```bash
   ng add @nguniversal/express-engine
   ```

   Esto configura tu aplicación para SSR y actualiza tu proyecto con los archivos necesarios.

2. **Construir para SSR**:
   Después de agregar Angular Universal, puedes construir tu aplicación para SSR usando el siguiente comando:

   ```bash
   npm run build:ssr
   ```

3. **Servir la aplicación SSR**:
   Luego, puedes servir tu aplicación SSR localmente con:

   ```bash
   npm run serve:ssr
   ```

   USAR GOOGLE SEARCH CONSOLE PARA VERIFICAR EL ESTADO DEL SITIO
