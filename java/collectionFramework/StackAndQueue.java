package collectionFramework;

import java.util.*;
import java.util.concurrent.ConcurrentLinkedDeque;

class StackAndQueue {
    public static void main(String[] args) {
        //Legacy discouraged to use ans it is synchronized
        Stack<Integer>stack = new Stack<>();

        Queue<String> q = new LinkedList<>();
        q.offer("sat"); //add at the end
        q.poll(); //to remove and null when empty
        q.peek();

        Deque<Integer>dq = new ArrayDeque<>(); // not synchronized
        dq.push(1);
        dq.peek();
        dq.pop();
        Deque<String> threadSafeStack = new ConcurrentLinkedDeque<>(); //synchronized
    }
}