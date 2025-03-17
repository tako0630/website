package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
    @PostMapping("/products/add")
    public String create(@RequestBody Products products){
        return productsService.create(products);
    }
    @DeleteMapping("/products/delete/{id}")
    public String delete(@PathVariable Integer id){
        return productsService.delete(id);
    }
    @PutMapping("/products/update")
    public String update(@RequestBody Products products){
        return productsService.update(products);
    }

}
