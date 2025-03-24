package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api")
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
    public Products create(@RequestParam("name") String name,
                         @RequestParam("price") double price,
                         @RequestParam("description") String description,
                         @RequestParam("stock_quantity") int stockQuantity,
                         @RequestParam("category_id") String categoryId,
                         @RequestParam("file") MultipartFile file){
        Products products = new Products();
        products.setName(name);
        products.setPrice(price);
        products.setDescription(description);
        products.setStock_quantity(stockQuantity);
        products.setCategory_id(categoryId);
        return productsService.create(products,file);
    }
    @DeleteMapping("/products/delete/{id}")
    public String delete(@PathVariable Integer id){
        return productsService.delete(id);
    }
    @PutMapping("/products/update")
    public ResponseEntity<String> update(@RequestBody Products products){
        return productsService.update(products);
    }

}
