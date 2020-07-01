var flag = false;
$
		.get(
				'http://localhost:8080/api/users',
				function(data) {
					console.log(data);
					$(".result").html(data);
					$(".btn")
							.click(
									function() {
										for (let index = 0; index < data.length; index++) {
											console
													.log($(".username")[0].value);
											console
													.log(data[index]["nombre_usuario"])
											console
													.log($(".password")[0].value)
											console
													.log(data[index]["contraseña"])
											if (($(".username")[0].value == data[index]["nombre_usuario"])
													&& ($(".password")[0].value == data[index]["contraseña"])) {
												flag = true;
											}
										}
										if (flag) {
											Swal.fire('Credenciales validadas');
											sessionStorage.setItem("logged",
													true);
											setTimeout(function() {
												window.open("/", "_self");

											}, 2500)

										} else {
											Swal
													.fire('Credenciales Incorrectas')
										}
									})
				});