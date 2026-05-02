package designPatterns.creational.factory.factoryMethod;

public class FactoryMethodDemo {
    public static void main(String[] args) {
        //one way is clint have all the implementation classes
        // and can pass the object of whatever type of shipping it want.
        // But in this case client have to be aware about the implementation
        /*
        Shipping shipping = new PrimeShipping();
        float shippingPrice = shipping.getShipping(1);
        */

        ShippingFactory shippingFactory = new ShippingFactory();
        Shipping shipping = shippingFactory.getShippingObject(101);
        float shippingPrice =  shipping.getShipping();
        System.out.println(shippingPrice);
    }
}
