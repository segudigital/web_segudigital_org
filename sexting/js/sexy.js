$(document).ready(function() {

	function nextSlide() {
	    var container = $('.yourContainer'),
	    // Your current slide jQuery element
	        current_slide = container.children().first(),
	    // Next sibling (slide) of current slide
	        next_slide = current_slide.next();

	    current_slide.fadeOut(1000);
	    next_slide.fadeIn(1000, function () {
	        // Append current_slide to the end of container
	        // so it can move to the slide when interval has been fired again.
	        current_slide.appendTo(container);
	    });
	}
	$('.yourContainer').children().hide().first().show();
    // Intervally move to the next slide
    // setInterval(nextSlide, 3000);
	
	$('.slide h1').addClass('animated fadeInUp');
		setTimeout(function() {
			$('.subtext').show().addClass('animated fadeInUp');
		}, 500);
		setTimeout(function(){
			$('.in1').show().addClass('animated fadeInUp');
		setTimeout(function(){
			$('.in2').show().addClass('animated fadeInUp');
		}, 200);
		setTimeout(function(){
			$('.in3').show().addClass('animated fadeInUp');
		}, 400);
		setTimeout(function(){
			$('.in4').show().addClass('animated fadeInUp');
		}, 500);
		setTimeout(function(){ // fadeInDown
			$('.in5').show().addClass('animated fadeInDown');
		}, 600);
	}, 700);

	$(document).on('click', '#moveRight', function(){
	  nextSlide();
	});
	var respuesta = "";
	var conteo = 0;
	$(".opcion").change(function() {
	    if(this.checked) {
	        console.log("si");
	        console.log($(this).val());
	        if ($(this).val() != "") {
	        	respuesta += $(this).val();
	        	conteo ++;
	        }
	        nextSlide();
	    }
	});
	$(".opcionfin").change(function() {
	    if(this.checked) {
	        console.log("fin");
	        nextSlide();
	        resultado();
	    }
	});

	

	function resultado() {
		if (conteo == 0) {
			var respuesta_titulo = "<h1>Viva el sexteo seguro ;)</h1> <p>Ustedes son unxs masters del sexting seguro. ¡Sigan gozando! y compartan su sabiduría con más personas.</p>";
		} 
		else if (conteo <= 3) {
			var respuesta_titulo = "<h1>¡Pongan un alto a la fiesta!</h1> <p>Es necesario que revisen sus hábitos y tomen acciones res-pon-sa-bles para seguir disfrutando.</p>";
		}
		else {
			var respuesta_titulo = "<h1>Mucho camino por recorrer D: </h1> <p>Tienen mucho por hacer, nosotrxs les compartimos nuestras recomendaciones. Prueben y practiquen ya que tienen mucho por hacer antes de convertirse en cinta negra del sexting seguro.</p>";
		}
		respuesta += '<p>Recuerden que la clave de un rico sexting es el consentimiento. Que ambas partes estén de acuerdo con recibir esos contenidos, y que esté claro que una vez recibidos son para los ojos y disfrute de con quien se acordó solamente.</p> <p>¡Construye tus propios acuerdos! Piensa en ¿qué te hará sentir segurx sexteando? Y explora el anonimato, ¿cómo tomar fotos sexys donde quizás no salga tu cara o esa peca de la espalda que puede identificarte?</p> <p>Revisa la Guía de Safer Nudes de Coding Rights (<a href="https://www.codingrights.org/wp-content/uploads/2016/09/zine_AZUL_fuera_E.pdf" target="blank">1</a>) (<a href="https://www.codingrights.org/wp-content/uploads/2016/09/zine_Azul_interiro_E.pdf" target="_blank">2</a>) y sigue disfrutando 💝</p>';
		$(".resultado").html(respuesta_titulo + respuesta);
	}
});