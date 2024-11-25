// Función para crear un solo producto
function createProduct(name, price, imageUrl) {
    const cartProducto = document.createElement('div');
    cartProducto.className = 'cart-producto';
  
    const productLink = document.createElement('a');
    productLink.href = '#';
  
    const bannerProductosDiv = document.createElement('div');
    bannerProductosDiv.className = 'baner-productos';
  
    const bannerImgDiv = document.createElement('div');
    bannerImgDiv.className = 'baner-img';
  
    const productImg = document.createElement('img');
    productImg.src = imageUrl;
    productImg.alt = 'producto';
  
    bannerImgDiv.appendChild(productImg);
    bannerProductosDiv.appendChild(bannerImgDiv);
  
    const infoProductoDiv = document.createElement('div');
    infoProductoDiv.className = 'info-producto';
  
    const productName = document.createElement('h3');
    productName.textContent = name;
  
    const productPrice = document.createElement('p');
    productPrice.textContent = price;
  
    infoProductoDiv.appendChild(productName);
    infoProductoDiv.appendChild(productPrice);
  
    productLink.appendChild(bannerProductosDiv);
    productLink.appendChild(infoProductoDiv);
  
    cartProducto.appendChild(productLink);
    return cartProducto;
  }
  
  // Función para crear múltiples productos dependiendo de la clase
  function createProductsFromClass() {
    // Seleccionar todos los contenedores con la clase 'carts'
    const cartsContainers = document.querySelectorAll('.carts');
  
    cartsContainers.forEach(container => {
      // Obtener la cantidad de productos desde la clase del contenedor
      const productCount = parseInt(container.classList[1]); // Asume que la clase es 'carts X', donde X es el número de productos
  
      // Limpiar el contenedor antes de agregar nuevos productos
      container.innerHTML = '';
  
      // Crear la cantidad de productos correspondiente
      for (let i = 0; i < productCount; i++) {
        const product = createProduct('Name producto ' + (i + 1), '$76000', '../../../../img/hgw/producto.png');
        container.appendChild(product);
      }
    });
  }
  
  // Llamar a la función para crear los productos cuando la página se cargue
  window.onload = createProductsFromClass;
  