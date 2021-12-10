const productos = [
    { id: 1, name: "Remera HEART Negra", category: "Remeras", description: "Remera mangas cortas de algodón. Con corazón", price:1600 , stock:10, img:"../shirts/remera1.jpg"},
    { id: 2, name: "Remera top ALBERTA",category: "Remeras", description: "Top de morley estampado de margaritas.", price:1584 , stock: 3 ,img:"../shirts/TopAlberta.jpg"},
    { id: 3, name: "Musculosa MUCHI",category: "Remeras", description: "Musculosa de algodón panal. Talle único.", price:1144 , stock: 4, img:"../shirts/MusculosaMuchi.jpg"},
    { id: 4, name: "Musculosa MIRI Gris", category: "Remeras",description: "Musculosa de algodón panal. Talle único.", price:1144 , stock: 8, img:"../shirts/MusculosaMiri.jpg"},
    { id: 5, name: "Musculosa MIRI Beige", category: "Remeras",description: "Musculosa de algodón panal. Talle único.", price:1144 , stock: 10, img:"../shirts/musculosaMiriBeige.jpg"},
    { id: 6, name: "Chupín LONIA", category: "Pantalones",description: "Chupin de jeans color negro. Tiro alto. Súper elastizado. Confección normal. Referencia: la modelo usa talle 36 y mide 67 cm de cintura y 90 cm de cadera.", price:3344, stock: 5, img:"../jeans/panta1.jpg"},
    { id: 7, name: "Mom fit GEN",category: "Pantalones", description: "Mom fit de jeans con tajo en rodilla. Tiro alto. Rígido.", price:3872, stock: 4 , img:"../jeans/momfitGen.jpg"},
    { id: 8, name: "Mom fit ICE",category: "Pantalones", description: "Mom fit celeste. Tiro alto. Rígido.", price:3440, stock:9, img:"../jeans/momFitICE.jpg"},
    { id: 9, name: "Mom fit LUISA", category: "Pantalones",description: "Mom fit de jeans celeste. Tiro alto. Rígido. Desflecado en botamanga. Confección normal. Referencia: la modelo usa talle 36 y mide 67 cm de cintura y 90 cm de cadera.", price:3300, stock: 8, img:"../jeans/momFitLuisa.jpg"},
    { id: 10, name: "Short TURQUÍA",category: "Shorts", description: "Short de jeans rígido. Tiro alto. Con roturas. Confección normal. Referencia: la modelo usa talle 36 y mide 67 cm de cintura y 90 cm de cadera.", price: 3500 , stock:7, img:"../shorts/short1.jpg"},
    { id: 11, name: "Short ZAIRA",category: "Shorts", description: "Short de jeans celeste rígido. Con dobladillo. Tiro alto. Confección normal. Referencia: la modelo usa talle 36 y mide 67 cm de cintura y 90 cm de cadera.", price: 3220 ,stock:6, img:"../shorts/shortZaira.jpg"},
    { id: 12, name: "Short RAYAL",category: "Shorts", description: "Short rígido. Desflecado. Negro. Tiro alto.", price: 3544 ,stock:4, img:"../shorts/ShortRayal.jpg"},
    { id: 13, name: "Short SON",category: "Shorts", description: "Short de jeans celeste rígido. Tiro alto. Con roturas. Confección normal. Referencia: la modelo usa talle 36 y mide 67 cm de cintura y 90 cm de cadera.", price: 3956 , stock:5, img:"../shorts/shortSon.jpg"},
    { id: 14, name: "Chaleco Jamaica",category: "Abrigos", description: "Chaleco de jeans rígido.", price: 3960 , stock:7, img:"../abrigos/chalecoJamaica.jpg"},
    { id: 15, name: "Campera ACID",category: "Abrigos", description: "Campera crop. Rígida. Nevada.", price: 4160 , stock: 2,img:"../abrigos/camperaAcid.jpg"},
    { id: 16, name: "Buzo MACA Violeta",category: "Abrigos", description: "Buzo de algodón con lycra.", price: 2948 , stock: 5,img:"../abrigos/buzoMacaVioleta.jpg"},
    { id: 17, name: "Campera Londres",category: "Abrigos", description: "Campera de jeans rigida. Gastada.", price: 3456 , stock:7, img:"../abrigos/camperaLondres.jpg"},
    { id: 18, name: "Short Lilia",category: "Shorts", description: "Short color crudo. Tiro alto. Rígido. Desflecado. Confección normal. Referencia: la modelo usa talle 36 y mide 67 cm de cintura y 90 cm de cadera.", price: 3080 , stock:8, img:"../shorts/shortLilia.jpeg"},
    { id: 19, name: "Pantalon TAURO",category: "Pantalones", description: "Pantalon blanco. Tiro alto. Rígido. Ruedo desflecado.", price: 3872 , stock:9, img:"../jeans/pantalonTauro.jpg"},
    { id: 20, name: "Campera ALMENDRA",category: "Abrigos", description: "Campera rústica de algodón. Con capucha.", price: 3680 , stock:7, img:"../abrigos/camperaAlmendra.jpg"},
    
]


export const getProductsByCategories = (category) => {
  return new Promise ((resolve, reject) => {
    const categoria = productos.filter(prod => prod.category === category)
      setTimeout(() => resolve(categoria), 1000)
  })
}

export const getProductById = (id) => {
  return new Promise ((resolve,reject) => {
    const product = productos.find(prod => parseInt(prod.id) === parseInt(id))
  
    setTimeout(() => resolve(product),1000)
  })
}

export const getProducts = () => {
  return new Promise((resolve,reject) => {
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