package features.collectionFramework;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

public class MapImp {
    public static void main(String[] args) {
        //Null key and value allowed
        //put(), get(), remove() O(1)
        Map<Integer, Integer> unsortedMap = new HashMap<>(16, .75F);

        // Maintain order nad uses doubly-linked list to maintain insertion order
        //Null key and value allowed
        ////put(), get(), remove() O(1)
        Map<Integer, String> orderedMap = new LinkedHashMap<>();

        //Internal structure: Red-Black Tree (self-balancing BST).
        //Null keys not allowed.
        //Null value allowed
        //put(), get(), remove() → O(log n).
        Map<Integer, String> sortedMap = new TreeMap<>();

        //java.util.concurrent
        //Internal structure: Segmented hash table (Java 7) → bucket-level locking (Java 8).
        //Null keys and null value not allowed
        //Fully thread-safe,
        Map<Integer, String> map = new ConcurrentHashMap<>();
    }
}
