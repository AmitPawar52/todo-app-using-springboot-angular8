package com.example.rest.todowebservice.controller;

import java.util.List;

import com.example.rest.todowebservice.entity.Todo;
import com.example.rest.todowebservice.service.TodoHardCodedService;

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
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TodoResource {
    
    @Autowired
    private TodoHardCodedService todoService;
    
    @GetMapping("/users/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable String username) { 
        return todoService.findAll();
    }

    @GetMapping("/users/{username}/todos/{id}")
    public Todo getTodo(@PathVariable String username, @PathVariable Long id) { 
        return todoService.findById(id);
    }

    @DeleteMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable Long id) {
        Todo todo = todoService.deleteById(id);
        if(todo != null) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    @PutMapping("/users/{user}/todos/{id}")
    public ResponseEntity<Todo> updateTodo(
            @PathVariable String user, 
            @PathVariable Long id, 
            @RequestBody Todo todo) {
        Todo updatedTodo = todoService.save(todo);
        return new ResponseEntity<Todo>(updatedTodo, HttpStatus.OK);
    }

    //@PostMapping("/users/{user}/todos/{id}")

}



