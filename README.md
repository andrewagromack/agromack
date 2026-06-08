# Agromack.cl — Sitio MacKinnon Servicios Agropecuarios

Sitio estático (HTML/CSS/JS) listo para desplegar en GitHub Pages, Netlify, Vercel o cualquier hosting estático.

## 📁 Estructura

```
agromack/
├── index.html              Home
├── patrick.html            Patrick MacKinnon — Riego
├── andrew.html             Andrew MacKinnon — Inocuidad
├── imacimus.html           Landing IMACIMUS 10
├── capacitaciones.html     Capacitaciones técnicas (OTEC)
├── contacto.html           Formularios + info de contacto
├── 404.html                Página de error
├── css/styles.css          Estilos compartidos
├── js/main.js              Interacciones (nav, FAQ, formularios)
├── img/                    Imágenes optimizadas
├── CNAME                   Dominio custom (editar antes de deploy)
├── .nojekyll               Evita procesado Jekyll en GitHub Pages
├── robots.txt
└── sitemap.xml
```

## 🚀 Desplegar en GitHub Pages

### 1. Crear el repositorio
```bash
cd ruta/al/proyecto
git init
git add .
git commit -m "Sitio inicial Agromack"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/agromack.git
git push -u origin main
```

### 2. Activar GitHub Pages
1. Ve a tu repo en GitHub → **Settings** → **Pages**
2. En **Source**, elige **Deploy from a branch**
3. Branch: `main`, Folder: `/ (root)` → Save
4. Espera 1-2 minutos. URL temporal: `https://TU-USUARIO.github.io/agromack/`

### 3. Conectar dominio custom (agromack.cl)
1. Edita el archivo `CNAME` y deja **solo**: `agromack.cl`
2. Commit y push.
3. En tu proveedor DNS (NIC.cl, Cloudflare, etc.) crea estos registros apuntando a GitHub Pages:
   ```
   Tipo  Nombre  Valor
   A     @       185.199.108.153
   A     @       185.199.109.153
   A     @       185.199.110.153
   A     @       185.199.111.153
   CNAME www     TU-USUARIO.github.io
   ```
4. En GitHub → Settings → Pages, marca **Enforce HTTPS** una vez que aparezca disponible (~30 min después del DNS).

### 4. Verificar
- `https://agromack.cl` debería cargar el sitio.
- Cada `git push` republica automáticamente.

## 📩 Formularios de contacto

Los formularios de `contacto.html` están integrados con MailerLite mediante embeds separados:

- Patrick: formulario agrícola / riego / IMACIMUS.
- Andrew: formulario inocuidad / HACCP / producción pecuaria-pesquera.

La estética de ambos formularios se controla desde `css/styles.css`, sección **MAILERLITE CONTACT FORMS**. No volver a pegar el CSS completo generado por MailerLite salvo que se reemplace el formulario completo.

## 🌐 Alternativa: Netlify

El sitio sigue siendo compatible con despliegue en Netlify o GitHub Pages. Si más adelante se decide reemplazar MailerLite por Netlify Forms, habría que volver a convertir los embeds en formularios HTML nativos con `data-netlify="true"`.

## ✏️ Personalización rápida

| Qué cambiar | Archivo |
|---|---|
| Logo | `img/logo.webp` (reemplaza con el mismo nombre) |
| Colores y tipografía | `css/styles.css` (sección `:root` arriba) |
| Texto del nav, hero, etc. | Cada `.html` directamente |
| Teléfonos / correos | Buscar `agromack.cl`, `56992783969`, `56998791270` y reemplazar |
| Testimonios | `index.html` → sección `.test-section` |
| Cifras del banner | `index.html` → sección `.stats` |

## 📋 Checklist antes del deploy

- [ ] Logo final en `img/logo.webp`
- [ ] Editar `CNAME` con dominio real
- [ ] Verificar correos y teléfonos en todos los archivos
- [ ] Configurar backend de formularios (Netlify Forms / Formspree / EmailJS)
- [ ] Revisar testimonios — usar nombres reales si tienes permiso
- [ ] Subir fotos de mejor calidad si las consigues (especialmente Andrew en planta pesquera)
- [ ] Configurar Google Analytics o similar (opcional)

## 📊 SEO + Analytics

- Todas las páginas tienen meta tags Open Graph para compartir en WhatsApp/Facebook
- `sitemap.xml` y `robots.txt` incluidos
- Para Google Analytics: pegar el snippet en `js/main.js` o agregar `<script>` al `<head>` de cada página

---

© 2026 MacKinnon Servicios Agropecuarios
