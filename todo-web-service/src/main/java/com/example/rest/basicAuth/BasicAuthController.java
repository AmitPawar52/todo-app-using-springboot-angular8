package com.example.rest.basicAuth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class BasicAuthController {

    @GetMapping("/basicauth")
    public AuthenticationBean helloWorldPathVariable() {
        return new AuthenticationBean(String.format("You are authenticated"));
    }
}