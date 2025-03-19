package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public class ProductsService {
    @Autowired
    private ProductsDao productsDao;

    public Products getById(Integer id){
        return productsDao.getById(id);
    }
    public List<Products> getRandom(){
        return productsDao.getRandom();
    }
    public List<Products> getAll(){
        return productsDao.getALL();
    }
    public Products create(Products products,MultipartFile file){
        return productsDao.create(products,file);
    }
    public String delete(Integer id){
        return productsDao.delete(id);
    }
    public ResponseEntity<String> update(Products products){
        return productsDao.update(products);
    }
}
