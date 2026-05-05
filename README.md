# Antartida Labs — Web Institucional

Sitio web institucional/comercial de **Antartida Labs** — "Inteligencia Artificial del Sur".

Stack: **Next.js 14 · TypeScript · Tailwind CSS · React Hook Form · Zod**  
Deploy: **VPS Ubuntu · EasyPanel · Docker/Nixpacks · GitHub**

---

## Requisitos previos

- Node.js >= 20 LTS
- npm >= 10

---

## Configuración local

### 1. Clonar el repositorio

```bash
git clone https://github.com/TU_ORG/antartidalabs-web.git
cd antartidalabs-web
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

```bash
cp .env.example .env.local
```

Editar `.env.local` y completar con la URL real del webhook de n8n:

```bash
WEBHOOK_URL=https://xxxx.yyyy.zzzz/webhook/contact
```

> **Importante:** Nunca commitear `.env.local` al repositorio. Está incluido en `.gitignore`.

### 4. Correr en modo desarrollo

```bash
npm run dev
```

La app estará disponible en [http://localhost:3000](http://localhost:3000).

### 5. Build de producción local

```bash
npm run build
npm start
```

---

## Estructura del proyecto

```
src/
├── app/
│   ├── api/contact/route.ts    # API Route — proxy del webhook (server-side)
│   ├── privacidad/page.tsx     # Política de privacidad
│   ├── terminos/page.tsx       # Términos y condiciones
│   ├── globals.css             # Estilos globales + CSS variables
│   ├── layout.tsx              # Root layout con metadatos SEO
│   └── page.tsx                # Home page
├── components/
│   ├── layout/                 # Navbar, Footer
│   ├── sections/               # HeroSection, ServicesSection, etc.
│   └── forms/                  # ContactForm con validación RHF + Zod
└── lib/
    ├── schemas/contact.schema.ts  # Schema Zod compartido cliente/servidor
    ├── rate-limit.ts              # Rate limiting en memoria por IP
    └── webhook.ts                 # Función de envío al webhook n8n
```

---

## Variables de entorno

| Variable | Descripción | Requerida |
|---|---|---|
| `WEBHOOK_URL` | URL del webhook n8n que recibe el formulario | **Sí** |
| `RATE_LIMIT_MAX` | Max requests por IP por ventana | No (default: 5) |
| `RATE_LIMIT_WINDOW_MS` | Ventana de rate limit en ms | No (default: 60000) |

---

## Despliegue en EasyPanel (VPS Ubuntu)

### Opción A: Nixpacks (recomendado — sin Dockerfile)

EasyPanel detecta automáticamente Next.js y construye con Nixpacks.

1. En EasyPanel → crear nuevo proyecto → nueva App.
2. Fuente: **GitHub** → seleccionar este repositorio → rama `main`.
3. EasyPanel configura automáticamente:
   - Build: `npm run build`
   - Start: `npm start`
   - Puerto: `3000`
4. En **Environment Variables** del panel, agregar:
   - `WEBHOOK_URL` = URL real del webhook de n8n
5. En **Domains**, agregar `antartidalabs.com` → EasyPanel gestiona HTTPS automáticamente.

### Opción B: Docker

El proyecto incluye un `Dockerfile` multi-stage optimizado.

En EasyPanel → App → Source → seleccionar **Dockerfile** como builder.

### Deploy continuo

Cada push a la rama `main` dispara un nuevo build automático en EasyPanel.

---

## Seguridad

- La URL del webhook **nunca** se expone al cliente. El formulario hace POST a `/api/contact` (misma URL del sitio), y el servidor reenvía al webhook.
- Rate limiting: máximo 5 envíos por IP por minuto (configurable).
- Honeypot anti-spam en el formulario.
- Headers de seguridad HTTP configurados en `next.config.ts`.
- Validación Zod tanto en cliente como en servidor.

---

## Personalización pendiente antes del go-live

- [ ] Reemplazar `https://xxxx.yyyy.zzzz/webhook/contact` con la URL real del webhook de n8n en EasyPanel → Environment Variables.
- [ ] Revisar y aprobar los textos de todas las secciones (actualmente textos de prueba).
- [ ] Agregar imagen Open Graph real (`/public/og-image.png`, 1200×630px).
- [ ] Añadir favicon personalizado (`/public/favicon.ico`).
- [ ] Revisar y completar la Política de Privacidad y Términos y Condiciones con asesoramiento legal.
- [ ] Agregar redes sociales en el Footer cuando estén disponibles.

---

## Licencia

Código propietario — Antartida Labs © 2026. Todos los derechos reservados.
