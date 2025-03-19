package com.example.demo;

public class Products {
    private int id;//商品ID，自增主键
    private String name;//商品名称
    private double price;//商品价格，保留两位小数
    private String description;//商品描述
    private int stock_quantity;//商品库存数量
    private String category_id;
    private byte[] fileData;
    private String fileType;
    public int getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public double getPrice() {
        return price;
    }
    public void setPrice(double price) {
        this.price = price;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public int getStock_quantity() {
        return stock_quantity;
    }
    public void setStock_quantity(Integer stock_quantity) {
        this.stock_quantity = stock_quantity;
    }
    public String getCategory_id() {
        return category_id;
    }
    public void setCategory_id(String category_id) {
        this.category_id = category_id;
    }

    public byte[] getFileData() {
        return fileData;
    }
    public void setFileData(byte[] fileData) {
        this.fileData = fileData;
    }
    public String getFileType() {
        return fileType;
    }
    public void setFileType(String fileType) {
        this.fileType = fileType;
    }
}
