package com.example.demo.modelo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;


@Entity
@Table(name = "usuarios")

public class Registro {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@NotEmpty(message="Campo Obligatorio")
	@Size(min=2, max=30,message="Minimo 2 caracteres")
	private String nombre;
	
	@NotEmpty(message="Campo Obligatorio")
	@Size(min=2, max=30,message="Minimo 2 caracteres")
	private String apellido;
	
	@NotEmpty(message="Campo Obligatorio")
	@Size(min=2, max=30,message="Minimo 2 caracteres")
	private String nombre_usuario;
	
	@NotEmpty(message="Campo Obligatorio")
	@Size(min=2, max=30,message="Minimo 2 caracteres")
	private String contraseña;
	
	@NotEmpty(message="Campo Obligatorio")
	@Size(min=2, max=30,message="Minimo 2 caracteres")
	private String ciudad;
	
	@NotEmpty(message="Campo Obligatorio")
	@Size(min=2, max=30,message="Minimo 2 caracteres")
	private String estado;
	
	@NotEmpty(message="Campo Obligatorio")
	private int cp;
	
	public Registro(){
		//crear constructor de clase
	}
	public Registro(int id,
			@NotEmpty(message = "Campo Obligatorio") @Size(min = 2, max = 30, message = "Minimo 2 caracteres") String nombre,
			@NotEmpty(message = "Campo Obligatorio") @Size(min = 2, max = 30, message = "Minimo 2 caracteres") String apellido,
			@NotEmpty(message = "Campo Obligatorio") @Size(min = 2, max = 30, message = "Minimo 2 caracteres") String nombre_usuario,
			@NotEmpty(message = "Campo Obligatorio") @Size(min = 2, max = 30, message = "Minimo 2 caracteres") String contraseña,
			@NotEmpty(message = "Campo Obligatorio") @Size(min = 2, max = 30, message = "Minimo 2 caracteres") String ciudad,
			@NotEmpty(message = "Campo Obligatorio") @Size(min = 2, max = 30, message = "Minimo 2 caracteres") String estado,
			@NotEmpty(message = "Campo Obligatorio") @Size(min = 2, max = 30, message = "Minimo 2 caracteres") int cp) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.apellido = apellido;
		this.nombre_usuario = nombre_usuario;
		this.contraseña = contraseña;
		this.ciudad = ciudad;
		this.estado = estado;
		this.cp = cp;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getApellido() {
		return apellido;
	}
	public void setApellido(String apellido) {
		this.apellido = apellido;
	}
	public String getnombre_usuario() {
		return nombre_usuario;
	}
	public void setnombre_usuario(String nombre_usuario) {
		this.nombre_usuario = nombre_usuario;
	}
	public String getCiudad() {
		return ciudad;
	}
	public void setCiudad(String ciudad) {
		this.ciudad = ciudad;
	}
	public String getEstado() {
		return estado;
	}
	public void setEstado(String estado) {
		this.estado = estado;
	}
	public int getCp() {
		return cp;
	}
	public void setCp(int cp) {
		this.cp = cp;
	}
	public String getContraseña() {
		return contraseña;
	}
	public void setContraseña(String contraseña) {
		this.contraseña = contraseña;
	}
	

}
