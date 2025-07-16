# Customer Support Portal

Aplicación web tipo portal de atención a clientes que simula el módulo de “gestión de solicitudes”. Esta app permitirá listar solicitudes existentes, ver su detalle, y registrar nuevas solicitudes desde un formulario.

---

## 📦 Instalación & Ejecución

1. **Clona el repositorio**

   ```bash
   git clone https://github.com/britoskies/parval-test.git
   cd parval-test
   ```

2. **Instala dependencias**

   ```bash
   npm install
   # o
   yarn install
   ```

3. **Levanta la aplicación en desarrollo**

   ```bash
   npm run dev
   # o
   yarn dev
   ```

   Esto iniciará un servidor en `http://localhost:5173`.

4. **Levanta el json local para la data mock en desarrollo**

   ```bash
   npx json-server ./src/db/mock.json
   ```

   Esto iniciará un servidor en `http://localhost:3000/requests`.

5. **Build para producción**

   ```bash
   npm run build
   # o
   yarn build
   ```

   Los archivos estáticos se generan en la carpeta `dist/`.

6. **Servidor de producción local (opcional)**

   ```bash
   npm run serve
   # o
   yarn serve
   ```

---

## 🏗 Arquitectura y librerías usadas

La aplicación sigue una estructura modular y escalable, dividida en carpetas según responsabilidad:

```
src/
├─ assets/           # Imágenes y SVGs
├─ components/       # Componentes reutilizables (UI)
│  └─ common/        # Botones, encabezados, tablas, etc.
├─ features/         # Lógica y UI por dominio (requests)
│  ├─ hooks/         # React Query hooks para API
│  └─ components/    # Subcomponentes específicos del feature
├─ layouts/          # Layouts (MainLayout, NavBar)
├─ routes/           # Rutas declarativas (React Router v6)
├─ services/         # Instancia de Axios y manejadores de error
├─ utils/            # Helpers, constantes, formateadores
└─ pages/            # Páginas principales (Home, Details, Form)
```

**Principales librerías**:

- **React** + **TypeScript**: base de la UI.
- **Tailwind CSS**: utilidades de estilos.
- **React Query (TanStack)** v5: fetching y cache de datos.
- **React Router** v6: navegación declarativa.
- **React Hook Form**: manejo y validación de formularios.
- **React Hot Toast**: notificaciones toast.

---

## 🌐 Despliegue

La app está desplegada en Netlify:

**[https://parvaltest.netlify.app/](https://parvaltest.netlify.app/)**

---
