package com.reactAndSpringBoot.ExpenseApp.Model;

import org.springframework.lang.NonNull;

import javax.persistence.*;

@Entity
@Table(name = "category")
public class Category {

    @Id // Primary Key
    private Long id;
    // Travel, grocery, etc ...
    @NonNull
    private String name;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}
