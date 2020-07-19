//Array de categorias de productos
var categorias = ['ropa','accesorios','hogar','juegos'];

// Array asociativo que contiene la info de cada categoria
var productos = {
	ropa: {
		articulos : [{
			nombre: 'Pikachu Holiday Sweater',
			precio: 750,
			descripcion: 'El diseño incluye Pikachu, Pokébolas y relámpagos',
			img:{
				src: 'img/productos/sweater_pikachu.jpg',
				alt: 'Swater de Pikachu'
			},
		},{
			nombre: 'Star Wars Force Buzo',
			precio: 800,
			descripcion: 'Sudadera con capucha de tela triblend súper suave',
			img:{
				src: 'img/productos/buzo_star_wars.jpg',
				alt: 'Buzo star wars'
			}
		},{
			nombre: 'World of Warcraft Túnica',
			precio: 1500,
			descripcion:'Completo con cuernos y cola',
			img:{
				src: 'img/productos/tunica_wow.jpg',
				alt: 'tunica world of warcraft'
			}
		},{
			nombre: 'Demogorgon Chaqueta',
			precio: 1200,
			descripcion: 'Chaqueta ifty muestra que eres parte de la tripulación del Demogorgon',
			img:{
				src: 'img/productos/chaqueta_strangers.jpg',
				alt: 'chaqueta strangers'
			}
		},{
			nombre: 'Star Trek Remera',
			precio: 600,
			descripcion: 'Un uniforme para jóvenes alféreces en la empresa',
			img:{
				src: 'img/productos/remera_star_trek.jpg',
				alt: 'remera star trek ñiña'
			}
		},{
			nombre: 'Rick and Morty',
			precio: 1000,
			descripcion: 'La parte superior de Cami presenta correas ajustables de espagueti',
			img:{
				src: 'img/productos/rick_morty_ropa.jpg',
				alt: 'ropa interior Rick and Morty'
			}
		}],
		descuento : '25% de descuento en ropa para chicos!'
	},
	accesorios:{
		articulos:[{
			nombre: 'Reloj Tesla',
			precio: 2000,
			descripcion: 'Aspecto de latón desgastado en los hallazgos de metal más correa de cuero',
			img:{
				src: 'img/productos/reloj_tesla.jpg',
				alt: 'reloj tesla'
			}
		},{
			nombre:'Collar Shadow',
			precio: 1500,
			descripcion: 'Réplica de la propiedad del anillo de poder',
			img:{
				src: 'img/productos/collar_shadow.jpg',
				alt: 'collar señor de los anillos'
			}
		},{
			nombre:'Billetera GOT',
			precio: 1500,
			descripcion: 'Lannister león en el frente. "A Lannister siempre paga sus deudas" en la parte posterior',
			img:{
				src: 'img/productos/billetera_got.jpg',
				alt: 'billetera game of throne'
			}
		}],
		descuento : 'Sólo por hoy, envío gratis!!!'
	},
	hogar:{
		articulos:[{
			nombre: 'Lámpara Mario Bross',
			precio: 2000,
			descripcion: 'La luz de la tarea se ve como un Chomp de cadena de Super Mario Bros.',
			img:{
				src: 'img/productos/lampara_mario.jpg',
				alt: 'lampara de mario bross,bicho'
			}

		},{
			nombre: 'Taza Nightmare',
			precio: 450,
			descripcion: 'Presenta los lovebirds del clásico multi vacaciones de Tim Burton',
			img:{
				src: 'img/productos/taza_nightmare.jpg',
				alt: 'taza nightmare cambia color'
			}
		},{
			nombre:'GameBoy Café',
			precio: 750,
			descripcion: 'Combina tus dos adicciones favoritas: cafeína y juegos',
			img:{
				src: 'img/productos/game_boy.jpg',
				alt: 'game boy para guardar cafe'
			}
		},{
			nombre:'Zombie Bowl',
			precio: 400,
			descripcion: 'Es un cuenco que parece (la mayoría de) una cabeza de zombie',
			img:{
				src: 'img/productos/zombie_bowl.jpg',
				alt: 'bowl de zombie'
			}
		}],
		descuento: 'Black friday !! , aprovecha 50% de descuento en hogar'
	},
	juegos:{
		articulos:[{
			nombre: 'Jumanji Tablero',
			precio: 200,
			descripcion: 'Juego de jumanji basado en la pelicula',
			img:{
				src: 'img/productos/jumanji.jpg',
				alt: 'juego de mesa jumanji'
			}
		},{
			nombre:'Pokémon TCG: XY',
			precio: 350,
			descripcion: '60 cartas pokemon',
			img:{
				src: 'img/productos/cartas_pokemon.jpg',
				alt: 'cartas de pokemon'
			}
		},{
			nombre: 'Harley Quinn',
			precio: 280,
			descripcion: 'El Joker te permite jugar con sus juguetes',
			img:{
				src: 'img/productos/harley.jpg',
				alt: 'juego harley'
			}
		},{
			nombre: 'Portal: The Uncooperative',
			precio: 1000,
			descripcion: 'Diseñado por el personal de Valve, creadores de los juegos originales de Portal',
			img:{
				src: 'img/productos/portal.jpg',
				alt: 'juego portal half life'
			}
		},{
			nombre: 'Pacific Rim',
			precio: 3500,
			descripcion: 'Parte de la línea de figuras de acción ultra deluxe Pacific Rim de 7 "de NECA',
			img:{
				src: 'img/productos/pacific.jpg',
				alt: 'figura pacific'
			}
		}],
		descuento: '10% de descuento comprando 2 artículos!'
	}
}
