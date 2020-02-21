package com.reactAndSpringBoot.ExpenseApp.Model;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "expense")
public class Expense {

    @Id // Primary Key
    @Column(name = "id", nullable = false)
    private Long id;
    @Column
    private String description;    // The description of the expense
    @Column
    private LocalDateTime expenseDate; // The date for the expense
    @Column
    private String location; // Location

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDateTime getExpenseDate() {
        return expenseDate;
    }

    public void setExpenseDate(LocalDateTime expenseDate) {
        this.expenseDate = expenseDate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    // Many Expense can go into one Category
    @ManyToOne
    private Category category;
    // Many Expense can go into one User
    @ManyToOne
    private Person person;
}
