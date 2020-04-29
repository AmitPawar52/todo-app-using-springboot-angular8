package com.example.rest.todowebservice.controller;

import com.example.rest.todowebservice.entity.HelloWorldBean;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:4200")
public class HelloWorldController {

    @GetMapping("/hello-world/{username}")
    public HelloWorldBean getWelcomeMessage(@PathVariable String username) {
        return new HelloWorldBean(String.format("Hello world, %s", username));
    }
}