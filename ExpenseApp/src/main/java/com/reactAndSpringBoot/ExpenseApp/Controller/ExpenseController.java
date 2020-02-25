package com.reactAndSpringBoot.ExpenseApp.Controller;

import com.reactAndSpringBoot.ExpenseApp.Model.Expense;
import com.reactAndSpringBoot.ExpenseApp.Repository.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.xml.ws.Response;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping(path = "/api")
public class ExpenseController {

    @Autowired
    private ExpenseRepository expenseRepository;

    @GetMapping(path = "/expenses")
    List<Expense>getExpense(){
        return expenseRepository.findAll();
    }

    @DeleteMapping(path = "/expenses/{id}")
    ResponseEntity<?> deleteExpense(@PathVariable Long id){
        expenseRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

    @PostMapping(path = "expenses")
    ResponseEntity<Expense> createExpense(@Valid @RequestBody Expense expense) throws URISyntaxException {
        Expense result = expenseRepository.save(expense);
        return ResponseEntity.created(new URI("/api/expenses"+result.getId())).body(result);
    }

    @PutMapping(path = "expenses/{id}")
    ResponseEntity<Expense> updateExpense(@Valid @RequestBody Expense expense){
        Expense result = expenseRepository.save(expense);
        return ResponseEntity.ok().body(result);
    }

}
