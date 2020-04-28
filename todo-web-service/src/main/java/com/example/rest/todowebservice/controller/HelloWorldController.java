package com.example.rest.todowebservice.controller;

import com.example.rest.todowebservice.entity.HelloWorldBean;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloWorldController {

    @GetMapping("/hello-world")
    public HelloWorldBean getHelloWorldMessage() {
        return new HelloWorldBean("hello angular folks!");
        //throw new RuntimeException("an error occured. contact support at ****-****");
    }
    @GetMapping("/hello-world/{name}")
    public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
        return new HelloWorldBean(String.format("Hello folk!, %s", name));
    }
}