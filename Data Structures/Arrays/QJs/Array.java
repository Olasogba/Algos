/**
 * Methods:
 * - isEmpty()
 * - size()
 * - add()
 * - get()
 * - set()
 * - clear()
 * - removeAt()
 * - remove()
 * - indexOf()
 * - contains()
 * - iterator()
 * - toString()
 */
import java.util.Iterator;

@SuppressWarnings("unchecked")
public class Array<T> implements Iterable<T> {
    public int capacity = 0;
    int length = 0;
    T[] arr;

    public Array() {
        this(16);
    }

    public Array(int capacity) {
        if(capacity < 0) {
            throw new IllegalArgumentException("Illegal Capacity: " + capacity);
        }
        this.capacity = capacity;
        this.arr = (T[]) new Object[capacity];
    }

    public boolean isEmpty() {
        return this.length == 0;
    }

    public int size() {
        return this.length;
    }

    public T add(T elem) {
        if(this.length >= this.capacity) { //double up
            if(this.capacity ==0) capacity=1;
            else capacity *= 2;
            var newArr = (T[]) new Object[capacity];
            for (int i=0; i<this.length; i++) {
                newArr[i] = arr[i];
            }
            arr = newArr;
        }
        arr[this.length++] = elem;

        return elem;
    }

    public T get(int index) {
        return this.arr[index];
    }

    public void set(int index, T elem) {
        this.arr[index] = elem;
    }

    public T removeAt(int index) {
        if (index >= this.length || index < 0) throw new IndexOutOfBoundsException();
        var newArr = (T[]) new Object[this.length-1];
        var toReturn = this.arr[index];

        for (int i=0, j=0; i<this.length; i++) {
            if (i==index) j--;
            else newArr[j]=arr[i];
        }
        arr = newArr;
        this.capacity = this.length--;

        return toReturn;
    }

    public boolean remove(T elem) {
        for (int i=0; i<this.length; i++) {
            if(this.arr[i]==elem) {
                this.removeAt(i);
                return true;
            }
        }

        return false;
    }

    public int indexOf(T elem) {
        for (int i=0; i<this.length; i++) {
            if (this.arr[i].equals(elem)) return i;
        }

        return -1;
    }

    public boolean contains(T elem) {
        return this.indexOf(elem) != -1;
    }

    @Override
    public Iterator<T> iterator() {
        return new Iterator<T>() {
            int index=0;
            public boolean hasNext() {return index < length;}
            public T next() {return arr[index++];}
        };
    }

    @Override
    public String toString() {
        var sb = new StringBuilder();
        sb.append("[");
        for (int i=0; i<length-1; i++) {
            sb.append(arr[i] + ", ");
        }
        sb.append(arr[length-1]+"]");

        return sb.toString();
    }

    public static void main(String[] args) {
        var array = new Array<>();
        array.add(1);
        array.add(2);
        array.add(3);
        array.add(4);

        System.out.println(array);
    }
}
