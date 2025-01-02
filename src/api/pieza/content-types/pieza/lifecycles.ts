// ./src/api/pieza/content-types/pieza/lifecycles.ts

let pedidoIdForDelete = null;

export default {
  async afterCreate(event) {
    const { params } = event;

    const pedidoId = params?.data?.pedido?.set[0]?.id;
    if (pedidoId) {
      try {
        // Contar el número de piezas asociadas al pedido
        const totalPiezas = await strapi.db.query("api::pieza.pieza").count({
          where: { pedido: pedidoId },
        });

        // Actualizar el campo de cantidad en el pedido
        await strapi.db.query("api::pedido.pedido").update({
          where: { id: pedidoId },
          data: { numeroDePiezas: totalPiezas },
        });

        // strapi.log.info(`Pedido ${pedidoId} actualizado ${totalPiezas} con piezas.`);
      } catch (error) {
        strapi.log.error("Error al actualizar la cantidad de piezas en el pedido onAfterCreate:", error);
      }
    }
  },

  async beforeDelete(event) {
    const { params } = event;
    const piezaId = params?.where?.id;

    if (piezaId) {
      try {
        // Contar el número de piezas asociadas al pedido
        const pieza = await strapi.db.query("api::pieza.pieza").findOne({
          where: { id: piezaId },
          populate: {
            pedido: {
              fields: ["id", "documentId"],
            },
          },
        });

        if (!pieza) return;
        pedidoIdForDelete = pieza?.pedido?.id;
      } catch (error) {
        strapi.log.error("Error al actualizar la cantidad de piezas en el pedido onBeforeDelete:", error);
        pedidoIdForDelete = null;
      }
    }
  },

  async afterDelete(event) {
    if (pedidoIdForDelete) {
      try {
        // Contar el número de piezas asociadas al pedido
        const totalPiezas = await strapi.db.query("api::pieza.pieza").count({
          where: { pedido: pedidoIdForDelete },
        });
        console.log("🚀 ~ beforeDelete ~ totalPiezas:", totalPiezas);

        // Actualizar el campo de cantidad en el pedido
        await strapi.db.query("api::pedido.pedido").update({
          where: { id: pedidoIdForDelete },
          data: { numeroDePiezas: totalPiezas },
        });

        // strapi.log.info(`Pedido ${pedidoIdForDelete} actualizado ${totalPiezas} con piezas.`);
      } catch (error) {
        strapi.log.error("Error al actualizar la cantidad de piezas en el pedido onAfterDelete:", error);
      } finally {
        pedidoIdForDelete = null;
      }
    }
  },
};
