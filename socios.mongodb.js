// Seleccionamos o creamos la base de datos del proyecto
use('gestor_gimnasio');

// Insertamos un documento en la colección 'socios' (Diseño Desnormalizado)
db.socios.insertOne({
  id_socio: "S001",
  nombre: "Carlos Gómez",
  correo: "carlos.gomez@example.com",
  telefono: "3804123456",
  estado_activo: true,
  membresia_actual: {
    tipo: "Pase Libre - Musculación",
    precio_mensual: 15000,
    fecha_vencimiento: new Date("2026-07-27")
  },
  historial_pagos: [
    {
      id_pago: "P1001",
      fecha: new Date("2026-06-27"),
      monto: 15000,
      metodo_pago: "Transferencia"
    }
  ]
});