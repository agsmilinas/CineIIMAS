package com.example.demo.interfaces;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.modelo.Registro;

public interface UserRepository extends JpaRepository<Registro, Long> {

}
