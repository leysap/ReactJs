# A U R O R A

Este es un proyecto realizado completamente con React JS en el curso de Coderhouse.
Se trata de un ecommerce de venta de ropa femenina urbana. 

## Instalación y Ejecución

Para poder ejecutar el programa deberás colocar en la terminal...

### `npm i o npm install`

Con npm i o npm install podrás instalar todas las dependencias  necesarias para hacer funcionar la aplicación.

### `npm start`

Con npm start, podrás iniciar la aplicación. Tarda unos minutos en abrir.

### Cntrl + C

Con control + C , podrás finalizar la ejecución del programa.


## ¿Qué lenguaje de programación utilicé?

Se utilizó: 

- HTML
- CSS / SASS
- Javascript
- Node JS (para la ejecución del servidor)
- React JS 

### App.js

En él se encuentra los routers del proyecto:
- El ItemListContainer, tiene 2 parámetros: "/" (router principal) y "/category/categoryId" ( es el router de categorias de productos específicos)
- El ItemDetailContainer tiene como parámetro: "/item/id" (es el router de detalle del producto).

Además se importó Bootstrap v5.1.3

### productos.js

Se simula el BackEnd en este archivo, ubicado en src.

- Se creó una constante "productos": contiene un array de todos los productos.
- Se creó la constante "categories": es un array que contiene un id y description de la category (este array se utilizará para realizar la función getCategories().)


El mismo contiene diferentes funciones, utilizando Promise:
- **getProducts(category)** : se trata de una función con un parametro (categoria) el cual utilizando un operador ternario, me puede devolver todos los productos o me devuelve los productos (filtrándolos) de acuerdo a la categoria que le paso por parametro de mi función.
- **getProductById**: dada un id, devuelve los datos correspondientes al producto de dicho id.
- **getCategories** : esta función me devuelve mi array de categorias, utilizando Promise, el cual se utilizará en mi componente Navbar.


## Componentes

En src, se encuentra la carpeta "components", en éste se divide en diferentes carpetas con sus respectivos componentes creados y su estilo (SASS).

- **ItemListContainer** : se encarga de consultar todos los productos y pasárselos a "ItemList". En el mismo tambien se filtran las categorias.
- **ItemList**: requiere un array de productos (el cual se lo pasa por parámetro), y se encarga de hacer un map y pasarle esos datos al componente "Item".
- **Item**: este componente recibe todos los datos requeridos para renderizar un producto a la pantalla (previsualización del producto).
- **ItemDetailContainer**: dado un ID de producto se encarga de obtener toda la información necesaria para renderizar el detalle en el componente "ItemDetail".
- **ItemDetail**: se encarga de renderizar los datos otorgados por el "ItemDetailContainer". Este componente contiene el diseño del detalle del producto seleccionado. En él contiene además el componente "ItemCount".
- **ItemCount**: permite contar la cantidad de productos a agregar al carrito utilizando los botones + o -,  y además se encarga de validar el stock del producto seleccionado.
- **Navbar**: es el header de mi ecommerce. Se utilizó react-router para navegar por categorias y ir al home de mi página. Se llamó a la función getCategories() y utilizando useState, luego se mapeó las diferentes categorias en el return de mi componente. Dentro de éste además se encuentra el componente "CartWidget".  
- **CartWidget**: devuelve un botón con una imagen y además la cantidad de productos agregados al carrito.
- **Loader**: componente que me duevuelve el diseño de mi loader al esperar que se carguen mis productos.




