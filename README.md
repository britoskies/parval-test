# Customer Support Portal

A web application that simulates a customer support portal’s “request management” module. This app lets you list existing requests, view their details, and create new requests via a form.

---

## 📦 Installation & Running Locally

1. **Clone the repository**

   ```bash
   git clone https://github.com/britoskies/parval-test.git
   cd parval-test
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   This will launch the app at `http://localhost:5173`.

4. **Start the local JSON mock server**

   ```bash
   npx json-server ./src/db/mock.json
   ```

   This will serve the mock data at `http://localhost:3000/requests`.

5. **Build for production**

   ```bash
   npm run build
   # or
   yarn build
   ```

   Static files are generated in the `dist/` folder.

6. **Optional: Serve the production build locally**

   ```bash
   npm run serve
   # or
   yarn serve
   ```

---

## 🏗 Architecture & Libraries Used

The app follows a modular, scalable folder structure organized by responsibility:

```
src/
├─ assets/           # Images and SVGs
├─ components/       # Reusable UI components
│  └─ common/        # Buttons, headers, tables, etc.
├─ features/         # Domain-specific logic & UI (requests)
│  ├─ hooks/         # React Query hooks for API calls
│  └─ components/    # Feature-specific subcomponents
 ├─ layouts/          # Layout components (MainLayout, NavBar)
├─ routes/           # Declarative routes (React Router v6)
├─ services/         # Axios/Fetch instance and error handlers
├─ utils/            # Helpers, constants, formatters
└─ pages/            # Main pages (Home, Details, Form)
```

**Key libraries**:

* **React** + **TypeScript**: UI foundation
* **Tailwind CSS**: utility-first styling
* **React Query (TanStack)** v5: data fetching & caching
* **React Router** v6: declarative routing
* **React Hook Form**: form state management & validation
* **React Hot Toast**: toast notifications

---

## 🌐 Deployment

The app is deployed on Netlify:

**[https://customersupportmodule.netlify.app/](https://customersupportmodule.netlify.app/)**
