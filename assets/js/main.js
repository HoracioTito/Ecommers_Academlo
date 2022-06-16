
/* BASE DE DATOS */
const arrItems = [
    {
      id: 1,
      name: 'Hoodies',
      price: 14.00,
      image: 'assets/items_img/featured1.png',
      description :'Buzo campera con capucha y bolsillos centrales.Forrado en  su interior con corderito en frente espalda pecho y capucha.Bolsillos centrales con cierre.',
      category: 'hoodies',
      quantity: 10
    },
    {
      id: 2,
      name: 'Shirts',
      price: 24.00,
      image: 'assets/items_img/featured2.png',
      description :'Escote Redondo. Composición: 50% algodón - 50% poliéster . Corte: Regular.',
      category: 'shirts',
      quantity: 15
    },
    {
      id: 3,
      name: 'Sweatshirts',
      price: 24.00,
      image: 'assets/items_img/featured3.png',
      description :'Esta campera clásica está confeccionada en rústico grueso de algodón, pensado para ser duradera. Calce de corte clásico con capucha, cordón de ajuste y bolsillo canguro.',
      category: 'sweatshirts',
      quantity: 20
    },
      {
      id: 4,
      name: 'Hoodies',
      price: 14.00,
      image: 'assets/items_img/hoodies_4.png',
      description :'Buzo de rustico de algoddn con poliester. Tiene bordado en el hombro. Su cuello, puños y cintura son en ribb. El buzo Archie es abrigado y un must de la temporada..',
      category: 'hoodies',
      quantity: 3
    },
    {
      id: 5,
      name: 'Shirts',
      price: 24.00,
      image: 'assets/items_img/canguro_5.png',
      description :'La Campera Lotto Smart está confeccionada en poliéster y fue pensada para ser un must en tu ropero a la hora de elegir tu outfit y salir a la calle. ',
      category: 'shirts',
      quantity: 15
    },
    {
      id: 6,
      name: 'Sweatshirts',
      price: 24.00,
      image: 'assets/items_img/capucha_6.png',
      description :'Costuras de refuerzo en hombros y siza, con Bolsillo Canguro y Doble Capucha. Minimo Encogimiento.',
      category: 'sweatshirts',
      quantity: 5
    }
  ]
  


  /* CARGA DE PAGINA LEER BASE DE DATOS */

  /* Arrow functions / Funciones flecha
  Son una forma de escribir de una manera mas corta funciones anonimas. Se caracterizan por el uso de => 

  const saludarUsuario = ( nombre ) =>{
      return `Hola ${nombre}! Bienvenidx a Academlo.`
  } */
  let listMenuItems =`<li class="pointer" id="id-all" data-filter="All">
                      <h3 class="title-menu font-zise1">Show All</h3>
                      <span class="title-menu font-zise2">show all products</span>
                      </li>`

   /**************************** 
    * 1 FN Carga menu productos  *
    * **************************/

  const loadMenuItems = ( arrProd ) => {
      /* Referencia id = id-products */
      let li_Menu = document.getElementById("li-menu")

      /* Obtener Categoria y cantidad de cada una */
      const objCategory = {}
      arrProd.forEach(info => {
        
        if (objCategory[info.category] === undefined ){
          /* Crea el objeto { propCategoria : [cantidad,nombre]} */
          objCategory[info.category] = [ info.quantity , info.name ]
        }else{
          objCategory[info.category][0] += objCategory[info.category][0]
        }
     })
    /* console.log(objCategory)
     console.log("-----------------------------------------------------------")  */
    /* Recorremos Obj Category  */
    /* { hoodies: [20, 'Hoodies'],shirts: [30, 'Shirts'], sweatshirts:  [40, 'Sweatshirts'] */
    for (const dat in objCategory ) {
        /* Concatenamos lista productos */
        listMenuItems += ` <li class="pointer" id="id-${dat}" data-filter="${dat}">
                           <h3 class="title-menu font-zise1">${objCategory[dat][1]}</h3>
                           <span class="title-menu font-zise2">Stock: ${objCategory[dat][0]} </span>
                           </li>`
        //console.log(objModel[dat])
        // console.log(dat.)
    } 
    /* Mostaramos Menu agregando LI item */
    li_Menu.innerHTML = listMenuItems
  } 

  

  /**************************** 
   * 2- FN Carga Productos       *
   * **************************/

 let listItems =""

 const loadItems = ( arrProd ) => {
  /* Refereencia id = id-products */
  let contentProduct = document.getElementById("id-products")

   /* Recorremos DB productos  */
   arrProd.forEach(info => {
       /* Concatenamos lista productos */
       listItems += `<div class="article" filter="${info.category}" >
               <a href="#home">
                  <img  src="./${info.image}" class="article-img" data-id="${info.id}">
               </a>
               <div class="info">
                   <h2 class="price">$ ${info.price}<small class="stock">| Stock: ${info.quantity}</small></h2>
                   <h3 class="article-name">${info.name}</h3>
                   <button class="product-button" data-id="${info.id}">+
                   <!-- <i class="bx bx-plus" data-id="${info.id}"></i> -->
                   </button>
               </div>
           </div>`
       /* console.log(info)
       console.log(info.id) */
   }); 
   /* Mostaramos Productos */
   contentProduct.innerHTML = listItems
 } 
  /**********  FILTRO  ********* 
   * 3- FN FILTRO Productos    *
   * **************************/
  function productFilter(){
    /* Retorna array objetos con propiedades , atributo*/
    let liu = document.querySelectorAll("li[data-filter]")

    /*  console.log(liu[0].attributes["data-filter"].value) 
    console.log(liu) */
    /* Recorremos los objetos */
    liu.forEach(infoLi =>{
      /* console.log(infoLi)
      console.log(infoLi.attributes["data-filter"]) */
      infoLi.addEventListener("click", (data) => {
          //console.log(infoLi.getAttribute("data-filter"))
          let filtro = infoLi.getAttribute("data-filter")
          /* Retorna array objetos con propiedades */
          let article = document.querySelectorAll("div.article")
          article.forEach( infoArticle => {
             // if( )
              if( ( infoArticle.getAttribute("filter") === filtro ) || ( "All"=== filtro ) ){
                infoArticle.classList.remove("filter-off")
              }else{
                infoArticle.classList.add("filter-off")
              }  

          })
       });
    })

  } 
  
 /**********  FILTRO  ********* 
   * 4 - FN Imformacion Producto
   * Click sobre imagne     *
   * **************************/
  function productInfo(){
    /* Retorna array objetos con propiedades , img.clase*/
    let imgItems = document.querySelectorAll("img.article-img")
    console.log(imgItems)
    /*  console.log(liu[0].attributes["data-filter"].value) 
    console.log(liu) */
    /* Recorremos los objetos */
    imgItems.forEach(infoImg =>{
        console.log(infoImg.getAttribute('data-id'))
        /* console.log(infoLi.attributes["data-filter"]) */
        infoImg.addEventListener("click", (data) => {
          //console.log(infoLi.getAttribute("data-filter"))
          let idItem = infoImg.getAttribute("data-id")
          /* Cargar Informacion a HOme */

          homeProduct(idItem)


       });/* */
    })

  } 

  function homeProduct(idItem){
    
    let objItem={}
    for (const  key of arrItems) {
       //console.log(key.id)
       /* Buscamos el id */
       if( key.id == idItem){
          console.log(key)
          objItem = key;
          break
       }
    }

    /* Load innerHTML */
    let idHome = document.querySelector("section.home")
    console.log(idHome)
    let loadHTML = `
          <div class="home-content">
              <div class="home-img">
                <img src="./${objItem.image}" alt="" class="home-photo">
              </div>
      
              <div class="home-info">
                <h1 class="home-title">${objItem.name}</h1>
                <p class="home-description">
                ${objItem.description}
                </p>
                <p class="home-price">$${objItem.price}</p>
      
                <div class="home-btn">
                  <a href="#" class="home-btn-discover">
                    Discover
                  </a>
                  <button class="home-btn-sale">COMPRAR</button>
                </div>
              </div>
            </div>
    `
    /* Cargar imagen */
    idHome.innerHTML = loadHTML 
  }


  /* LLAMADAS A FUNCIONES  */
  
  /* 1- FN Carga menu productos */
  loadMenuItems(arrItems)
  /* let liu = document.querySelectorAll("li[data-filter]")
     console.log(liu[0].attributes["data-filter"].value) */

  /* 2- Carga de productos */
  loadItems (arrItems)

  /* Filtro de productos  - addEventListener */
  productFilter()

  productInfo()


