// Document
var d = document;
// Carrito del usuario
var carrito = [];
// Precio total de articulos carrito
var precio = 0;
// Cantidad total de articulos carrito
var cantidad = 0;
// Main donde seteo la view que se crea
var main  = d.querySelector('main');

// Link productos, seteo el event onClick para mostrar la view de productos
var linkProductos = d.getElementById('productos');
linkProductos.onclick = function(){
	agregarViewProductos('ropa');
}

// Link de contacto , seteo el event onClick para mostrar la view de contacto
var linkContacto = d.getElementById('contacto');
linkContacto.onclick = function(){
	eliminarView();
	setearLinkActivo(this);
	var viewContacto = generarView(crearFormContacto())
	main.appendChild(viewContacto);
}

// Link de inicio , seteo el event onClick para mostrar la view de inicio
var linkInicio = d.getElementById('inicio');
linkInicio.onclick = function(){
	eliminarView();
	setearLinkActivo(this);
	var view = d.createElement('div');
	view.id = 'view';
	view.appendChild(crearSectionBanner());
	view.appendChild(crearSectionBienvenida());
	main.appendChild(view);
}

// Link carrito, seteo el event onClick para mostrar la view de checkout
var aCarrito = d.querySelector('.carritoActive');
aCarrito.onclick = function (){
	var view = d.getElementById('view');
	view.parentNode.removeChild(view);
	setearLinkActivo(linkProductos);
	var nuevoview = d.createElement('div');
	nuevoview.id = 'view';
	nuevoview.appendChild(armarViewCheckout());
	d.querySelector('main').appendChild(nuevoview);
}

// Categorias productos , seteo el evento onClick para mostrar los productos
var linksCategoriaIndex = d.querySelectorAll('.boton a');
for(var i in linksCategoriaIndex){
	linksCategoriaIndex[i].onclick = function(){
		agregarViewProductos(this.innerHTML);
	}
}

// View por default Inicio
eliminarView();
setearLinkActivo(linkInicio);
var view = d.createElement('div');
view.id = 'view';
view.appendChild(crearSectionBanner());
view.appendChild(crearSectionBienvenida());
main.appendChild(view);

// Permite generar la section del banner del index
function crearSectionBanner(){
	var sectionBanner = d.createElement('section');
	sectionBanner.className = 'sectionBanner';
	var span = d.createElement('span');
	span.innerHTML = 'Tienda de productos curiosos';
	var picture = d.createElement('picture');
	var imgBanner = d.createElement('img');
	imgBanner.src = 'img/banner.png';
	imgBanner.alt = 'Dinogeek , tienda de productos curiosos';
	picture.appendChild(imgBanner);
	sectionBanner.appendChild(span);
	sectionBanner.appendChild(picture);
	return sectionBanner;
}

// Permite generar la section de bienvenida del index
function crearSectionBienvenida(){
	var sectionBienvenida = d.createElement('section');
	var h2 = d.createElement('h2');
	h2.id = 'bienvenido';
	h2.innerHTML = 'Bienvenido';
	var divContenedorConsultas = d.createElement('div');
	divContenedorConsultas.className = 'contenedorConsultas';
	var p = d.createElement('p');
	p.innerHTML = 'Aquí podras consultar todo nuestro catálogo de productos. Tenemos todo eso que llena de felicidad a geeks y nerds';
	divContenedorConsultas.appendChild(p);
	sectionBienvenida.appendChild(h2);
	sectionBienvenida.appendChild(divContenedorConsultas);
	return sectionBienvenida;
}

