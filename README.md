# 🎭 Playwright + TypeScript - E2E Testing Moderno

Este repositorio contiene ejercicios y ejemplos desarrollados durante el curso [Dominando Playwright con TypeScript: E2E Testing Moderno](https://www.udemy.com/course/dominando-playwright-con-typescript-e2e-testing-moderno).

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

## Instalar dependencias

npm install

## Configuración para pruebas de APIs

Para ejecutar las pruebas de APIs localmente, es necesario configurar un archivo `.env` con tu token de acceso personal de GitHub. Este token se utiliza para autenticar las solicitudes a la API de GitHub.

## Pasos para configurar el entorno:

1. **Crear un token de acceso personal en GitHub**:

   - Ve a [GitHub Developer Settings](https://github.com/settings/tokens).
   - Haz clic en **Generate new token**.
   - Selecciona los permisos necesarios:
     - `repo` (para repositorios privados).
     - `public_repo` (para repositorios públicos).
   - Copia el token generado.

2. **Crear un archivo `.env` en la raíz del proyecto**:

   - En la raíz del proyecto, crea un archivo llamado `.env`
   - Agrega el siguiente contenido al archivo `.env`:

     ```env
     API_TOKEN=tu-token-de-github
     ```

3. **Actualiza los datos de usuario y repositorio**:

   - En los archivos de test/9-section-apis se encuentran las constantes REPO y USER
   - Cámbialas por las tuyas

4. **Ejecutar las pruebas de APIs**:
   - Usa el siguiente comando para ejecutar las pruebas relacionadas con APIs:
     ```bash
     npx playwright test --project="API Tests"
     ```

## Notas importantes:

- **Seguridad**: Nunca compartas tu token de acceso personal ni lo subas a un repositorio público.
- **Permisos**: Asegúrate de que el token tenga los permisos adecuados para las acciones que deseas realizar (por ejemplo, crear issues, leer repositorios, etc.).
- **Depuración**: Si encuentras problemas, verifica que el archivo `.env` esté correctamente configurado y que el token sea válido.

Con esta configuración, podrás ejecutar las pruebas de APIs localmente sin problemas. 🚀

---

## Correr todas las pruebas

npx playwright test

## Abrir el modo UI (recomendado para debugging)

npx playwright test --ui

---

## Contenido del Curso

- Introducción a E2E Testing, beneficios y desafíos. ✅
- Instalación de nvm, node, ts, playwright y extensiones para vs code. ✅
- Breve repaso de TypeScript: Tipo de datos, funciones, clases, asincronía. ✅
- Arquitectura y componentes de Playwright. ✅
- Selectores mas recomendados, menos recomendados y estrategias de selección. ✅
- Generación automática de scripts con playwright record o codegen. ✅
- Interacción con elementos del DOM. ✅
- Validaciones. ✅
- Ejecución y control de pruebas (skip, only, etc). ✅
- APIs. ✅
- Mocks. ✅
- Page Object Model. ✅
  - Implementado en tests\6-section-actions\SandBox-actions.spec.ts
- Reportes. ✅
- Mejores practicas. ✅

## 🚀 Investigación por mi cuenta

- Fixtures: https://playwright.dev/docs/test-fixtures
  - Mientras trabajaba en la sección de **Page Object Model (POM)**, me encontré con el desafío de tener que crear una instancia de la clase varias veces para usarla en cada prueba.
    Esto me llevó a investigar cómo mejorar este proceso.
  - Gracias a Copilot y la documentación oficial de Playwright, pude comprender cómo usar los **fixtures** e implementarlos de manera efectiva.
  - Al crear un fixture personalizado para `sandboxPage`, logré:
    - Proveer automáticamente una instancia de la clase `SandboxPage` a todas las pruebas.
    - Simplificar la configuración de las pruebas centralizando la lógica de navegación e interacción con elementos.
    - Mejorar la reutilización y el mantenimiento del código.

## Progreso 🎉

Mi progreso actual es: 80 de 80 lecciones completadas

## Link Curso:

https://www.udemy.com/course/dominando-playwright-con-typescript-e2e-testing-moderno

## 🏆 Link Certificado:

https://www.udemy.com/certificate/UC-653a971b-6ee8-45e0-98d2-4b0a642c188d
