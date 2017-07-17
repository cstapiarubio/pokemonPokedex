/*funcion ver los datos del pokemon buscado*/
$(document).ready(function(){
	$("#botonVerPoke").on("click", function(){
		var nombrePoke = $("#nombre").val();
		$.ajax({
			url: 'http://pokeapi.co/api/v1/pokemon/' + nombrePoke,
			type: 'GET',
			datatype: 'JSON',

		})

		.done(function(response){
             //div vacio//
             $("#contenedorPoke").append("<div id='pokemon'>"+'<h1>Pokemon</h1>'+ '<h3>'+ response.name +'</h3>' + '<p>Habilidades:'+ response.abilities[0].name + '</p>'+ '<p>Tipo:'+ response.types[0].name + '</p>'+  '<p>Altura:'+ response.height + '</p>' + '<p>Peso:'+ response.weight + '</p>' +"</div>")
             console.log(response.name);
         })

		.fail(function(error){
			console.log("error");
		})
	});
})