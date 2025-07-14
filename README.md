# Contador de Calorias

Una tienda virtual de guitarras desarrollada con React y TypeScript que permite agregar productos al carrito, modificar cantidades, eliminar items y vaciar el carrito. El estado del carrito se mantiene en `localStorage` para persistencia entre recargas.

---

## Demo

[https://escalorietracker.netlify.app/](https://escalorietracker.netlify.app/)

---

## Características

- Listado de guitarras con imagen, descripción y precio.
- Añadir guitarras al carrito con control de cantidad mínima y máxima.
- Incrementar y decrementar cantidad de productos en el carrito.
- Eliminar productos individualmente.
- Vaciar el carrito completo.
- Persistencia automática usando `localStorage`.

---

## Tecnologías

- React 19+
- TypeScript 5.8+
- Vite 7+
- Hooks personalizados (`useCart`)
- CSS con clases TailwindCSS 

---

## Instalación

Clona el repositorio y accede a la carpeta:

```bash
git clone https://github.com/esotooo/carritoCompras.git
cd carritoCompras
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

- `src/components` – Componentes `Header`, `Guitar`, `Footer`.
- `src/hooks/useCart.ts` – Hook personalizado para manejar la lógica del carrito.
- `src/data/db.ts` – Base de datos simulada con las guitarras.
- `src/types/types.ts` – Definiciones de tipos TypeScript.
- `src/App.tsx` – Componente raíz que renderiza la app y conecta el carrito.

---

## Uso

- Navega la colección de guitarras.
- Añade guitarras al carrito usando el botón “Agregar al Carrito”.
- Controla las cantidades desde el carrito desplegable en el header.
- Elimina productos o vacía todo el carrito con un botón dedicado.
- El total a pagar se calcula automáticamente.

---

## Próximas mejoras

- Integrar sistema de checkout y pagos.
- Añadir filtros y búsqueda.
- Mejorar diseño y responsividad.
- Implementar autenticación de usuarios.

---

## Capturas de Pantalla

1. **Página principal:** muestra la colección completa de guitarras disponibles para comprar.  
![Página principal con productos](/img/carritoCompras1.png)

2. **Carrito vacío:** vista inicial del carrito cuando aún no se han agregado productos.  
![Carrito vacío](/img/carritoCompras2.png)

3. **Carrito con productos:** muestra el carrito con items agregados, donde se puede modificar cantidad y ver el total en tiempo real.  
![Carrito con productos y total](/img/carritoCompras3.png)

---

## Autor

Edwin Soto – [https://github.com/esotooo](https://github.com/esotooo) – edwinsoto.developer@gmail.com

