package features.newJavaFeatures.sorting;

import features.newJavaFeatures.sorting.Student;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ComparableDemo {
    public static void main(String[] args) {
        Student s1 = new Student("Staya", 35);
        Student s2 = new Student("Anika", 30);
        Student s3 = new Student("Shanu", 29);
        Student s4 = new Student("Khushi", 1);
        List<Student>studentList = new ArrayList<>(List.of(s1, s2, s3, s4));
        System.out.println("Unsorted List");
        print(studentList);
        Collections.sort(studentList);
        System.out.println("Sorted List");
        print(studentList);
    }

    private static void print(List<Student> studentList) {
        for (Student s : studentList){
            System.out.println(s);
        }
    }
}
