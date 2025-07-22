package designPatterns.creational.factory.factoryMethod;

public class ShippingFactory {
    public Shipping getShippingObject(float price){
        if(price > 100){
            return new PrimeShipping();
        } else {
            return new RegularShipping();
        }
    }
}
