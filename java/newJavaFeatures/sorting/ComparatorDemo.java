package features.newJavaFeatures.sorting;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class ComparatorDemo implements Comparator<Student> {
    public static void main(String[] args) {
        Student s1 = new Student("Staya", 35);
        Student s2 = new Student("Anika", 30);
        Student s3 = new Student("Shanu", 29);
        Student s4 = new Student("Khushi", 1);
        List<Student>studentList = new ArrayList<>(List.of(s1, s2, s3, s4));
        System.out.println("Unsorted List");
        print(studentList);
        Collections.sort(studentList, new ComparatorDemo());
        System.out.println("Sorted List");
        print(studentList);
    }
    @Override
    public int compare(Student s1, Student s2){
        return s1.age - s2.age;
    }
    private static void print(List<Student> studentList) {
        for (Student s : studentList){
            System.out.println(s);
        }
    }
}
