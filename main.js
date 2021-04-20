// Hola a todos. La tarea para el sábado es que diseñen e implementen una UI para nuestro Pokedex (diccionario de Pokemon).
// Debe de contar con:
// Un campo para buscar Pokemon por nombre o ID
// Mostrar el nombre del Pokemon
// Mostrar habilidades del Pokemon
// Mostrar una imagen/sprite del Pokemon
// Mostrar el tipo de pokemon que es (Ghost, Poison, Fire, etc)
// No se limiten a mostrar sólo eso. Muestren algo más de valor como la descripción o hacer búsquedas en otras partes de la documentación como descripción de habilidades, hacer paginación o mostrar a que habilidades es débil/fuerte un Pokemon!

const inputSearch = document.getElementById("inputSearch"),
	buttonSearch = document.getElementById("btnSearch"),
	app = document.getElementById("app"),
	pokemonDiv = document.getElementById("pokemon");
function searchPokemon() {
	console.log("You click me");

	const pokemon = inputSearch.value;
	let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			// GET Array of abilities
			const abilities = data.abilities.map(
				(el) => `<p>${el.ability.name}</p>`
			);
			// GET Array of Types

			const typeOfPokemon = data.types.map(
				(el) => `<p>${el.type.name}</p>`
			);

			let card = `
			<div class="card" >
					<img class="card-img-top" src=${
						data.sprites.front_default
					} alt="Card image cap">
					<div class="card-body">
						
						<h5 class="card-title"> ${data.name.toUpperCase()}</h5>
						<div class="container">
						<h5 class="d-flex"> Habilidades: </h5>
						${abilities.join("")}
						<h5>Tipo:</h5>
						${typeOfPokemon.join("")}
						</div>
					</div>
			</div>`;
			pokemonDiv.innerHTML = card;
		});
}

buttonSearch.addEventListener("click", () => {
	searchPokemon();
});

// const abilitesHTML = abilities.map(
// 	(el) => `<p>${el.ability.name}</p>`
// );
// let card = `
// <div class="card" style="width: 18rem;">
// 		<img class="card-img-top" src=${sprites.front_default} alt="Card image cap">
// 		<div class="card-body">
// 		<h5 class="card-title">Name: ${species.name.toUpperCase()}</h5>
// 		<h5 class="d-flex">Especie:  ${abilitesHTML.join(",")}</h5>
// 		</div>
// </div>`;

// pokemonDiv.innerHTML = card;
