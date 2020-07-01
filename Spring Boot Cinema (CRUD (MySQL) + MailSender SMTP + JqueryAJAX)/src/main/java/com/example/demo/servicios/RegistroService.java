package com.example.demo.servicios;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.interfaces.IRegistro;
import com.example.demo.interfaces.IregistroService;
import com.example.demo.modelo.Registro;

@Service
public class RegistroService implements IregistroService {
	@Autowired
	private IRegistro data;
	@Override
	public int save(Registro r) {
		int res = 0;
		Registro registro = data.save(r);
		if(!(registro.equals(null))) {
			res = 1;
		}
		return res;
	}
	
}
