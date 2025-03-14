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
        String sql = "SELECT * FROM product ORDER BY RAND() LIMIT 4";
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
    public String create(Products products){
        String sql = "INSERT INTO product(id,name,description,price,stock,category_id) " +
                "VALUES(:id,:name,:description,:price,:stock,:category_id)";
        Map<String, Object> map = new HashMap<>();
        map.put("id", products.getId());
        map.put("name", products.getName());
        map.put("description", products.getDescription());
        map.put("price", products.getPrice());
        map.put("stock", products.getStock_quantity());
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
