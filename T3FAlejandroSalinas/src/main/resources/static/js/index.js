flag = sessionStorage.getItem("logged");
if (flag) {
	$(".img_cineiimas").css("padding-top", "2%");
	$(".inv_esp").attr("hidden", false);
	$(".promociones").attr("hidden", true);
}

$(".btn-register").click(function() {
	window.location.href = '/register'
});
$(".btn-login").click(function() {
	window.location.href = '/login'
});
$(".btn-cartelera").click(function() {
	window.location.href = '/cartelera'
});