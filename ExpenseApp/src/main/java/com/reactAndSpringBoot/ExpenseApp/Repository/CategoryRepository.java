package com.reactAndSpringBoot.ExpenseApp.Repository;

import com.reactAndSpringBoot.ExpenseApp.Model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {

    // findBy + field (We have "name" in Person, so we capitalize the variable "name")
    Category findByName(String name);
}
