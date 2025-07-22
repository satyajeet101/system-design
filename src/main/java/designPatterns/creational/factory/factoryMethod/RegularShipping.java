package designPatterns.creational.factory.factoryMethod;

public class RegularShipping implements Shipping{
    @Override
    public float getShipping() {
        return 10;
    }
}