// Permite crear el form de contacto
function crearFormContacto(){
	var section = d.createElement('section');
	section.className = 'sectionContacto';
	var divForm = d.createElement('div');
	divForm.className = 'formDiv';
	var div = d.createElement('div');
	var form = d.createElement('form');
	form.className = 'formContacto';
	var labelNombre = d.createElement('label');
	labelNombre.innerHTML = 'Nombre';
	labelNombre.setAttribute('for','nombre');
	var inputNombre = d.createElement('input');
	inputNombre.id = 'nombre';
	inputNombre.type = 'text';
	var labelEmail = d.createElement('label');
	labelEmail.innerHTML = 'Email';
	labelEmail.setAttribute('for','email');
	var inputEmail = d.createElement('input');
	inputEmail.id = 'email';
	inputEmail.type = 'email';
	inputEmail.required = true;
	var labelMensaje = d.createElement('label');
	labelMensaje.innerHTML = 'Mensaje';
	labelMensaje.setAttribute('for','mensaje');
	var textarea = d.createElement('textarea');
	textarea.id = 'mensaje';
	textarea.required = true;
	var input = d.createElement('input');
	input.className = 'enviarButton';
	input.type = 'submit';
	input.value = 'Enviar';
	form.appendChild(labelNombre);
	form.appendChild(inputNombre);
	form.appendChild(labelEmail);
	form.appendChild(inputEmail);
	form.appendChild(labelMensaje);
	form.appendChild(textarea);
	form.appendChild(input);
	form.onsubmit = function(){
		alert('Gracias por contactarte con nosotros!');
		return false;
	}
	div.appendChild(form);
	divForm.appendChild(div);
	section.appendChild(divForm);
	return section;
}

// Permite agregar la view de productos con una categoria 
function agregarViewProductos(categoria){
	eliminarView();
	setearLinkActivo(linkProductos);
	var viewProductos = generarView(armarViewProductos(categoria));
	main.appendChild(viewProductos);
}

// Permite borrar la view de id view
function eliminarView(){
	var view = d.getElementById('view');
	view.parentNode.removeChild(view);
}

// Permite setear el link de la pagina activa
function setearLinkActivo(link){
	d.querySelector('.colorActiveMenu').classList.remove('colorActiveMenu');
	link.classList.add('colorActiveMenu');
}

// Permite generar la view
function generarView(view){
	var divView = d.createElement('div');
	divView.id = 'view';
	divView.appendChild(view);
	return divView;
}

// Permite armar la view de productos de la categoria elegida
function armarViewProductos(categoria){
	var productosCategoria = productos[categoria];
	var divContenedor = d.createElement('div');
	divContenedor.className = 'contenedorDivFlex';
	var divContenedorProductos = d.createElement('div');
	divContenedorProductos.className = 'contenedorProductosArticle';
	var h2 = d.createElement('h2');
	h2.innerHTML = 'Productos > ' + categoria;
	h2.className = 'tituloUbicacion';
	divContenedorProductos.appendChild(crearBannerFlotante(productosCategoria.descuento));
	divContenedorProductos.appendChild(h2);
	divContenedorProductos.appendChild(armarListProductos(productosCategoria.articulos));
	divContenedor.appendChild(armarMenuLateral(categoria));
	divContenedor.appendChild(divContenedorProductos);
	return divContenedor;
}

// Permite crear el banner flotante de la categoria con el dto que viene
function crearBannerFlotante(descuento){
	var div = d.createElement('div');
	div.className = 'banner';
	var divContenedor = d.createElement('div');
	var h1 = d.createElement('h1');
	h1.innerHTML = descuento;
	divContenedor.appendChild(h1);
	div.appendChild(divContenedor);
	var interval = setInterval(function(){
		var divBanner = d.querySelector('.banner');
		if(divBanner){
			divBanner.parentNode.removeChild(divBanner);
		}
	},10000);
	setTimeout(function(){
		clearInterval(interval);
	},10000);
	return div;
}

// Permite armar los articulos la estructura..
function armarListProductos(articulos){
	var divProds = d.createElement('div');
	divProds.id = 'listProductos';
	for(var i in articulos){
		divProds.appendChild(armarArticle(articulos[i]));
	}
	return divProds;
}

// Permite armar el menu lateral de las categorias , productos
function armarMenuLateral(categoria){
	var divMenuLateral = d.createElement('div');
	divMenuLateral.id = 'divMenuLateral';
	var h2 = d.createElement('h2');
	h2.innerHTML = 'Categorías';
	divMenuLateral.appendChild(h2);
	var ul = d.createElement('ul');
	ul.className = 'categoriasList';
	for(var i in categorias){
		var li = d.createElement('li');
		var a = d.createElement('a');
		a.innerHTML = categorias[i];
		a.onclick = obtenerProductosList;
		if(categorias[i]==categoria){
			a.className = 'categoriaActiva';
		}
		li.appendChild(a);
		ul.appendChild(li);
	}
	divMenuLateral.appendChild(ul);
	return divMenuLateral;
}

