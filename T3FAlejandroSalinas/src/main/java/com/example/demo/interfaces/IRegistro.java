package com.example.demo.interfaces;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.modelo.Registro;

@Repository
public interface IRegistro extends CrudRepository<Registro,Integer> {
	

}
