use('gestor_gimnasio');

// Insertamos múltiples productos para el inventario del gimnasio
db.productos.insertMany([
  {
    id_producto: "ART002",
    nombre: "Botella de Agua 1L",
    descripcion: "Botella deportiva de plástico libre de BPA.",
    precio: 2500,
    stock: 50,
    categoria: "Accesorios"
  },
  {
    id_producto: "ART003",
    nombre: "Candado de Combinación",
    descripcion: "Candado de 4 dígitos ideal para los lockers del vestuario.",
    precio: 4000,
    stock: 30,
    categoria: "Accesorios"
  },
  {
    id_producto: "ART004",
    nombre: "Remera Dry-Fit Entrenamiento",
    descripcion: "Remera antitranspirante color negro.",
    precio: 12000,
    stock: 15,
    categoria: "Indumentaria"
  },
  {
    id_producto: "ART005",
    nombre: "Barra de Proteína",
    descripcion: "Snack post-entrenamiento sabor chocolate y maní.",
    precio: 1500,
    stock: 100,
    categoria: "Snacks"
  }
]);