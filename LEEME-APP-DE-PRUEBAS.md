# EBO — App de pruebas (diseño "Opción C · Riel y lectura de arriba abajo")

Esta carpeta es una **copia de pruebas** de EBO Cliente. Se publica desde el repositorio `JCBarboG/EBO-PRUEBAS-` en **https://jcbarbog.github.io/EBO-PRUEBAS-/**. **El repositorio original (`JCBarboG/EBO-Biblioteca.Cliente`) no se toca.**

## Qué cambió

### Apariencia (Opción C)
| Archivo | Cambio |
|---|---|
| `src/theme-opcion-c.css` | **Nuevo.** Tokens claro/oscuro, riel de escritorio, encabezado, campos en 4 columnas, tabla, vistas, diálogos y móvil (< 1100 px). Reemplaza a `theme-mesa-de-luz.css` (borrado). |
| `src/components/NavRail.jsx`, `Icons.jsx` | **Nuevos.** Riel izquierdo con íconos SVG de línea (sin emojis). |
| `src/App.jsx` | Marcado de la pantalla principal (encabezado, franja de captura, barra móvil) con los mismos handlers. |
| `index.html` | Fuentes Gloock, Work Sans y Spline Sans Mono. |
| Vistas y componentes | Solo marcado y clases; misma lógica. Guía con un **paso 4** nuevo. |
| `src/i18n/translations.js` | Sin emojis y con las claves nuevas (`ui`, `cols`, `guide.step4`). |

### Funciones nuevas
- **Campos y columnas propias** (`+ Agregar campo` y el menú ⋮ de cada columna): insertar a la izquierda o a la derecha, renombrar y eliminar (solo las propias). Cada una tiene su puntuación manual.
- **Tabla editable**: todas las celdas se pueden editar; el número de fila abre Insertar arriba/abajo y Eliminar; "+ Agregar fila".
- **Excel e historial**: se exportan las columnas en el orden visible, incluidas las propias. Los paquetes del historial guardan sus columnas propias; los paquetes viejos siguen cargando igual.
- **Vaciar tabla** confirma con la ventana de la app en lugar de la del navegador.

Las columnas propias, igual que la puntuación manual, solo viven en la sesión y en los paquetes del historial.

## Correrla en su computadora

Necesita **Node.js 20 o superior**.

```
npm install
npm run dev
```

Abra **http://localhost:5173/EBO-PRUEBAS-/**. Para detenerla: `Ctrl + C`.

## Publicar

Cada `git push` a `main` publica sola con `.github/workflows/deploy.yml`. Si cambia el nombre del repositorio, cambie también `base`, `start_url` y `scope` en `vite.config.js`.
