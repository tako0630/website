package com.example.demo;
import org.springframework.jdbc.core.RowMapper;
import java.sql.ResultSet;
import java.sql.SQLException;
public class ProductsRowMapper implements RowMapper<Products> {
    @Override
    public Products mapRow(ResultSet rs, int rowNum) throws SQLException {
        Products products = new Products();
        products.setId(rs.getInt("id"));
        products.setName(rs.getString("name"));
        products.setPrice(rs.getDouble("price"));
        products.setDescription(rs.getString("description"));
        products.setStock_quantity(rs.getInt("stock_quantity"));
        products.setCategory_id(rs.getString("category_id"));
        products.setImage_url(rs.getString("image_url"));
        products.setFileData(rs.getBytes("fileData"));
        return products;
    }
}