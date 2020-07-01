package com.example.demo.interfaces;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.modelo.Movies;

public interface MovieRepository extends JpaRepository<Movies, Long>{

}
