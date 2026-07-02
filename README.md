# Gestor de Gimnasio - Sistema Full-Stack 🏋️‍♂️🔥

Un sistema web completo y robusto diseñado para la administración integral de un gimnasio. Esta aplicación permite gestionar de manera centralizada el inventario de productos, el registro y control de socios, y la facturación de pedidos en tiempo real, aplicando una arquitectura limpia y una experiencia de usuario moderna.

---

## 🚀 Propósito del Proyecto

El objetivo principal de esta aplicación es automatizar los procesos operativos cotidianos de un centro deportivo. Busca solucionar problemas críticos de gestión mediante:
- **Control de Inventario:** Monitorear el stock disponible de artículos deportivos y suplementos, evitando quiebres de stock.
- **Gestión de Clientes:** Centralizar los datos de los socios, automatizar su identificación y controlar la vigencia de sus membresías.
- **Automatización de Procesos:** Conectar las ventas directamente con el inventario para asegurar que cada transacción impacte en tiempo real en los recursos físicos del negocio.

---

## 🛠️ Tecnologías Utilizadas

El proyecto fue desarrollado utilizando un enfoque **Full-Stack** con arquitectura de software moderna:

### Backend (Servidor y Base de Datos)
- **Node.js**: Entorno de ejecución para el lado del servidor.
- **Express.js**: Framework ágil para la creación de la API REST y el manejo de rutas.
- **MongoDB**: Base de Datos NoSQL utilizada para el almacenamiento flexible y eficiente de documentos.
- **Mongoose**: ODM (Object Document Mapper) para establecer esquemas de validación estrictos y gestionar consultas asíncronas.
- **Dotenv**: Gestión segura de variables de entorno mediante un archivo de configuración personalizado (`var-entorno.env`).

### Frontend (Interfaz Web)
- **HTML5**: Estructuración semántica de las diferentes vistas de la aplicación.
- **CSS3**: Diseño personalizado en **Modo Oscuro (Dark Mode)** de estilo deportivo (acentos en rojo, amarillo y negro) utilizando maquetación fluida con **Flexbox**.
- **JavaScript (Vanilla ES6+)**: Lógica asíncrona en el cliente que interactúa con la API mediante el método `fetch()` para realizar operaciones CRUD completas sin recargar la página.

---

## 📁 Estructura del Proyecto (Monorepo)

El repositorio está organizado de forma clara y modular:

```text
Gym-Management-Services/
├── Database/                 # CAPA DE BACKEND
│   ├── config/               # Conexión centralizada a MongoDB
│   ├── controllers/          # Lógica de negocio (Controladores de productos, socios y pedidos)
│   ├── models/               # Modelos y esquemas de Mongoose (Producto, Socio, Pedido)
│   ├── routes/               # Definición de rutas de la API REST
│   ├── server.js             # Punto de entrada del servidor Express
│   └── var-entorno.env       # Variables de entorno locales
├── Frontend/                 # CAPA DE FRONTEND (Interfaz de Usuario)
│   ├── index.html            # Vista principal / Panel de Inventario
│   ├── socios.html           # Vista de Gestión y Alta de Clientes
│   ├── pedidos.html          # Vista de Registro y Control de Ventas
│   └── style.css             # Hoja de estilos general (Dark Mode)
└── README.md                 # Documentación del sistema