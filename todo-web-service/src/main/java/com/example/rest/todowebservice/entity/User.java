package com.example.rest.todowebservice.entity;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonIgnore;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

@Entity
public class User implements UserDetails {

    private static final long serialVersionUID = 5155720064139820502L;

    @Id
    private String username;
    private String password;
    private final Collection<? extends GrantedAuthority> authorities;

    @Override
    public String getUsername() {
        return username;
    }

    @JsonIgnore
    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
      return authorities;
    }

    public User(String username, String password, String role) {
        this.username = username;
        this.password = password;
        List<SimpleGrantedAuthority> authorities = new ArrayList<SimpleGrantedAuthority>();
        authorities.add(new SimpleGrantedAuthority(role));
  
        this.authorities = authorities;
    }

    @Override
    public boolean isEnabled() {
      return true;
    }

    @JsonIgnore
    @Override
    public boolean isAccountNonExpired() {
      return true;
    }
  
    @JsonIgnore
    @Override
    public boolean isAccountNonLocked() {
      return true;
    }
  
    @JsonIgnore
    @Override
    public boolean isCredentialsNonExpired() {
      return true;
    }
    
}