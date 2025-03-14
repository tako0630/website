package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProductsController {
    @Autowired
    private ProductsService productsService;

    @GetMapping("/products/{id}")
    public Products read(@PathVariable Integer id){
        return productsService.getById(id);
    }
    @GetMapping("/home")
    public List<Products> readRandom(){
        return productsService.getRandom();
    }
    @GetMapping("/products")
    public List<Products> readAll(){
        return productsService.getAll();
    }

}
