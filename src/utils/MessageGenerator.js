export const MessageGenerator = (productos, personalData, total) => {
  const message = `
📦 *¡Hola! Me gustaría hacer un pedido* 🌿🫖

🧾 *Detalle del pedido:*
${productos.map((prod) => `• _${prod.cant} x ${prod.name}_`).join("\n")}

💬 *Preferiría que me confirmes el total y la disponibilidad de los productos.*

🧍 *Nombre:* ${personalData.name}
🚚 *Método de envío:* ${personalData.metodoEnvio}
${
  personalData.metodoEnvio === "Envio a domicilio"
    ? `🏡 *Dirección:* ${personalData.address}`
    : ""
}
${personalData.phone ? `📞 *Teléfono:* ${personalData.phone}` : ""}

🔁 *¿Podés confirmarme si está todo correcto? Muchas gracias.* 🙌`;

  return encodeURIComponent(message);
};
