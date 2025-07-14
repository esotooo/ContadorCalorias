# Contador de Calorias

Aplicación web para planificar y controlar calorías consumidas y quemadas, permitiendo al usuario registrar actividades como comidas o ejercicios, modificarlas o eliminarlas, y visualizar un resumen dinámico de su balance calórico.

---

## Demo

[https://escalorietracker.netlify.app/](https://escalorietracker.netlify.app/)

---

## Características

- Registro de actividades con categoría (Comida o Ejercicio), nombre y calorías.
- Modificación y eliminación de actividades existentes.
- Resumen dinámico del balance calórico:
  - Calorías consumidas.
  - Calorías quemadas.
  - Total de calorías netas.
- Animaciones para los contadores con cambios suaves.
- Estado persistente en `localStorage` para mantener los datos entre sesiones.

---

## Tecnologías

- **React 19+**
- **TypeScript 5.8+**
- Vite 7+
- TailwindCSS
- Heroicons
- UUID para identificación única
- Hooks personalizados y patrón `useReducer`

---

## Instalación

Clona el repositorio y accede a la carpeta:

```bash
git clone https://github.com/esotooo/ContadorCalorias.git
cd ContadorCalorias
```

Instala las dependencias:

```bash
npm install
```

Ejecuta la aplicacion en modo desarrollo:

```bash
npm run dev
```

Abre en tu navegador la URL que muestra Vite, normalmente:

```bash
http://localhost:5173
```
---

## Estructura principal

- `src/components` — Formulario, lista de actividades, resumen de calorías.
- `src/reducers` — Lógica de estado centralizado con `useReducer`.
- `src/animations` — Animaciones personalizadas para los contadores.
- `src/data/categories.ts` — Definición de categorías (`Comida` / `Ejercicio`).
- `src/types/types.ts` — Tipos TypeScript para datos y acciones.

---

## Uso

1. Ingresa una actividad desde el formulario seleccionando la categoría (Comida o Ejercicio), nombre y calorías.  
2. Visualiza la lista de actividades registradas debajo del formulario.  
3. Edita o elimina una actividad existente desde la lista.  
4. Observa en tiempo real cómo cambian los totales de calorías consumidas, quemadas y netas en el resumen superior.  
5. Usa el botón en la esquina superior derecha para reiniciar la aplicación y borrar todas las actividades registradas.

---

## Próximas mejoras

- Filtros por fecha o categoría.
- Exportación de datos en CSV/JSON.
- Gráficos estadísticos semanales/mensuales.
- Autenticación para usuarios múltiples.

---

## Capturas de Pantalla

1. **Estado inicial:** vista inicial de la aplicación sin actividades registradas. El botón para reiniciar la app está deshabilitado.  
![Estado inicial](/img/calorias1.png)

2. **Actividades registradas:** muestra la lista de actividades clasificadas como comida o ejercicio, con sus respectivas calorías. Cada actividad tiene botones para editar o eliminar.  
![Actividades registradas](/img/calorias2.png)

3. **Calorías actualizadas:** resumen de calorías consumidas, quemadas y totales, actualizado en tiempo real al modificar las actividades.  
![Calorías actualizadas](/img/calorias3.png)

---

## Autor

Edwin Soto – [https://github.com/esotooo](https://github.com/esotooo) – edwinsoto.developer@gmail.com