/**** MOSTRAR OCULTAR CARRITO **** 
 * FN eventos Listener - Carrito   
 * Mostrar carrito - i.bx.bxs-shopping-bag
 * Ocultar carrito - i.bx.bx-x
 * ********************************/

/* click sobre bolso mostrar carrito  */
let btnViewCart = document.querySelector("i.bx.bxs-shopping-bag")

/* click sobre X de carrito se coulta  */
let btnCloseCart = document.querySelector("i.bx.bx-x")

/* Referencia div de carrito  */
let floatCart = document.getElementById("cart-float")

btnViewCart.addEventListener( "click", (eventoData) =>{
    /* Mostrar carrito add clase=cart-show */
    floatCart.classList.add("cart-show")
});
btnCloseCart.addEventListener( "click", (eventoData) =>{
   /* Ocultar carrito add clase=cart-show */
    floatCart.classList.remove("cart-show")
});



/**** LISTENER DOCUMENT - CLICK  *** 
 * FN eventos Listener -  click    *
 * Funcion espera evento sobre el  *
 *  documento completo             *
 * ********************************/
 /* Agregar el boton de product-button" */
// let btnGetProduct = document.getElementsByClassName("product-button")
/* Nos usado solo modo de uso  */
/* let btnGetProduct = document.querySelectorAll("button.product-button")
   console.log(btnGetProduct+"<=================================")
   console.log(btnGetProduct[0].attributes)
   console.log(btnGetProduct[0].getAttribute("data-id")) */

