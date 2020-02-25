package com.reactAndSpringBoot.ExpenseApp.Repository;

import com.reactAndSpringBoot.ExpenseApp.Model.Expense;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExpenseRepository extends JpaRepository<Expense,Long> {
}
