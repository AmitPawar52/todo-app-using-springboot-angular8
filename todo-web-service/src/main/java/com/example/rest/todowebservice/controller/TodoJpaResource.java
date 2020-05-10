package com.example.rest.todowebservice.controller;

import java.net.URI;
import java.util.List;

import com.example.rest.todowebservice.entity.Todo;
import com.example.rest.todowebservice.repository.TodoJpaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/jpa")
public class TodoJpaResource {
    
    // @Autowired
    // private TodoHardCodedService todoService;

    @Autowired
    private TodoJpaRepository todoJpaRepository;
    
    @GetMapping("/users/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable String username) { 
        //return todoService.findAll();
        return todoJpaRepository.findByUsername(username);
    }

    @GetMapping("/users/{username}/todos/{id}")
    public Todo getTodo(@PathVariable String username, @PathVariable long id) { 
        return todoJpaRepository.findById(id).get();
    }

    @DeleteMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id) {
        todoJpaRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/users/{user}/todos/{id}")
    public ResponseEntity<Todo> updateTodo(
            @PathVariable String user, 
            @PathVariable long id, 
            @RequestBody Todo todo) {
        //Todo updatedTodo = todoService.save(todo);
        Todo updatedTodo = todoJpaRepository.save(todo);
        return new ResponseEntity<Todo>(updatedTodo, HttpStatus.OK);
    }

    @PostMapping("/users/{user}/todos")
    public ResponseEntity<Void> createTodo(@PathVariable String user, @RequestBody Todo todo) {
        
        todo.setUsername(user);
        Todo createdTodo = todoJpaRepository.save(todo);

        URI uri = ServletUriComponentsBuilder
                    .fromCurrentRequest().path("/{id}")
                    .buildAndExpand(createdTodo.getId()).toUri();

        return ResponseEntity.created(uri).build();
    }
}



