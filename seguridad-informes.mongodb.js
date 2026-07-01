use('gestor_gimnasio');

// 1. VALIDACIÓN DE ESQUEMAS: Blindamos la colección 'productos'
db.runCommand({
  collMod: "productos",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["id_producto", "nombre", "precio", "stock"],
      properties: {
        id_producto: { bsonType: "string", description: "Obligatorio: Cadena de texto" },
        nombre: { bsonType: "string", description: "Obligatorio: Cadena de texto" },
        precio: { bsonType: "int", description: "Obligatorio: Número entero" },
        stock: { bsonType: "int", description: "Obligatorio: Número entero" }
      }
    }
  },
  validationLevel: "strict",
  validationAction: "error"
});

// 2. INFORMES (AGGREGATE): Reporte de total de unidades vendidas por producto
db.pedidos.aggregate([
  // Etapa 1: "Desarmar" el ticket de venta
  { $unwind: "$productos" },
  // Etapa 2: Agrupar por producto y sumar las cantidades
  {
    $group: {
      _id: "$productos.id_producto",
      totalVentas: { $sum: "$productos.cantidad" }
    }
  }
]);