var idContacto = 0;
$(document).ready(function () {
  // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
});

	function saveContact(){
		var name = $('#name').val();
		var telefono = $('#telefono').val();

/*Agregar contacto*/
		$('#contactos').append('<div class="col s12 m12 l12 contact_' + idContacto +'">'+
			'<div class="container">'+
			'<div class="card horizontal margenAlto">'+
			'<div class="card-stacked">'+
			'<div class="card-content">'+
			'<h4>' + name + '</h4>' +
			'<p>' + telefono + '</p>' +
			'<button type="submit" class="waves-effect waves-light btn right btn-top"><i class="material-icons" id= "trash">delete</i></button>' +
			'</div>'+
			'</div>'+
			'</div>'+
			'</div>'+
			'</div>'
			);
		/*Limpiar formulario*/

		var name = $('#name').val(' ');
		var telefono = $('#telefono').val(' ');
		$('#modal1').modal('close');
		idContacto++;
	}

/*Borrar contacto*/
		$('#trash').click(function () {
			$('#contactos').remove();
		});