/********************************************
 *  Add Evento click sobre el documento     *
 *********************************************/
document.addEventListener( "click", (eventoData) =>{
  
  console.log(eventoData.target.className)
  console.log(eventoData.target.attributes['data-id'])
 

  /*==== 1 Guardamos Id del producto ====*/
  /* Solo si el click fue sobre un atributo 'data-id' - Boton de un Producto  */
  if (eventoData.target.className === "product-button" && eventoData.target.attributes['data-id'] !== undefined ) {

      /* Obtenemos id  */
     
      let numId = eventoData.target.attributes['data-id'].value 

      /* Creamos el carrito o actualizamos con ID del producto */
      let infoArtDB = loadCarrito(numId)
      console.log(infoArtDB)

      /* infoArtDB JSON to String */
      let contJson = JSON.stringify(infoArtDB)

     /*  Guardamos localStorage */
      window.localStorage.setItem( "ID_Product_"+numId , contJson) 
  }
  
 /*==== 2 Resta Carrito (-) cantidad (+) Id del producto ====*/
  /* Solo si el click fue sobre un atributo 'data-id' - Boton de un Producto  */
  if (eventoData.target.className === "btn-cant minus" && eventoData.target.attributes['data-id'] !== undefined ) {

    /* Obtenemos id  */
   
    let numId = eventoData.target.attributes['data-id'].value 
     console.log(numId +"-------RESTA CANTIDAD -----------")

    /* Restamos Item carrito con ID del producto - si canttidad 0 se elimina  */
    let infoArtDB = minusProduc(numId)
    console.log(infoArtDB)
    console.log(infoArtDB.id)
    /* infoArtDB JSON to String */
    /* Controla que no se a objeto vacio */
    if(infoArtDB.id !== undefined){
        let contJson = JSON.stringify(infoArtDB)
      
        /*  Guardamos localStorage */
        window.localStorage.setItem( "ID_Product_"+numId , contJson)
    }
  }
 /*==== 3 Suma Carrito (-) cantidad (+) Id del producto ====*/
  /* Solo si el click fue sobre un atributo 'data-id' - Boton de un Producto  */
  if (eventoData.target.className === "btn-cant plus" && eventoData.target.attributes['data-id'] !== undefined ) {
 
    /* Obtenemos id  */
   
    let numId = eventoData.target.attributes['data-id'].value 
     console.log(numId +"-------SUMA CANTIDAD -----------")

    /* Restamos Item carrito con ID del producto - si canttidad 0 se elimina  */
    let infoArtDB = addProduc(numId)

    /* infoArtDB JSON to String */
    let contJson = JSON.stringify(infoArtDB)

    /*  Guardamos localStorage */
    window.localStorage.setItem( "ID_Product_"+numId , contJson) 
  }

  /* 4 -Eliminar producto  */
  if (eventoData.target.className === "bx bx-trash-alt bx-sm btn-del" && eventoData.target.attributes['data-id'] !== undefined ) {
 
    /* Obtenemos id  */
   
    let numId = eventoData.target.attributes['data-id'].value 
    console.log(numId +"-------DELET CANTIDAD -----------")

    /* Delete producto de carrito   */
    delProduct(numId)

  }
  /* 4 -Checkout - paga producto - borra local Storage  */
  if (eventoData.target.className === "btn-checkout" ) {
     /* Vaciar carrito */
     checkoutCart()
         
    /* Html Total Cart ponemos a cero  */
    cartUpdateTotal(0 , 0)
  }
 
 
  /*========  Actualizacion de carrito  ======== */
  /* Si tenemos informacion en local Storage actualiza carrito */
  if ( localStorage.length >0 ){

    /***************************
     *  Actualiza carrito
     * *************************/
    cartUpdate(localStorage.length)


  }else{
    
    /* Sin datos mostrar vacio */
    /* Refereencia id = id-products */
    let contentCart = document.getElementById("cart-product-id")
    /* Grafico si carrito esta vacio */
    contentCart.innerHTML = `<div><img src="./assets/images/empty-cart.png" alt=""></div>`
  }

});

