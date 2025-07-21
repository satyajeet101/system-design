package designPatterns.creational.singleton;

public class BillPughSingleton {
    private BillPughSingleton(){}
    public static class CreateObj{
        //This will be loaded only when getInstance will be called
        private static final BillPughSingleton BILL_PUGH_SINGLETON = new BillPughSingleton();
    }
    public BillPughSingleton getInstance(){
        return CreateObj.BILL_PUGH_SINGLETON;
    }
}
