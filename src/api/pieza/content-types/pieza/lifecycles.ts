// ./src/api/pieza/content-types/pieza/lifecycles.js

export default {
  async afterCreate(event) {
    const { result, params } = event;
    console.log("Pieza creada result:", result);
    console.log("Pieza creada params:", result?.pedido);

    // Lógica adicional aquí
    // await actualizarCantidadPiezas(result.pedido.id);
  },

  async afterDelete(event) {
    const { result, params } = event;
    console.log("Pieza eliminada result:", event);
    // console.log("Pieza eliminada params:", result?.pedido);

    // Lógica adicional aquí
    // await actualizarCantidadPiezas(result.pedido.id
  },
};

// Función para actualizar la cantidad de piezas en el pedido
// async function actualizarCantidadPiezas(pedidoId) {
//   const pedido = await strapi.services["api::pedido.pedido"].findOne({ id: pedidoId });

//   if (pedido) {
//     const cantidadPiezas = await strapi.services["api::pieza.pieza"].count({ pedido: pedidoId });

//     await strapi.services["api::pedido.pedido"].update({ id: pedidoId }, { cantidad: cantidadPiezas });
//     console.log(`Pedido actualizado con nueva cantidad de piezas: ${cantidadPiezas}`);
//   } else {
//     console.error("Pedido no encontrado:", pedidoId);
//   }
// }

// export default {
//   lifecycles: {
//     async afterCreate(event) {
//       const { result, params } = event;
//       console.log("Pieza creada:", result);
//       console.log("🚀 ~ afterCreate ~ params:", params);
//     },
//     async afterDelete(event) {
//       const { result, params } = event;
//       console.log("Pieza borrada:", result);
//       console.log("🚀 ~ afterDelete ~ params:", params);
//     },
//   },
// };

// export default {
//   async afterCreate(event) {
//     const { result } = event;
//     console.log("🚀 ~ afterCreate ~ result11111111:", result);

//     // Actualizar el número de piezas después de crear un pedido
//     const count = await strapi.db.query("api::pieza.pieza").count({
//       where: { pedido: result.id },
//     });

//     await strapi.db.query("api::pedido.pedido").update({
//       where: { id: result.id },
//       data: { numeroDePiezas: count },
//     });
//   },

//   async afterUpdate(event) {
//     const { result } = event;
//     console.log("🚀 ~ afterUpdate ~ result22222222222:", result);

//     // Actualizar el número de piezas después de actualizar un pedido
//     const count = await strapi.db.query("api::pieza.pieza").count({
//       where: { pedido: result.id },
//     });
// );
//     await strapi.db.query("api::pedido.pedido").update({
//       where: { id: result.id },
//       data: { numeroDePiezas: count },
//     });
//   },

//   async afterDelete(event) {
//     const { result } = event;
//     console.log("🚀 ~ afterDelete ~ result333333333:", result);

//     // Actualizar el número de piezas después de eliminar una pieza del pedido
//     const pedidos = Array.isArray(result) ? result : [result];

//     for (const pedido of pedidos) {
//       const count = await strapi.db.query("api::pieza.pieza").count({
//         where: { pedido: pedido.id },
//       });

//       await strapi.db.query("api::pedido.pedido").update({
//         where: { id: pedido.id },
//         data: { numeroDePiezas: count },
//       });
//     }
//   },
// };
