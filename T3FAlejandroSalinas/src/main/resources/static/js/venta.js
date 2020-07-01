	 
var asientos_reservardos= [];
var movie_2 = sessionStorage.getItem("movie_selected");

$.get( 'http://localhost:8080/api/movies_seats', function( data ) {
	  $( ".result" ).html( data );
	 for(let index = 0; index<=data.length;index++){
		 if(data[index]["name"] == movie_2){
			 asientos_reservardos = data[index]["asientos_reservados"];
			 break;
		 }
	 }
	 var result = asientos_reservardos.slice(1,-1);
	 var array = result.split(",");
	 if(array.length > 0){
	 for(let index = 0; index<=array.length;index++){
		 let seat = array[index];
		 $('#seatsBlock :input[value="'+seat+'"]').remove();
	 }
	}
	  });
flag = sessionStorage.getItem("logged");
	  if(flag){
			$(".img_cineiimas").css("padding-top", "2%");
		  $(".inv_esp").attr("hidden",false);
		  $(".promociones").attr("hidden",true);
	  }
	 let movie = sessionStorage.getItem("movie_selected");
	 let welcome = "Comprando boletos para función : "+ movie

	  $("h2")[0].innerText = welcome;



	 function onLoaderFunc()
	 {
	   $(".seatStructure *").prop("disabled", true);
	   $(".displayerBoxes *").prop("disabled", true);
	 }
	 function takeData()

	 {
	   if (( $("#Username").val().length == 0 ) || ( $("#Numseats").val().length == 0 ))
	   {
	   Swal.fire("Por favor, introduzca su nombre y número de asientos");
	   }
	   else
	   {
			 let precio = $("#Numseats").val() * 45;
			 $(".total")[0].innerText = "Total: $"+precio;
			 $(".total").attr("hidden",false);

	     $(".inputForm *").prop("disabled", true);
	     $(".seatStructure *").prop("disabled", false);
	     document.getElementById("notification").innerHTML = "<b style='margin-bottom:0px;background:yellow;'>Por favor seleccione sus asientos ahora</b>";
	   }
	 }


	 function updateTextArea() { 
	     
	   if ($("input:checked").length == ($("#Numseats").val()))
	     {
	       $(".seatStructure *").prop("disabled", true);
	       
	      var allNameVals = [];
	      var allNumberVals = [];
	      var allSeatsVals = [];
	   
	      //Storing in Array
	      allNameVals.push($("#Username").val());
	      allNumberVals.push($("#Numseats").val());
	      $('#seatsBlock :checked').each(function() {
	        allSeatsVals.push($(this).val());
	      });
	     
	      //Displaying 
	      $('#nameDisplay').val(allNameVals);
	      $('#NumberDisplay').val(allNumberVals);
	      $('#seatsDisplay').val(allSeatsVals);
		  $(".page").attr("hidden",false);

	     }
	   else
	     {
	       Swal.fire("Por favor seleccione:  " + ($("#Numseats").val()) + " asientos")
	     }
	   

	   }


	 function myFunction() {
	   alert($("input:checked").length);
	 }


	 $(":checkbox").click(function() {
	   if ($("input:checked").length == ($("#Numseats").val())) {
	     $(":checkbox").prop('disabled', true);
	     $(':checked').prop('disabled', false);
	   }
	   else
	     {
	       $(":checkbox").prop('disabled', false);
	     }
	 });

	 
	 const show_seats = () => {
		  $(".inputForm").attr("hidden",false);

		 
	 }
	$(".btn_start").click(function(){
		   if (( $("#Username").val().length == 0 ) || ( $("#Numseats").val().length == 0 ))
		   {
		   Swal.fire("Por favor, introduzca su nombre y número de asientos");
		   }
		   else{
		  $(".seatStructure").attr("hidden",false);
		  $(".displayerBoxes").attr("hidden",false);
		  
		   }
	})
	
	$(".payment-card__button").click(function(){
		
		$.get( 'http://localhost:8080/api/movies_seats', function( data ) {
			let selected_seats = $("#seatsDisplay").val()
			let val = {}
			  $( ".result" ).html( data );
				 for(let index = 0; index<=data.length;index++){
					 if(data[index]["name"] == movie_2){
						 a = data[index]["asientos_reservados"];
					     var b = a.replace(']', ",");
						 b+=selected_seats;
						 b = b + ']';
						 data[index]["asientos_reservados"] = b;
						 val =  data[index]
						 break;
					 }
				 }
				 console.log(val);
				 input = JSON.parse(JSON.stringify(val));
				 console.log(input)
				 $.postJSON = function(url, data, callback) {
					    return jQuery.ajax({
					    headers: { 
					        'Accept': 'application/json',
					        'Content-Type': 'application/json' 
					    },
					    'type': 'PUT',
					    'url': url,
					    'data': JSON.stringify(data),
					    'dataType': 'json',
					    'success': callback
					    });
					};
					$.postJSON("http://localhost:8080/api/movies_seats_update",input,alert("yeah"));

			  });

		sessionStorage.setItem("num_boletos",$("#Numseats")[0].value);
		sessionStorage.setItem("mail",$("#Username")[0].value);
		sessionStorage.setItem("hora",$("#format")[0].value);
		$("#load_screen").attr("hidden",false);
		setTimeout(function(){
			  window.location.href='/confirmacion'

		},5000)
		
	})
	 