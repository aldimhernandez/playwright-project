# 🎭 Playwright + TypeScript - E2E Testing Moderno

Este repositorio contiene ejercicios y ejemplos desarrollados mientras completo el curso [Dominando Playwright con TypeScript: E2E Testing Moderno](https://www.udemy.com/course/dominando-playwright-con-typescript-e2e-testing-moderno).

---

## 🧪 Tecnologías principales

- [Playwright](https://playwright.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/)

---

## 🚀 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/tu-repo-playwright.git
cd tu-repo-playwright
```

# Instalar dependencias

npm install

---

# Correr todas las pruebas

npx playwright test

# Abrir el modo UI (recomendado para debugging)

npx playwright test --ui

---

# Contenido del Curso

- Introducción a E2E Testing, beneficios y desafíos. ✅
- Instalación de nvm, node, ts, playwright y extensiones para vs code. ✅
- Breve repaso de TypeScript: Tipo de datos, funciones, clases, asincronía. ✅
- Arquitectura y componentes de Playwright. ✅
- Selectores mas recomendados, menos recomendados y estrategias de selección. ✅
- Interacción con elementos del DOM. ✅
- Validaciones. ✅
- Ejecución y control de pruebas (skip, only, etc). ✅
- APIs. ✅
- Mocks
- Page Object Model
- Reportes
- Mejores practicas

# 🚀 Investigación por mi cuenta

- Fixtures: https://playwright.dev/docs/test-fixtures
  - Mientras trabajaba en la sección de **Page Object Model (POM)**, me encontré con el desafío de tener que instanciar la clase varias veces para usarla en cada prueba.
    Esto me llevó a investigar cómo mejorar este proceso.
  - Gracias a Copilot y la documentación oficial de Playwright, pude comprender cómo usar los **fixtures** e implementarlos de manera efectiva.
  - Al crear un fixture personalizado para `sandboxPage`, logré:
    - Proveer automáticamente una instancia de la clase `SandboxPage` a todas las pruebas.
    - Simplificar la configuración de las pruebas centralizando la lógica de navegación e interacción con elementos.
    - Mejorar la reutilización y el mantenimiento del código.

# Progreso

Mi progreso actual es: 71 de 80 lecciones completadas

# Link del curso:

https://www.udemy.com/course/dominando-playwright-con-typescript-e2e-testing-moderno
