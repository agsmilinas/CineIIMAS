  flag = sessionStorage.getItem("logged");
	  if(flag){
			$(".img_cineiimas").css("padding-top", "2%");
		  $(".inv_esp").attr("hidden",false);
		  $(".promociones").attr("hidden",true);
	  }
	$.get( 'http://localhost:8080/api/movies', function( data ) {
	  $( ".result" ).html( data );
	 for(let index = 0; index<=data.length;index++){
		  let first = document.createElement("div");
		  first.setAttribute("class", "card flex-row flex-wrap");
		  let second = document.createElement("div");
		  second.setAttribute("class", "card-header border-0");
		  let image = document.createElement("img");
		  image.setAttribute("src", data[index]["image"]);
		  image.setAttribute("class", "movie_img");
		  second.appendChild(image);
		  let third = document.createElement("div");
		  third.setAttribute("class", "card-block px-2");
		  let h = document.createElement("h4");
		  h.setAttribute("class", "card-title");
		  let h2_text = document.createTextNode(data[index]["name"]);
		  h.appendChild(h2_text);
		  third.appendChild(h);  
		  let p = document.createElement("p");
		  p.setAttribute("class", "card-text");
		  let p_text = document.createTextNode(data[index]["clasificacion"]);
		  p.appendChild(p_text);
		  third.appendChild(p);
		  
		  let p2 = document.createElement("p");
		  p2.setAttribute("class", "card-text");
		  let p_text2 = document.createTextNode(data[index]["precio"]);
		  p2.appendChild(p_text2);
		  third.appendChild(p2);
		  
		  
		  
		  
		  
		  
		  
		  let a = document.createElement("a");
		  a.setAttribute("class", "btn btn-primary btn_comprar");
		  let a_text = document.createTextNode("Comprar Boletos");
		  a.appendChild(a_text);
		  third.appendChild(a);
		  let fourth = document.createElement("div");
		  fourth.setAttribute("class", "card-footer w-100 text-muted");
		  let fourth_text = document.createTextNode(data[index]["descripcion"]);
		  fourth.appendChild(fourth_text);
		  let fifth = document.createElement("br");
		  first.appendChild(second);
		  first.appendChild(third);
		  first.appendChild(fourth);
		  $(".jumbotron")[0].appendChild(first);
		  $(".jumbotron")[0].appendChild(fifth);
		  $(".btn_comprar").css("background-color", "blue");
		  $(".btn_comprar").css("color", "white");
	 }
	  });
	
	setTimeout(function(){
		  $(".btn_comprar").click(function(){
			  let mov_title = $(this).parent().html();
			  var mySubString = mov_title.substring(
					  mov_title.lastIndexOf('e">') + 1, 
					  mov_title.lastIndexOf("</h")
					);
			  var mySubString2 = mySubString.substring(
					  mySubString.lastIndexOf('>') + 1
					  );
			 sessionStorage.setItem("movie_selected",mySubString2);
			  window.location.href='/venta_boletos'

		  });
	},1000)
	  