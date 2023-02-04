
export const generateOrder = ({
  nombre = "",
  email = "",
  telefono = "",
  cart = [],
  total = 0,
}) => {
  return {
    buyer: {
      nombre: nombre,
      email: email,
      telefono: telefono,
    },
    items: cart,
    total: total,
    createdAt: new Date().toLocaleString(),
  };
};
