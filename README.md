# 📖 Unsaid (Astro v5)

Blog personal **Unsaid** (`unsaid.amostudio.com`), con lema *"Lo que no dije"*, diseñado con un estilo editorial limpio, columna central recta a todo el alto y navegación SPA instantánea.

---

## 🎨 Tipografías Utilizadas

El blog utiliza una combinación tipográfica editorial de Google Fonts:

1. **Títulos y Encabezados (Serif):** [`Playfair Display`](https://fonts.google.com/specimen/Playfair+Display)
   * **Uso:** Nombre del blog, títulos principales de las notas, citas destacadas y encabezados `h1`, `h2`, `h3`.
   * **Pesos cargados:** 600, 700, 900 e itálicas (`font-serif`).
   * **Propósito:** Brinda un estilo editorial tipo revista/periódico narrativo.

2. **Cuerpo de Texto e Interfaz (Sans-serif):** [`Plus Jakarta Sans`](https://fonts.google.com/specimen/Plus+Jakarta+Sans)
   * **Uso:** Párrafos de lectura, fechas, etiquetas, botones, barra lateral y controles de menú (`font-sans`).
   * **Pesos cargados:** 400 (Regular), 500 (Medium), 600 (Semi-bold), 700 (Bold).
   * **Propósito:** Garantiza una lectura cómoda, descansada y moderna tanto en móvil como en escritorio.

*Las fuentes están importadas en `src/layouts/BaseLayout.astro` y configuradas mediante variables temáticas en `src/styles/global.css`.*

---

## 🚀 Cómo crear nuevos posts

Para publicar una nueva entrada, simplemente crea un archivo en la carpeta `src/content/blog/`:

### 1. Entrada normal (`.md`)
Crea por ejemplo `src/content/blog/mi-nueva-historia.md`:

```markdown
---
title: "Título de mi historia"
description: "Breve resumen para Google y redes sociales."
pubDate: 2026-10-29
image: "https://ejemplo.com/foto.jpg" # Opcional
tags: ["anecdota", "viajes"]           # Opcional
draft: false                           # Si es true, no se publica
---

Aquí escribes todo tu texto con normalidad.

Puedes usar párrafos, **negritas**, _cursivas_, listas o citas.
```

### 2. Entrada con secretos o texto borroso (`.mdx`)
Si quieres que una parte del texto esté censurada con efecto borroso y requiera una contraseña para desbloquearla (como en *Lo Chisme*), usa extensión `.mdx` (no necesitas importar nada, funciona automáticamente):

```mdx
---
title: "Lo que nunca te conté"
description: "Una anécdota con detalles confidenciales."
pubDate: 2026-10-29
tags: ["confesiones"]
---

Aquí va el texto público que cualquiera puede leer.

<CensoredBlock secret="mi-clave-secreta" hint="Escribe la contraseña...">
  <p>Este párrafo está borroso y solo se mostrará si escriben la clave correcta.</p>
</CensoredBlock>

Y aquí continúa el texto normal.
```

---

## ⚙️ Personalizar el Blog (Nombre, Lema y Autor)

Abre el archivo [`src/config.ts`](file:///c:/Users/iadso/Documents/antigravity/bloggy/src/config.ts) para cambiar:
* El **Título** del blog.
* El **Lema / Slogan** (ej: *"Cualquier parecido con la realidad..."*).
* El **Autor**.
* Si deseas mostrar u ocultar el banner de publicidad/espacio patrocinado.

---

## 🛠️ Comandos de Desarrollo

* Iniciar servidor de desarrollo:
  ```bash
  npm run dev
  ```
* Compilar para producción (Opción B de despliegue):
  ```bash
  npm run build
  ```
  Esto generará la carpeta `dist/` lista para entregar a tu desarrollador.
