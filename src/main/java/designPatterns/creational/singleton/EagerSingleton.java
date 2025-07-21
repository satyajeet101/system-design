package designPatterns.creational.singleton;

//Problem here is
// 1 : even its not in use object will be created
public class EagerSingleton {
    private static final EagerSingleton lazySingleton = new EagerSingleton();
    private EagerSingleton(){}//Make it private to avoid any object creation outside this class
    public EagerSingleton getInstance(){
        return lazySingleton;
    }
}
