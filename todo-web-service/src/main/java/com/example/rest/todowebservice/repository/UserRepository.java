package com.example.rest.todowebservice.repository;

import com.example.rest.todowebservice.entity.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> {
}