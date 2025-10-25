package features.newJavaFeatures.sorting;

public class Student implements Comparable<Student>{
    String name;
    int age;

    @Override
    public int compareTo(Student o) {
        return this.name.compareTo(o.name);
    }

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public String toString() {
        return "Student{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
    }
}
