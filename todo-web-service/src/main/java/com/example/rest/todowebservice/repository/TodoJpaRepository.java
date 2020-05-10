package com.example.rest.todowebservice.repository;

import java.util.List;

import com.example.rest.todowebservice.entity.Todo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoJpaRepository extends JpaRepository<Todo, Long>{

    List<Todo> findByUsername(String username);
}