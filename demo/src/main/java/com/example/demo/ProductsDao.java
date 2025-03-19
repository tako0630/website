package com.example.demo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

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
    public Products create(Products products,MultipartFile file) {
            try {
                String sql = "INSERT INTO product(name,description,price,stock_quantity,category_id,fileData,fileType) " +
                        "VALUES(:name,:description,:price,:stock_quantity,:category_id,:fileData,:fileType)";
                products.setFileData(file.getBytes());
                products.setFileType(file.getContentType());
                Map<String, Object> map = new HashMap<>();
                map.put("name", products.getName());
                map.put("description", products.getDescription());
                map.put("price", products.getPrice());
                map.put("stock_quantity", products.getStock_quantity());
                map.put("category_id",products.getCategory_id());
                map.put("fileData", products.getFileData());
                map.put("fileType", products.getFileType());


                // 使用 KeyHolder 來獲取自動生成的 ID
                KeyHolder keyHolder = new GeneratedKeyHolder();
                jdbc.update(sql, new MapSqlParameterSource(map), keyHolder, new String[]{"id"});
                products.setId(Objects.requireNonNull(keyHolder.getKey()).intValue());
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
            return products;
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
    public ResponseEntity<String> update(Products products) {
        try{
            String sql = "UPDATE product SET id=:id,name =:name,description = :description,price = :price," +
                    "stock_quantity = :stock_quantity,category_id = :category_id ,fileData = :fileData,fileType = :fileType WHERE id=:id;";
            Map<String, Object> map = new HashMap<>();
            map.put("id", products.getId());
            map.put("name", products.getName());
            map.put("description", products.getDescription());
            map.put("price", products.getPrice());
            map.put("stock_quantity", products.getStock_quantity());
            map.put("category_id", products.getCategory_id());
            map.put("fileData", products.getFileData());
            map.put("fileType", products.getFileType());
            jdbc.update(sql, map);
            return ResponseEntity.ok("圖片上傳成功，ID 為：" + products.getId());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("出現未知錯誤：" + e.getMessage());
        }
    }
}