/****************************************
 * FN Creamos el carrito o actaulizamos *
 *  con ID del producto 
 * ***************************************/
function loadCarrito(numId){
  /* Buscamos Id del producto en base de datos */
  let objReturn = {}
  for (const keyLS of arrItems) {
    console.log(keyLS)
    console.log(keyLS.id +" <-> "+ numId)
    
    /* Buscando Id */
    if ( keyLS.id == numId) {

      /* busca si existe Dato guardado  OK */
      for (var i = 0; i < localStorage.length; i++) {
         console.log(" <- carrito  ")
         console.log (localStorage.key(i))
         if(localStorage.key(i) === ("ID_Product_"+numId) ){
           objReturn = JSON.parse(window.localStorage.getItem( "ID_Product_"+numId ) )
         }
      }

      if(objReturn.carrito === undefined){
        /* Carga un producto */
        objReturn = keyLS
        objReturn.carrito = 1
        
      }else{
        /* Recupera carrito guardado obtenesmos Objeto  */
        objReturn = JSON.parse(window.localStorage.getItem( "ID_Product_"+numId ) )

        /* Control Stock  */
        if(objReturn.carrito <  objReturn.quantity){
          /* Suma un producto al carrito */
          objReturn.carrito +=1
        }else{
          alert("El stock es de "+ objReturn.quantity)
        }
      }
      break 
    }
  }
  
  console.log(objReturn)
  return objReturn
}

/***************************
 *  Actualiza carrito
 * *************************/
function cartUpdate(){
  
  /* Para anlisis de nombre guardado */
  let itemCart=""
  let numId=0
  let infoHTML = ""
  let objRead = {}
  
  /* Totales */
  let subTotal = 0
  let TotalItem = 0
  let TotalPay = 0

  /* Busacamos informacion de productos */
  for (var i = 0; i < localStorage.length; i++) {
    console.log(localStorage.key(i));
    itemCart = localStorage.key(i)
    /* Nombre */
    let dataLocalCart = itemCart.substring(0,11)
    console.log(itemCart)
    if(dataLocalCart == "ID_Product_"){
        numId =itemCart.substring(11)
        numId = parseInt(numId)
        console.log(numId)
        /*Recuperamos objeto del carro desde LOcals */
        objRead = JSON.parse(window.localStorage.getItem( "ID_Product_"+numId ) )
        /* Calculo SubTotal  */
        subTotal = objRead.price * objRead.carrito

        /* Total Item cargados */
        TotalItem += objRead.carrito

        /* Recorremos Carrito guardado */
        infoHTML += `<article class="cart-art">
        <div class="cart-x">
          <img src="./${objRead.image}" alt="${objRead.category}" class="cart-img">
        </div>

        <div class="cart-info">
          <h3 class="cart__title">Shirts</h3>
          <span class="cart__stock">Stock:${objRead.quantity} | <span class="cart__price">$${objRead.price}</span></span>
          <span class="cart__subtotal">
            Subtotal: $${subTotal}
          </span>

          <div class="cart-unit">
            <div class="cartxx">
              <button type="button" class="btn-cant minus" data-id="${objRead.id}">-
              <!-- <i class="bx bx-minus"></i> -->
              </button>

              <span class="unidades">${objRead.carrito} units</span>

              <button type="button" class="btn-cant plus" data-id="${objRead.id}">+
              <!-- <i class="bx bx-plus"></i> -->
              </button>
            </div>

            <i class="bx bx-trash-alt bx-sm btn-del" data-id="${objRead.id}"></i>
          </div>
        </div>
      </article>`

      /* Suma Total Pagar */
      TotalPay +=subTotal
      
    }
  }
  /* Refereencia id = id-products */
  let contentCart = document.getElementById("cart-product-id")
  // console.log(contentCart+ "***********************************")
  
  /* Load Total Cart innerHTML */
  cartUpdateTotal(TotalPay ,TotalItem)

  /* Grafico si carrito esta vacio */
  if( infoHTML ==="" ){
    infoHTML = `<div><img src="./assets/images/empty-cart.png" alt=""></div>`
  }

  contentCart.innerHTML = infoHTML 
}

