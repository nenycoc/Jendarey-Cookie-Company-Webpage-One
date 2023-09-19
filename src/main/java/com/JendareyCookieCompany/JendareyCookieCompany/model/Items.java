package com.JendareyCookieCompany.JendareyCookieCompany.model;

public class Items {

    private String name;
    private Double price;

    private Integer quantity;


    public Items(String name, Double price) {
        this.name = name;
        this.price = price;
    }

    public Items() {

    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
}
