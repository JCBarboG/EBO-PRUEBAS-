# EBO — App de pruebas (diseño "Mesa de luz")

Esta carpeta es una **copia** de EBO Cliente (repositorio `JCBarboG/EBO-Biblioteca.Cliente`, versión `d3aa51d`) con el diseño "Mesa de luz" aplicado. **El repositorio original no se tocó.**

## Qué cambió (solo apariencia)

| Archivo | Cambio |
|---|---|
| `src/theme-mesa-de-luz.css` | **Nuevo.** Todos los colores, las fuentes, la distribución de escritorio y la de móvil. |
| `src/main.jsx` | Una línea que importa el tema. |
| `src/App.jsx` | Solo el marcado de la pantalla principal: barra lateral con los pasos, y los botones Guardar datos / Exportar Excel / Guardar en historial / Vaciar tabla, que llaman a **los mismos handlers de siempre** (`handleSave`, `handleExport`, `handleSaveHistory`, `handleClearRecords`). |
| `index.html` | Fuentes nuevas (Familjen Grotesk, DM Mono, Libre Caslon Text) y el título. |
| `vite.config.js`, `package.json` | La ruta de publicación cambia a `/EBO-App-de-pruebas/` para que funcione en un repositorio nuevo. |

**No se tocaron:** `src/utils/*` (OCR, Excel, historial), `docTypes.js`, `punctuationPresets.js`, las traducciones, `AppContext`, EmailJS, ni ningún componente o vista. El detalle línea por línea está en `CAMBIOS-vs-original.diff`.

**Notas de esta versión de pruebas:**
- El aspecto es el mismo con modo claro u oscuro. Una variante clara se puede diseñar después.
- Los botones de la tabla siguen existiendo dentro de `BooksTable`, pero ocultos. Los visibles son los de la barra lateral (en escritorio) o los de la barra fija de abajo (en móvil).
- El formulario de Soporte sigue enviando correos reales por EmailJS.

## Correrla en su computadora

Necesita **Node.js 20 o superior** (https://nodejs.org).

1. Descomprima el `.zip` en el Escritorio. Queda la carpeta `EBO - App de pruebas`.
2. Abra una terminal dentro de esa carpeta. En Windows: clic derecho en la carpeta → "Abrir en Terminal".
3. Ejecute:
   ```
   npm install
   npm run dev
   ```
4. Abra el enlace que aparece, normalmente **http://localhost:5173/EBO-App-de-pruebas/**.
   - Para verla en el celular (misma red Wi-Fi), use el enlace "Network" que muestra la terminal.

Para detenerla: `Ctrl + C` en la terminal.

## Publicarla en un repositorio nuevo de GitHub (opcional)

1. En GitHub: **New repository** → nombre exacto **`EBO-App-de-pruebas`**. Puede ser público o privado; en cuentas gratuitas, GitHub Pages necesita que sea público. No agregue README.
2. En la terminal, dentro de la carpeta:
   ```
   git init
   git add .
   git commit -m "EBO app de pruebas - diseño Mesa de luz"
   git branch -M main
   git remote add origin https://github.com/JCBarboG/EBO-App-de-pruebas.git
   git push -u origin main
   ```
3. En el repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**. El flujo `.github/workflows/deploy.yml` ya viene incluido y publica sola cada vez que haga `push`.
4. En 1 o 2 minutos queda en **https://jcbarbog.github.io/EBO-App-de-pruebas/**.

Si usa otro nombre de repositorio, cambie también `base`, `start_url` y `scope` en `vite.config.js` por `/<nombre-del-repo>/`.
