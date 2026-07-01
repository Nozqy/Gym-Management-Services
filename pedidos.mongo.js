use('gestor_gimnasio');

// 1. Registramos la venta (Pedido) en el mostrador
db.pedidos.insertOne({
  id_socio: "S001",
  productos: [
    { 
      id_producto: "ART002", 
      nombre: "Botella de Agua 1L",
      cantidad: 2, 
      precio_unitario: 2500 
    },
    { 
      id_producto: "ART005",
      nombre: "Barra de Proteína", 
      cantidad: 1, 
      precio_unitario: 1500 
    }
  ],
  fecha_pedido: new Date(),
  estado: "entregado",
  total: 6500
});

// 2. Actualizamos automáticamente el inventario (Restamos el stock)
// Descontamos las 2 botellas de agua (ART002)
db.productos.updateOne(
  { id_producto: "ART002" },
  { $inc: { stock: -2 } }
);

// Descontamos la barra de proteína (ART005)
db.productos.updateOne(
  { id_producto: "ART005" }, 
  { $inc: { stock: -1 } }    
);