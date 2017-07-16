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
        $("#contenedorPoke").append("<div id=''>"+'<p>Pokemon</p>'+ response.name  + response.abilities[0].name + response.abilities[1].name + response.types[0].name + response.types[1].name+  response.height + response.weight +"</div>")
            console.log(response.name);
        })

       .fail(function(error){
            console.log("error");
        })
    });
    })