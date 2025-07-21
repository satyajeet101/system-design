package designPatterns.creational.singleton;

//Problem with multithreading
public class LazySingleton {
    private static LazySingleton lazySingleton;
    private LazySingleton(){}//Make it private to avoid any object creation outside this class
    public LazySingleton getInstance(){
        if(lazySingleton == null){
            lazySingleton = new LazySingleton();
        }
        return lazySingleton;
    }
}