// Permite limpiar el carrito del usuario
function limpiarCarrito(){
	if(carrito.length > 0){
		carrito = [];
		precio = 0;
		cantidad = 0;
		var divCarrito = this.parentNode.parentNode;
		var cantidadHTML  = d.getElementById('cantidad');
		var totalPrecioHTML = d.getElementById('totalPrecio');
		cantidadHTML.innerHTML = '';
		totalPrecioHTML.innerHTML = '';
		divCarrito.parentNode.replaceChild(armarDetalleMiCarritoVacio(),divCarrito);
	}else{
		alert('Su carrito ya se encuentra vacío');
	}
}

// Permite armar el detalle del carrito vacio, la parte derecha de la view checkout
function armarDetalleMiCarritoVacio(){
	var divCarritoVacio = d.createElement('div');
	divCarritoVacio.className = 'divCarrito';
	var titleMiCarrito = d.createElement('h2');
	titleMiCarrito.innerHTML = 'Mi carrito';
	titleMiCarrito.className = 'titleMiCarrito';
	var divVaciar = d.createElement('div');
	divVaciar.className = 'divVaciar';
	var aVaciar = d.createElement('a');
	aVaciar.innerHTML = 'Vaciar';
	aVaciar.href = '#';
	aVaciar.id = 'eliminarTodos';
	aVaciar.onclick = limpiarCarrito;
	divVaciar.appendChild(aVaciar);
	divCarritoVacio.appendChild(titleMiCarrito);
	divCarritoVacio.appendChild(divVaciar);
	return divCarritoVacio;
}

// Permite armar la view del checkout ,incluye el form y la lista de articulos que posee el usuario
function armarViewCheckout(){
	var section = d.createElement('div');
	section.className = 'detalleSection';
	var divFlex = d.createElement('div');
	divFlex.className = 'divFlex';
	var detalleSection = d.createElement('div');
	detalleSection.className = 'detalleSection';
	var h2 = d.createElement('h2');
	h2.className = 'tituloUbicacion';
	h2.innerHTML = 'Carrito > Checkout';
	var divContenedorCompra = d.createElement('div');
	divContenedorCompra.className = 'contenedorCompra';
	var tituloCheckoutSeccion = d.createElement('h3');
	tituloCheckoutSeccion.className = 'tituloCheckoutSeccion';
	tituloCheckoutSeccion.innerHTML = 'Completar';
	var divForm = d.createElement('div');
	var form = d.createElement('form');
	form.className = 'formCompra';
	var labelNombre = d.createElement('label');
	labelNombre.setAttribute('for','nombre');
	labelNombre.innerHTML = 'Nombre';
	var inputNombre = d.createElement('input');
	inputNombre.id = 'nombre';
	inputNombre.type = 'text';
	inputNombre.autocomplete = 'off';
	inputNombre.name = 'nombre';
	inputNombre.required = true;
	inputNombre.placeholder = 'Ingresar nombre';
	form.appendChild(labelNombre);
	form.appendChild(inputNombre);
	var labelTel = d.createElement('label');
	labelTel.setAttribute('for','telefono');
	labelTel.innerHTML = 'Télefono';
	var inputTel = d.createElement('input');
	inputTel.id = 'telefono';
	inputTel.type = 'text';
	inputTel.name = 'telefono';
	inputTel.autocomplete = 'off';
	inputTel.placeholder = '011-XXXX-XXXX';
	form.appendChild(labelTel);
	form.appendChild(inputTel);
	var labelEmail = d.createElement('label');
	labelEmail.setAttribute('for','email');
	labelEmail.innerHTML = 'Email';
	var inputEmail = d.createElement('input');
	inputEmail.id = 'email';
	inputEmail.type = 'email';
	inputEmail.name = 'email';
	inputEmail.autocomplete = 'off';
	inputEmail.required = true;
	inputEmail.placeholder = 'micorreo@gmail.com';
	form.appendChild(labelEmail);
	form.appendChild(inputEmail);
	var labelDireccion = d.createElement('label');
	labelDireccion.setAttribute('for','direccion');
	labelDireccion.innerHTML = 'Dirección';
	var inputDireccion = d.createElement('input');
	inputDireccion.id = 'direccion';
	inputDireccion.type = 'text';
	inputDireccion.name = 'direccion';
	inputDireccion.autocomplete = 'off';
	inputDireccion.placeholder = 'Ingrese su direccion y número';
	form.appendChild(labelDireccion);
	form.appendChild(inputDireccion);
	var labelTarjeta = d.createElement('label');
	labelTarjeta.setAttribute('for','numero_tarjeta');
	labelTarjeta.innerHTML = 'Número de tarjeta';
	var inputTarjeta = d.createElement('input');
	inputTarjeta.id = 'tarjeta';
	inputTarjeta.type = 'text';
	inputTarjeta.required = true;
	inputTarjeta.name = 'tarjeta';
	inputTarjeta.autocomplete = 'off';
	inputTarjeta.placeholder = 'XXXX-XXXX-XXXX';
	form.appendChild(labelTarjeta);
	form.appendChild(inputTarjeta);
	var buttonCheckout = d.createElement('input');
	buttonCheckout.type = 'submit';
	buttonCheckout.className = 'comprarSend';
	buttonCheckout.name = 'enviar';
	buttonCheckout.value = 'Confirmar Compra';
	form.onsubmit = enviar;
	form.appendChild(buttonCheckout);
	divForm.appendChild(form);
	divContenedorCompra.appendChild(tituloCheckoutSeccion);
	divContenedorCompra.appendChild(divForm);
	detalleSection.appendChild(h2);
	detalleSection.appendChild(divContenedorCompra);
	var divCarrito = d.createElement('div');
	divCarrito.className = 'divCarrito';
	var titleMiCarrito = d.createElement('h2');
	titleMiCarrito.innerHTML = 'Mi carrito';
	titleMiCarrito.className = 'titleMiCarrito';
	var divVaciar = d.createElement('div');
	divVaciar.className = 'divVaciar';
	var aVaciar = d.createElement('a');
	aVaciar.innerHTML = 'Vaciar';
	aVaciar.href = '#';
	aVaciar.id = 'eliminarTodos';
	aVaciar.onclick = limpiarCarrito;
	divVaciar.appendChild(aVaciar);
	divCarrito.appendChild(titleMiCarrito);
	divCarrito.appendChild(divVaciar);
	for(var i in carrito){
		divCarrito.appendChild(crearArticuloAgregado(carrito[i]));
	}
	if(precio > 0){
		var precioFinal = d.createElement('p');
		precioFinal.className = 'precioFinal';
		precioFinal.innerHTML = 'Total: $' + precio;
		divCarrito.appendChild(precioFinal);
	}
	divFlex.appendChild(detalleSection);
	divFlex.appendChild(divCarrito);
	section.appendChild(divFlex);
	return section;
}

