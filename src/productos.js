const productos = [
    { id: 1, name: "Remera HEART Negra", category: "remeras", description: "Remera mangas cortas de algodón. Con corazón", price:1600 , stock:10, img:"../shirts/remera1.jpg"},
    { id: 2, name: "Remera top ALBERTA",category: "remeras", description: "Top de morley estampado de margaritas.", price:1584 , stock: 5 ,img:"../shirts/TopAlberta.jpg"},
    { id: 3, name: "Musculosa MUCHI",category: "remeras", description: "Musculosa de algodón panal. Talle único.", price:1144 , stock: 4, img:"../shirts/MusculosaMuchi.jpg"},
    { id: 4, name: "Musculosa MIRI Gris", category: "remeras",description: "Musculosa de algodón panal. Talle único.", price:1144 , stock: 8, img:"../shirts/MusculosaMiri.jpg"},
    { id: 5, name: "Musculosa MIRI Beige", category: "remeras",description: "Musculosa de algodón panal. Talle único.", price:1144 , stock: 10, img:"../shirts/musculosaMiriBeige.jpg"},
    { id: 6, name: "Chupín LONIA", category: "pantalones",description: "Chupin de jeans color negro. Tiro alto. Súper elastizado. Confección normal.", price:3344, stock: 5, img:"../jeans/panta1.jpg"},
    { id: 7, name: "Mom fit GEN",category: "pantalones", description: "Mom fit de jeans con tajo en rodilla. Tiro alto. Rígido.", price:3872, stock: 4 , img:"../jeans/momfitGen.jpg"},
    { id: 8, name: "Mom fit ICE",category: "pantalones", description: "Mom fit celeste. Tiro alto. Rígido.", price:3440, stock:9, img:"../jeans/momFitICE.jpg"},
    { id: 9, name: "Mom fit LUISA", category: "pantalones",description: "Mom fit de jeans celeste. Tiro alto. Rígido. Desflecado en botamanga. Confección normal.", price:3300, stock: 8, img:"../jeans/momFitLuisa.jpg"},
    { id: 10, name: "Short TURQUÍA",category: "shorts", description: "Short de jeans rígido. Tiro alto. Con roturas. Confección normal.", price: 3500 , stock:7, img:"../shorts/short1.jpg"},
    { id: 11, name: "Short ZAIRA",category: "shorts", description: "Short de jeans celeste rígido. Con dobladillo. Tiro alto. Confección normal.", price: 3220 ,stock:6, img:"../shorts/shortZaira.jpg"},
    { id: 12, name: "Short RAYAL",category: "shorts", description: "Short rígido. Desflecado. Negro. Tiro alto.", price: 3544 ,stock:7, img:"../shorts/ShortRayal.jpg"},
    { id: 13, name: "Short SON",category: "shorts", description: "Short de jeans celeste rígido. Tiro alto. Con roturas. Confección normal", price: 3956 , stock:5, img:"../shorts/shortSon.jpg"},
    { id: 14, name: "Chaleco Jamaica",category: "abrigos", description: "Chaleco de jeans rígido.", price: 3960 , stock:7, img:"../abrigos/chalecoJamaica.jpg"},
    { id: 15, name: "Campera ACID",category: "abrigos", description: "Campera crop. Rígida. Nevada.", price: 4160 , stock: 10,img:"../abrigos/camperaAcid.jpg"},
    { id: 16, name: "Buzo MACA Violeta",category: "abrigos", description: "Buzo de algodón con lycra.", price: 2948 , stock: 5,img:"../abrigos/buzoMacaVioleta.jpg"},
    { id: 17, name: "Campera Londres",category: "abrigos", description: "Campera de jeans rigida. Gastada.", price: 3456 , stock:7, img:"../abrigos/camperaLondres.jpg"},
    { id: 18, name: "Short Lilia",category: "shorts", description: "Short color crudo. Tiro alto. Rígido. Desflecado. Confección normal.", price: 3080 , stock:8, img:"../shorts/shortLilia.jpeg"},
    { id: 19, name: "Pantalon TAURO",category: "pantalones", description: "Pantalon blanco. Tiro alto. Rígido. Ruedo desflecado.", price: 3872 , stock:9, img:"../jeans/pantalonTauro.jpg"},
    { id: 20, name: "Campera ALMENDRA",category: "abrigos", description: "Campera rústica de algodón. Con capucha.", price: 3680 , stock:7, img:"../abrigos/camperaAlmendra.jpg"},
    
]

const categories = [
  {id: "remeras" , description: "Remeras"},
  {id:"pantalones", description: "Pantalones"},
  {id:"abrigos", description: "Abrigos"},
  {id:"shorts" , description: "Shorts"}
]

export const getCategories = () => {
  return new Promise((resolve,reject) => {
    
      resolve(categories)
    
  });
}

export const getProductById = (id) => {
  return new Promise ((resolve,reject) => {
    const product = productos.find(prod => parseInt(prod.id) === parseInt(id))
  
    setTimeout(() => resolve(product),1000)
  })
}

export const getProducts = (category) => {
  return new Promise((resolve,reject) => {
    setTimeout(() =>
      category ? resolve(productos.filter(prod => prod.category === category)) : resolve(productos),1000
    );
  });
}
