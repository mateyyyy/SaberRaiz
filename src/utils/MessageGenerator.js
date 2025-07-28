export const MessageGenerator = (productos, personalData, total) => {
  const message = `
📦 *¡Hola! Me gustaría hacer un pedido* 🌿🫖

🧾 *Detalle del pedido:*
${productos
  .map(
    (prod) =>
      `• ${prod.cant} x ${prod.name} — *$${(prod.price * prod.cant).toFixed(
        2
      )}*`
  )
  .join("\n")}

💵 *Total: $${total.toFixed(2)}*

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
