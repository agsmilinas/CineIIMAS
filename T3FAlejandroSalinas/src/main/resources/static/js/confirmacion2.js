
flag = sessionStorage.getItem("logged");
if(flag){
		$(".img_cineiimas").css("padding-top", "2%");
	  $(".inv_esp").attr("hidden",false);
	  $(".promociones").attr("hidden",true);
}
let num = sessionStorage.getItem("num_boletos");
let mail = sessionStorage.getItem("mail");
let movie = sessionStorage.getItem("movie_selected");
let horario = sessionStorage.getItem("hora");
$(".conf")[0].innerText = "Confirmando "+num+ " boletos para "+ movie;
$(".mmconf")[0].innerText = "Se enviara un email de confirmación a: "+mail;
$(".hora")[0].innerText = "Horario : "+horario;




function makeid(length) {
	   var result           = '';
	   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	   var charactersLength = characters.length;
	   for ( var i = 0; i < length; i++ ) {
	      result += characters.charAt(Math.floor(Math.random() * charactersLength));
	   }
	   return result;
	}



