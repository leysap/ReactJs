const productos = [
    { id: 1, name: "Remera HEART Negra", description: "Remera mangas cortas de algodón. Con corazón", price:1600 , img:"../photos/remera1.jpg"},
    { id: 2, name: "Pantalón LONIA", description: "Chupin de jeans color negro. Tiro alto. Súper elastizado. Confección normal. Referencia: la modelo usa talle 36 y mide 67 cm de cintura y 90 cm de cadera.", price:2600, img:"../photos/panta1.jpg"},
    { id: 3, name: "Short TURQUÍA", description: "Short de jeans rígido. Tiro alto. Con roturas. Confección normal. Referencia: la modelo usa talle 36 y mide 67 cm de cintura y 90 cm de cadera.", price: 3500 , img:"../photos/short1.jpg"},
    

]

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() =>
      resolve(productos),2000
    );
  });
}

export const getItem = () => {
  return new Promise((resolve) => {
    setTimeout(() =>
      resolve(productos[0]),2000
    );
  });
}