var idContacto = 0;
	$(document).ready(function () {
		// the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
		$('.modal').modal();
	});

		function saveContact(){
			var nombre = $('#name').val();
			var telefono = $('#telefono').val();

	/*Agregar contacto*/
			$('#contact').append('<div class="col s12 m12 l12 contact_' + idContacto +'">'+
				'<div class="container">'+
				'<div class="card horizontal">'+
				'<div class="card-stacked">'+
				'<div class="card-content">'+
				'<h4>' + nombre + '</h4>' +
				'<p>' + telefono + '</p>' +
				'<button type="submit" class="waves-effect waves-light btn-top btn right"><i class="material-icons" id= "trash">delete</i></button>' +
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
		function deleteContact(){
			$('trash').click(()=>{
				$(this).parent().parent().parent().remove();
			})
		}