// Permite borrar un item de la lista del carrito del usuario
function borrarItemElegido(){
	var articuloSeleccionado = this.parentNode.parentNode;
	var precioFinal = d.querySelector('.precioFinal');
	articuloSeleccionado.parentNode.removeChild(articuloSeleccionado);
	var titulo = this.parentNode.querySelector('h1').innerHTML;
	carrito = actualizarArrayCarrito(titulo);
	var precioArticulo = this.parentNode.parentNode.querySelectorAll('span')[1].innerHTML;
	var numero = precioArticulo.split('$')[1];
	var totalPrecioHTML = d.getElementById('totalPrecio');
	var total = totalPrecioHTML.innerHTML.split('$')[1];
	var cantidadHTML  = d.getElementById('cantidad');
	cantidad = cantidad - 1;
	precio = parseInt(total) - parseInt(numero);
	if(cantidad == 0){
		cantidadHTML.innerHTML = '';
	}else{
		cantidadHTML.innerHTML = cantidad;
	}
	if(precio == 0){
		totalPrecioHTML.innerHTML = '';
		precioFinal.innerHTML = '';
	}else{
		totalPrecioHTML.innerHTML = '$ ' + precio;
		precioFinal.innerHTML = 'Total $' + precio;
	}
}

// Permite actualizar el carrito , cuando se elimina un articulo de la lista del carrito
function actualizarArrayCarrito(titulo){
	var array = [];
	for(var i in carrito){
		if(carrito[i].titulo != titulo){
			array.push(carrito[i]);
		}
	}
	return array;
}

