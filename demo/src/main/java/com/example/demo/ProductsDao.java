package com.example.demo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
@Component
public class ProductsDao {
    @Autowired
    private NamedParameterJdbcTemplate jdbc;

    public Products getById(Integer id){
        String sql = "SELECT * From product WHERE id = :id";
        Map<String, Object> map = new HashMap<>();
        map.put("id", id);
        List<Products> list = jdbc.query(sql, map, new ProductsRowMapper());
        if(!list.isEmpty()){
            return list.getFirst();
        }else{
            return null;
        }
    }
    public List<Products> getRandom(){
        String sql = "SELECT * FROM product LIMIT 4";
        List<Products> list = jdbc.query(sql,new ProductsRowMapper());
        if(!list.isEmpty()){
            return list;
        }else{
            return null;
        }
    }
    public List<Products> getALL(){
        String sql = "SELECT * From product";
        List<Products> list = jdbc.query(sql,new ProductsRowMapper());
        if(!list.isEmpty()){
            return list;
        }else{
            return null;
        }
    }
    public List<Products> getCategory(Integer id){
        return null;
    }
    public String create(Products products){
        System.out.println("create OK!");
        String sql = "INSERT INTO product(id,name,description,price,stock_quantity,category_id,image_url) " +
                "VALUES(:id,:name,:description,:price,:stock_quantity,:category_id,:image_url)";
        Map<String, Object> map = new HashMap<>();
        map.put("id", products.getId());
        map.put("name", products.getName());
        map.put("description", products.getDescription());
        map.put("price", products.getPrice());
        map.put("stock_quantity", products.getStock_quantity());
        map.put("category_id",products.getCategory_id());
        map.put("image_url",products.getImage_url());
        System.out.println(map);
        int count = jdbc.update(sql, map);
        if(count > 0){
            return "success";
        }else{
            return "fail";
        }
    }
    public String delete(Integer id){
        String sql = "DELETE FROM product WHERE id = :id";
        Map<String, Object> map = new HashMap<>();
        map.put("id", id);
        int count = jdbc.update(sql, map);
        if(count > 0){
            return "success";
        }else{
            return "fail";
        }
    }
    public String update(Products products){
        String sql = "UPDATE product SET id=:id,name =:name,description = :description,price = :price," +
                "stock_quantity = :stock_quantity,category_id = :category_id,image_url = :image_url WHERE id=:id;";
        Map<String, Object> map = new HashMap<>();
        map.put("id", products.getId());
        map.put("name", products.getName());
        map.put("description", products.getDescription());
        map.put("price", products.getPrice());
        map.put("stock_quantity", products.getStock_quantity());
        map.put("category_id",products.getCategory_id());
        map.put("image_url",products.getImage_url());
        int count = jdbc.update(sql, map);
        if(count > 0){
            return "success";
        }else{
            return "fail";
        }
    }
}
