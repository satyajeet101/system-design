# Java Feature

## Functional interface
1. Predicate<Integer> predicate = (a) -> a > 2; predicate.test(2);
2. Function<Integer, Integer> function = (a) -> a*2; function.apply(2)); 
3. Consumer<Integer>consumer = (a)-> System.out.println(a); consumer.accept(2); 
4. Supplier<Integer>supplier = ()->2; supplier.get()
5. BiFunction<String, String, Integer>biFunction = (a, b)-> a.compareTo(b); biFunction.apply("Amit", "Khushi");
6. BiPredicate<Integer, Integer> biPredicate = (a, b) -> a>b; biPredicate.test(2, 3)
7. BiConsumer<Integer, Integer>biConsumer = (a, b)-> System.out.println(a+b); biConsumer.accept(2, 3);
8. UnaryOperator<Integer>unaryOperator = (a) -> a+2; // Same as function but take and return same type of value
   unaryOperator.apply(2)
9. BinaryOperator<Integer>binaryOperator = (a, b) -> a+b;// Same as bi function but take and return same type of value
   binaryOperator.apply(1,2)

## Stream API
1. **Different ways to create stream**
   - Stream<Integer> stream = list.stream();
   - Stream<String> stream1 = Arrays.stream(arr); 
   - Stream<Integer> stream2 = Stream.of(1, 2, 3); 
   - Stream<Integer> generate = Stream.generate(() -> 1).limit(100); 
   - Stream<Integer> iterate = Stream.iterate(2, (a) -> a + 1).limit(100);

2. **Intermediate operations** : they are lazy i.e thy will not operate until terminal operation is executed
   - Stream<Integer> iterate = Stream.iterate(2, (a) -> a + 1).limit(100);
## Reference 
Lambda can be replaced with either method or constructor reference 
1. Method reference
 - a.compareTo(b) can be replaced with Strong::compareTo
2. Constructor reference
 - new Mobile(x) can be replaced with Mobile::new

## Sorting
1. Comparable
    - Tells the natural sorting of any class.
    - public int compareTo(Student o){}
    - Collections.sort(studentList);

2. Comparator
    - Takes the sorting order provided by class implements Comparator
    - public int compare(Student s1, Student s2){}
    - Collections.sort(studentList, new ComparatorDemo());
