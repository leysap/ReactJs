# A U R O R A

Este es un proyecto realizado con React JS en el curso de Coderhouse.
Se trata de un ecommerce de venta de ropa femenina urbana. 

## Instalación y Ejecución

Para poder ejecutar el programa deberás colocar en la terminal...

### `npm i o npm install`

Con npm i o npm install podrás instalar todas las dependencias necesarias para hacer funcionar la aplicación.

### `npm start`

Con npm start, podrás iniciar la aplicación. Tarda unos minutos en abrir.

### Cntrl + C

Con control + C , podrás finalizar la ejecución del programa.


## ¿Qué se utilizó?

- HTML
- CSS - SASS
- Javascript
- Node JS (para la ejecución del servidor)
- React JS 

## Frameworks

- Se importó Bootstrap v5.1.3. Éste es una librería (CSS) multiplataforma o conjunto de herramientas de código abierto para diseño de sitios y aplicaciones web. Contiene plantillas de diseño con tipografía, formularios, botones, cuadros, menús de navegación y otros elementos de diseño basado en HTML y CSS, así como extensiones de JavaScript adicionales.
Se lo utilizó para el diseño de mi página, ya sea en el header(encabezado), para algunos de mis botones, en el diseño de mi Loader, entre otros. Me aseguré que la página sea responsive en los distintos dispositivos.

- SASS para el estilo de los distintos componentes. De acuerdo al componente , se encuentra ligado su style.scss.

- Utilicé Font Awesome, es un framework de iconos vectoriales y estilos css. Es utilizado para sustituir imágenes de iconos comunes por gráficos vectoriales convertidos en fuentes. Posee mas de 400 iconos transformadas en fuentes. Lo utilicé en los botones de mi componente ItemCount.

## public 

En public se encuentran distintas carpetas con fotos de mis productos para mi ecommerce.
Además tambien se encuentra el index.html, donde modifique el titulo de mi página, agregando el logo, y asocie con un script el framework Font Awesome.

## App.js y Routing

Se encuentra instalado  react-router-dom versión 6.1
En App.js se encuentran los siguientes ROUTERS:
- El ItemListContainer, tiene 2 parámetros: "/" (router principal), me redirige al Home de mi página(el cual me renderiza todos los productos) y "/category/categoryId" ( es el router de categorias de productos específicos), me renderiza los productos de la categoria seleccionada.
- El ItemDetailContainer tiene como parámetro: "/item/id" (es el router de detalle del producto). Me redirige a ItemDetail (para ver el detalle del producto).
- El Cart tiene como parámetro: "/cart" lo cual me redirige al Carrito de compras (muestro la lista de productos elegidos)
- El Dashboard tiene como parámetro: "/dashboard" . Éste me redirige a su componente propiamente dicho(Dashboard).
- El Form tiene como parámetro: "/form" el cual te redirige a un formulario de datos del cliente.

## Firebase - Firestore

Firebase es una plataforma de back-end como servicio. Un servicio provisto por Google para satisfacer las distintas necesidades que puede tener una aplicación y su ciclo de desarrollo. 
Para acceder a los servicios de firebase tuve que registrarme con mi cuenta de Gmail.
Cree el nombre de mi proyecto y una vez listo entre al panel de control. En este panel accedí a Firestore Database para crear mi base de datos.
Los datos se almacenan en colecciones con sus respectivos campos.
 
Se armó las siguientes: 
1. Colección "items": se encuentran los productos con sus campos correspondientes: id:string(autogenerado por firestore), category: string, description: string , img: src de mi foto ubicado en public, name: string, price: number y stock: number.
2. Colección "categories": sus campos son id y description.
3. "Orders": esta colección se crea luego de generar un pedido.

## ¿ Que datos me genera la orden?

1. buyer: es un objeto con sus propiedades: {address, name, phone, email , date} (estos datos se completan al llenar el formulario).
2. items: es un array de objetos (los productos seleccionados por el cliente). Cada objeto se guarda con sus propiedades: [{id: string(autogenerado por firestore), name: string, price: number, quantity: number, stock: number }]
3. total: es el monto total a pagar.

Una vez subido todos los datos tuve que instalar firebase a mi aplicación web para realizar la integración. De firebase obtuve las "api Keys" para acceder al servicio.

## firebase.js

La inicializacíon de firebase se realizó en un archivo aparte para tener un código mas ordenado y prolijo.
Se encuentra en la carpeta "service/firebase/firebase.js".
En este archivo tambien se encuentran las credenciales.
La inicializacón de la aplicación y para acceder a mi base de datos en firestore ,se las guarda en una constante ( siguiendo los pasos de la documentación).

