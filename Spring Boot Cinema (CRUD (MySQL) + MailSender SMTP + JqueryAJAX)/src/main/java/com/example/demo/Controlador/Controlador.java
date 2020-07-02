package com.example.demo.Controlador;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.interfaces.IregistroService;
import com.example.demo.modelo.Registro;
import com.example.demo.servicios.MailService;



@Controller
@RequestMapping
public class Controlador {
	@Autowired
	private IregistroService service;
	@Autowired
    private MailService mailService;

	@GetMapping("/")
	public String crear() {
		return "index";
	}
	@GetMapping("/register")
	public String crearRegistro(Model model) {
		model.addAttribute("registro",new Registro());
		return "registro";
	}
	@GetMapping("/terms")
	public String crearTerms() {
		return "terminos";
	}
	@GetMapping("/login")
	public String login() {
		return "login";
	}
	@GetMapping("/cartelera")
	public String cartelera() {
		return "cartelera";
	}
	@GetMapping("/venta_boletos")
	public String venta_boletos() {
		return "venta";
	}
	@GetMapping("/confirmacion")
	public String confirmacion() {
		return "confirmacion";
	}	

    @PostMapping("/sendMail/{moviemail}")
    public String sendMail(@PathVariable String moviemail,@RequestParam("name") String name, @RequestParam("mail") String mail, @RequestParam("subject") String subject, @RequestParam("body") String body){

        String message = body +"\n\n Datos de contacto: " + "\nNombre: " + name + "\nE-mail: " + mail;
        mailService.sendMail("YOUR_MAIL_WITH_SMTP_SERVER_SERVICE",moviemail,subject,message);

        return "confirmacion2";
    }
		
	@PostMapping("/saveRegister")
	public String save(@Valid Registro r, BindingResult bindingResult, Model model) {
		if (bindingResult.hasErrors()) {
			return "registro";
		}
		service.save(r);
		return "redirect:/";	
	}
}