/* Html Total Cart  */
function cartUpdateTotal(total ,items){
 
  /* Informacion Carrito */
  let contentTotal = document.getElementById("cart-pay-total")
  let cartTotalHtml= `
                    <span ><span id="items-count">${items}</span> items</span>
                    <span >$${total}</span>
                    ` 
  contentTotal.innerHTML = cartTotalHtml
  
  /* Numero Total Items */
  let numItem = document.getElementById("num-item") 
  numItem.innerHTML =   `${items}`
}



/***************************
 *  Descontar producto     *
 * *************************/

function minusProduc(numId){
 
  let objRead = {}
  let resultado = 0

  /*Recuperamos objeto del carro desde LOcals */
  objRead = JSON.parse(window.localStorage.getItem( "ID_Product_"+numId ))
  
  /* Restamos la cantodad de carrito  producto */
  resultado = objRead.carrito - 1

  if(resultado == 0){
    /* Eliminamos el item */
    
    window.localStorage.removeItem( "ID_Product_"+numId ) 
    /* Devolver objeto vacio */
    objRead = {}
  }else{
    /* Actualizamos carrito  */
    objRead.carrito = resultado   
  }
  return objRead
}

/***************************
 *  Aumentar producto     *
 * *************************/

 function addProduc(numId){
 
  let objRead = {}
  let resultado = 0

  /*Recuperamos objeto del carro desde LOcals */
  objRead = JSON.parse(window.localStorage.getItem( "ID_Product_"+numId ) )
  
  /* Restamos la cantodad de carrito  producto */
  resultado = objRead.carrito + 1

  if(objRead.quantity >= resultado  ){

    /* Actualizamos carrito  */
    objRead.carrito = resultado 

  }
  return objRead
}

/***************************
 *  Eliminar  Producto  Carrito    *
 * *************************/

function delProduct(numId){
    let objRead = JSON.parse(window.localStorage.getItem( "ID_Product_"+numId ))
    window.localStorage.removeItem(  `ID_Product_${numId}` ) 
} 
/***************************
 * checkout  Carrito      *
 * *************************/
function checkoutCart (){
    window.localStorage.clear()
}



/***************************
 *  Cambio Modo Claro oscuro
 * *************************/

let themeIcon = document.getElementById("theme-toggler")
let body = document.querySelector("body")

/* VERIFICA SI EXISTE EL VALOR THEME ALMACENADO  */
if ( window.localStorage.getItem("themeColor") ){
    let isDarkInfo = JSON.parse(window.localStorage.getItem("themeColor"))
    if(isDarkInfo){
        
        themeIcon.classList.replace("bx-moon", "bx-sun")
        body.classList.add("dark-theme")
    }else{
        themeIcon.classList.replace("bx-sun", "bx-moon")
    }
}

themeIcon.addEventListener( "click", (e) =>{
    body.classList.toggle("dark-theme")
    
    let isDark = body.classList.contains("dark-theme")

    if(isDark){
        themeIcon.classList.replace("bx-moon", "bx-sun")
        localStorage.setItem("themeColor" , JSON.stringify(true))
    }else{
        themeIcon.classList.replace("bx-sun", "bx-moon")
        localStorage.setItem("themeColor" , JSON.stringify(false))
    }
})