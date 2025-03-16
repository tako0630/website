package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
    public String create(Products products){
        return productsDao.create(products);
    }
    public String delete(Integer id){
        return productsDao.delete(id);
    }
    public String update(Products products){
        return productsDao.update(products);
    }
}
