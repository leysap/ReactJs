const productos = [
    { id: 1, name: "Remera HEART Negra", price:1800 , img:"../photos/remera1.jpg"},
    { id: 2, name: "Pantalón LONIA", price:2600, img:"../photos/panta1.jpg"},
    { id: 3, name: "Short TURQUÍA", price: 3500 , img:"../photos/short1.jpg"},
]

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() =>
      resolve(productos),2000
    );
  });
}