// Permite generar el article que se va a agregar en la lista del carrito
function crearArticuloAgregado(articulo){
	var article = d.createElement('article');
	var h1 = d.createElement('h1');
	h1.innerHTML = articulo.titulo;
	var aBorrarItem = d.createElement('a');
	aBorrarItem.className = 'borrarItem';
	aBorrarItem.href = '#';
	aBorrarItem.innerHTML = 'X';
	aBorrarItem.onclick = borrarItemElegido;
	var divContenedorBorrar = d.createElement('div');
	divContenedorBorrar.className = 'divContenedor';
	divContenedorBorrar.appendChild(h1);
	divContenedorBorrar.appendChild(aBorrarItem);
	var divContenedor = d.createElement('div');
	divContenedor.className = 'divFlex divArticulosCargados';
	var picture = d.createElement('picture');
	var img = d.createElement('img');
	img.src = 'img/productos/' + articulo.img;
	img.alt = articulo.titulo;
	img.style.width = '150px';
	img.style.height = '150px';
	picture.appendChild(img);
	var div = d.createElement('div');
	var spanCant = d.createElement('span');
	spanCant.className = 'spanCarritoCant';
	spanCant.innerHTML = 1;
	var span = d.createElement('span');
	span.innerHTML = articulo.precio;
	div.appendChild(spanCant);
	div.appendChild(span);
	divContenedor.appendChild(picture);
	divContenedor.appendChild(div);
	article.appendChild(divContenedorBorrar);
	article.appendChild(divContenedor);
	return article;
}

// Permite validar los inputs contra ''
function validarVacio(input){
	if(input.value.trim()==''){
		input.className = 'err';
	}else{
		input.classList.remove('err');
	}
}

// Permite generar la compra del checkout
function enviar(){
	var nombre = d.getElementById('nombre');
	var tarjeta = d.getElementById('tarjeta');
	validarVacio(nombre);
	validarVacio(tarjeta);
	return false;
}

// Permite obtener los productos de esa categoria seleccionada
function obtenerProductosList(){
	var productosCategoria  = productos[this.innerHTML];
	var banner = d.querySelector('.banner');
	var divContenedorProductos = d.querySelector('.contenedorProductosArticle');
	if(banner){
		banner.parentNode.removeChild(banner);
	}
	divContenedorProductos.insertBefore(crearBannerFlotante(productosCategoria.descuento),divContenedorProductos.firstChild);
	var tituloUbicacion = d.querySelector('.tituloUbicacion');
	tituloUbicacion.innerHTML = 'Productos > ' + this.innerHTML;
	d.querySelector('.categoriaActiva').classList.remove('categoriaActiva');
	this.className = 'categoriaActiva';
	var listProductos = d.getElementById('listProductos');
	var t = d.createElement('div');
	t.id = 'listProductos';
	for(var i in productosCategoria.articulos){
		t.appendChild(armarArticle(productosCategoria.articulos[i]));
	}
	listProductos.parentNode.replaceChild(t,listProductos);		
}

// Permite obtener el nombre de la img, sin el path global
function obtenerNombreImg(src){
	var paths = src.split('/');
	return paths[paths.length -1];
}

// Permite generar la estructura del article del producto
function armarArticle(producto){
	var article = d.createElement('article');
	var h1 = d.createElement('h1');
	h1.innerHTML = producto.nombre;
	var a = d.createElement('a');
	a.href = '#';
	a.onclick = mostrarDetalle;
	var img = d.createElement('img');
	img.src = producto.img.src;
	img.alt = producto.img.alt;
	a.appendChild(img);
	var div = d.createElement('div');
	var precio = d.createElement('p');
	precio.innerHTML = '$' + producto.precio;
	precio.className = 'precioArticulo';
	var descripcionArticulo  = d.createElement('p');
	descripcionArticulo.innerHTML = producto.descripcion;
	descripcionArticulo.className = 'descripcionArticulo';
	div.appendChild(precio);
	div.appendChild(descripcionArticulo);
	article.appendChild(h1);
	article.appendChild(a);
	article.appendChild(div);
	return article;
}

// Permite ver el detalle del articulo
function mostrarDetalle(){
	var article = this.parentNode;
	var imgPath = article.querySelector('img').src;
	var nombre = article.querySelector('h1').innerHTML;
	var precio = article.querySelector('.precioArticulo').innerHTML;
	var descripcion =  article.querySelector('.descripcionArticulo').innerHTML; 
	var img = obtenerNombreImg(imgPath);
	d.body.appendChild(crearModalDetalle(new Informacion(nombre,precio,descripcion,img)));
}

