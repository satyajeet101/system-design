package features.collectionFramework;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Stack;
import java.util.concurrent.CopyOnWriteArrayList;

public class ListImpl {

    //You need fast random access.
    //Frequent reads, fewer insertions/removals in the middle.
    //Uses a resizable array.
    //Default capacity = 10.
    //When array is full → capacity grows by 1.5x.
    //Uses System.arraycopy() when resizing → expensive if frequent.
    List<String> list = new ArrayList<>();

    //You need frequent insertions/removals.
    //You don’t need random access often.
    //Internal Structure: Doubly Linked List
    //No resizing needed → memory allocated per node.
    List<String> list2 = new LinkedList<>();

    Stack<Integer> stack = new Stack<>();

    // Fully thread-safe.
    //Every modification (add, remove, set) creates a new copy of the array.
    //Ideal for concurrent read-heavy operations.
    //Writes are costly, reads are fast.
    List<String> list3 = new CopyOnWriteArrayList<>();
}
