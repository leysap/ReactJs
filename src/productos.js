const productos = [
    { id: 1, name: "Remera HEART Negra", description: "Remera mangas cortas de algodón. Con corazón", price:1600 , img:"../shirts/remera1.jpg"},
    { id: 2, name: "Remera top ALBERTA", description: "Top de morley estampado de margaritas.", price:1584 , img:"../shirts/TopAlberta.jpg"},
    { id: 3, name: "Musculosa MUCHI", description: "Musculosa de algodón panal. Talle único.", price:1144 , img:"../shirts/MusculosaMuchi.jpg"},
    { id: 4, name: "Musculosa MIRI", description: "Musculosa de algodón panal. Talle único.", price:1144 , img:"../shirts/MusculosaMiri.jpg"},
    { id: 5, name: "Chupín LONIA", description: "Chupin de jeans color negro. Tiro alto. Súper elastizado. Confección normal. Referencia: la modelo usa talle 36 y mide 67 cm de cintura y 90 cm de cadera.", price:3344, img:"../jeans/panta1.jpg"},
    { id: 6, name: "Mom fit GEN", description: "Mom fit de jeans con tajo en rodilla. Tiro alto. Rígido.", price:3872, img:"../jeans/momfitGen.jpg"},
    { id: 7, name: "Mom fit ICE", description: "Mom fit celeste. Tiro alto. Rígido.", price:3440, img:"../jeans/momFitICE.jpg"},
    { id: 8, name: "Mom fit LUISA", description: "Mom fit de jeans celeste. Tiro alto. Rígido. Desflecado en botamanga. Confección normal. Referencia: la modelo usa talle 36 y mide 67 cm de cintura y 90 cm de cadera.", price:3300, img:"../jeans/momFitLuisa.jpg"},
    { id: 9, name: "Short TURQUÍA", description: "Short de jeans rígido. Tiro alto. Con roturas. Confección normal. Referencia: la modelo usa talle 36 y mide 67 cm de cintura y 90 cm de cadera.", price: 3500 , img:"../shorts/short1.jpg"},
    { id: 10, name: "Short ZAIRA", description: "Short de jeans celeste rígido. Con dobladillo. Tiro alto. Confección normal. Referencia: la modelo usa talle 36 y mide 67 cm de cintura y 90 cm de cadera.", price: 3220 , img:"../shorts/shortZaira.jpg"},
    { id: 11, name: "Short RAYAL", description: "Short rígido. Desflecado. Negro. Tiro alto.", price: 3544 , img:"../shorts/ShortRayal.jpg"},
    { id: 12, name: "Short SON", description: "Short de jeans celeste rígido. Tiro alto. Con roturas. Confección normal. Referencia: la modelo usa talle 36 y mide 67 cm de cintura y 90 cm de cadera.", price: 3956 , img:"../shorts/shortSon.jpg"},
    
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