package com.example.demo.Controlador;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.interfaces.AsientosRepository;
import com.example.demo.interfaces.MovieRepository;
import com.example.demo.interfaces.UserRepository;
import com.example.demo.modelo.Registro;
import com.example.demo.modelo.Asientos;
import com.example.demo.modelo.Movies;


@RestController
@RequestMapping("/api")
public class UserRestController {
	@Autowired
    UserRepository userRepository;
	@Autowired
	MovieRepository movieRepository;
	@Autowired
	AsientosRepository asientosRepository;
 
 
    // Get All Users
    // URL: http://localhost:8080/api/users/1
    @GetMapping("/users")
    public List<Registro> getAllRegisters() {
        return userRepository.findAll();
    }
    @GetMapping("/movies")
    public List<Movies> getAllMovies() {
        return movieRepository.findAll();
    }
    @GetMapping("/movies_seats")
    public List<Asientos> getAllMoviesSeats() {
        return asientosRepository.findAll();
    }
    @PutMapping("/movies_seats_update")
    public Asientos update(@RequestBody Asientos asientosObj) {
        return asientosRepository.save(asientosObj);
    }

}
