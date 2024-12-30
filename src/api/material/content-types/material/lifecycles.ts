export default {
  async afterCreate(event) {
    const { result, params } = event;
    console.log("material creada result:", result);
    console.log("material creada params:", params);

    // Lógica adicional aquí
    // await actualizarCantidadPiezas(result.pedido.id);
  },

  async afterDelete(event) {
    const { result, params } = event;
    console.log("material eliminada result:", result);
    console.log("material eliminada params:", params);

    // Lógica adicional aquí
    // await actualizarCantidadPiezas(result.pedido.id);
  },
};