// Permite crear la ventana modal del detalle del articulo con la info del mismo
function crearModalDetalle(info){
	var myModal = d.createElement('div');
	myModal.className = 'modal';
	myModal.id = 'myModal';
	var modalContent = d.createElement('div');
	modalContent.className = 'modal-content';
	var divModalContent = d.createElement('div');
	var cerrar = d.createElement('a');
	cerrar.href = '#';
	cerrar.innerHTML = 'Cerrar';
	cerrar.className = 'cerrar';
	cerrar.onclick = function(){
		d.body.removeChild(d.getElementById('myModal'));
	}
	var titulo = d.createElement('h3');
	titulo.className = 'tituloDetalleArt';
	titulo.innerHTML = info.nombre;
	var divFlex = d.createElement('div');
	divFlex.className = 'divFlex';
	var divImg = d.createElement('div');
	var img = d.createElement('img');
	img.src = 'img/productos/' + info.img;
	img.alt = info.nombre;
	divImg.appendChild(img);
	divFlex.appendChild(divImg);
	var divDetalleProducto = d.createElement('div');
	divDetalleProducto.className = 'divDetalleProducto';
	var descripcionP  = d.createElement('p');
	descripcionP.innerHTML = info.descripcion;
	var precio = d.createElement('p');
	precio.className = 'precio';
	precio.innerHTML = info.precio;
	var divAcciones = d.createElement('div');
	divAcciones.className = 'divAccionesBotonesDetalleProd';
	var divContenedorAcc = d.createElement('div');
	var divAgregar = d.createElement('div');
	divAgregar.className = 'buttonComprarProducto';
	var aAgregar = d.createElement('a');
	aAgregar.innerHTML = 'Agregar';
	aAgregar.href = '#';
	aAgregar.onclick = agregarCarrito;
	divAgregar.appendChild(aAgregar);
	divContenedorAcc.appendChild(divAgregar);
	divAcciones.appendChild(divContenedorAcc);
	divFlex.appendChild(divDetalleProducto);
	divDetalleProducto.appendChild(descripcionP);
	divDetalleProducto.appendChild(precio);
	divDetalleProducto.appendChild(divAcciones);
	divModalContent.appendChild(cerrar)
	divModalContent.appendChild(titulo)
	modalContent.appendChild(divModalContent);
	modalContent.appendChild(divFlex);
	myModal.appendChild(modalContent);
	return myModal;
}

// Permite agregar al carrito del usuario el articulo que selecciono
function agregarCarrito(){
	var divDetalleProducto = this.parentNode.parentNode.parentNode.parentNode;
	var divContenedor = divDetalleProducto.parentNode.parentNode;
	var tituloProducto = divContenedor.getElementsByTagName('h3')[0].innerHTML;
	var precioProducto = divDetalleProducto.querySelector('.precio').innerHTML;
	var pathImg = obtenerNombreImg(divDetalleProducto.previousSibling.firstChild.src);
	var articuloAgregar = new Articulo(tituloProducto,precioProducto,pathImg);
	if(!esta(articuloAgregar)){
		carrito.push(articuloAgregar);
		cantidad = cantidad + 1;
		d.querySelector('#cantidad').innerHTML = cantidad;
		var precioArticulo = parseInt(articuloAgregar.precio.split('$')[1]);
		precio = precio + precioArticulo;
		d.querySelector('#totalPrecio').innerHTML = '$ ' + precio;
	}else{
		alert('El articulo ya fue agregado al carrito anteriormente');
	}
	d.body.removeChild(d.getElementById('myModal'));
}

// Permite saber si un articulo esta en el carrito del usuario
function esta(articulo){
	for(var i in carrito){
		if(carrito[i].titulo == articulo.titulo){
			return true;
		}
	}
	return false;
}

// Permite cerrar con la tecla de ESC el modal, si este esta abierto
document.onkeyup = function(evt) {
    evt = evt || window.event;
    if(evt.keyCode == 27){
    	var modal = d.getElementById('myModal');
    	if(modal){
    		d.body.removeChild(modal);
    	}
    }
};

// Object Articulo
function Articulo(titulo,precio,img){
	this.titulo = titulo;
	this.precio = precio;
	this.img = img;
}

// Object Informacion
function Informacion(nombre,precio,descripcion,img){
	this.nombre = nombre;
	this.precio = precio;
	this.descripcion = descripcion;
	this.img = img;
}