Para poder consultar los documentos, en este mismo archivo se armo dos funciones:
- getProducts(): me retorna una promesa, es una función para traerme todos los productos y también incluye un filtro de categorias. Función que se utiliza en mi componente ItemListContainer.
- getCategories(): retornandome una promesa, me trae todas las categorias. Esta función se utiliza en mi componente NavBar.
Estas dos funciones se armaron para optimizar el código.

## Variables de entorno (.env)

Las variables de entorno son variables que yo puedo acceder a cualquier parte de mi aplicación gracias a React o en otros casos gracias a una libreria que me permiten leer estas variables. Se utilizan para evitar subir a github información sensible. 
El mismo se encuentra ignorado (en .gitignore) para cuando se tenga que pushear el proyecto a github.
En este archivo cree variables con las credenciales de firebase.

## Componentes

En src, se encuentra la carpeta "components", en éste se divide en diferentes carpetas con sus respectivos componentes y su estilo (SASS).

- **ItemListContainer** : se encarga de consultar todos los productos a través de la función creada en firebase.js (en este caso el getProducts()) y pasárselos a "ItemList". En el mismo también se filtran las categorías.
- **ItemList**: requiere un array de productos (el cual se lo pasa por parámetro), y se encarga de hacer un map y pasarle esos datos al componente "Item".
- **Item**: este componente recibe la información pasada por el ItemList, para renderizar un producto a la pantalla (es la previsualización del producto).
- **ItemDetailContainer**: dado un ID se encarga de obtener toda la información necesaria para renderizar el detalle en el componente "ItemDetail".
- **ItemDetail**: se encarga de renderizar los datos otorgados por el "ItemDetailContainer". Este componente contiene el diseño del detalle del producto seleccionado. En él contiene además el componente "ItemCount".
- **ItemCount**: permite contar la cantidad de productos a agregar al carrito utilizando los botones + o -,  y además se encarga de validar el stock del producto seleccionado.
- **Navbar**: es el header de mi ecommerce. Se utilizó react-router para navegar por categorias y ir al home de mi página (al hacer click en el logo). Se llamó a la función getCategories() ubicado en firebase.js, para traer de mi base de datos las categorias. Dentro de éste además se encuentra el componente "CartWidget".  
- **CartWidget**: devuelve un Link (que me redirige al componente Cart(el carrito)) con una imagen y además la cantidad de productos agregados. Este mismo es solo visible en mi NavBar solo cuando se agrega un producto al carrito, de lo contrario, no aparece visible.
- **Loader**: componente que me duevuelve el diseño de mi loader-loading al esperar que se carguen mis productos. Se utilizó bootstrap para el diseño de mi spinner.
- **CartContext**: en este componente se creó el Context. Éste en React se utiliza para crear variables globales que se podrá compartir con otros componentes en mi aplicación. El Provider es el componente que proporciona el valor, mientras que el hook useContext es el sustituto del componente Consumer.
Se crearon las distintas funciones:
addItem(): con dos parámetros. Función para agregar al carrito tomando en cuenta si el producto ingresa por primera vez o no (reconociéndolo por su ID). 
En el caso que ingresa por primera vez, se crea un nuevo objeto con las propiedades que quiero guardar en mi carrito de compras (product = {id: item.id, name: item.name , description: item.description, price: item.price,stock: item.stock , quantity: quantity}).
Como extra, también utilicé localStorage.
En el caso que ingresa por segunda vez, se suma la cantidad (del producto) ingresada con el existente en el carrito, se multiplica el precio por la cantidad y va restando el stock. Luego se hace un filtro eliminando ese producto repetido y seteando el producto actualizado al hook-array.
1. removeIdem(): función para eliminar un producto, reconociéndolo por su ID, y borrándolo del carrito.
2. countProducts(): función para contar la cantidad de productos agregados en el carrito.
3. total(): función para sumar los precios de los productos agregados al carrito y retornarme su total. 
4. isInCart(): con un parámetro. Función para reconocer por su ID, si el producto ingresado existe en el carrito o no. 
5. clear(): función para borrar todo lo que hay dentro del hook. Y además me borra todo lo que tenga en mi localStorage.
- **Cart**: este componente seria el "carrito", el cual se puede visualizar los productos agregados, en una tabla, con la opcion de poder eliminar algun producto en particular o vaciar totalmente el carrito.
- **Form**: se encuentra el formulario que debe completar el cliente. Tambien se encuentran sus validaciones y de realizar la orden. Al enviar se redirige al componente Dashboard. 
- **Dashboard**: en él se visualizan todos los "tickets".
- **TicketsMessage**: contiene el "diseño" de cada uno de los tickets.

## Autor

Leysa Melina Pozo, programadora autodidacta, 26 años.
Córdoba, Argentina.
Este es un link [a mi LinkedIn](www.linkedin.com/in/leysa-pozo) 