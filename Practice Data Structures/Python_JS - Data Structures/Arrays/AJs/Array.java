import java.util.Iterator;

@SuppressWarnings("unchecked")
public class Array<T> implements Iterable<T> {

    private T[] arr;
    private int len = 0; // length user thinks array is
    private int capacity = 0; // actual array size

    // using two constructors to make for an optional size.
    public Array() {
        this(16);
    }

    public Array(int capacity) {
        if (capacity < 0)
            throw new IllegalArgumentException("Illegal Capacity: " + capacity);
        this.capacity = capacity;
        arr = (T[]) new Object[capacity]; 
    }

    public int size() {
        return len;
    }

    public boolean isempty() {
        return size() == 0;
    }

    public T get(int index) {
        return arr[index];
    }

    public void set(int index, T elem) {
        arr[index] = elem;
    }

    public void clear() {
        for (int i = 0; i < capacity; i++)
            arr[i] = null;
        len = 0;
    }

    public void add(T elem) {
        // Time to resize
        if (len+1 >= capacity) {
            if (capacity == 0) capacity = 1;
            else capacity*=2; // double the size
            T[] new_arr = (T[]) new Object[capacity];
            for(int i=0; i<len; i++)
                new_arr[i] = arr[i];
            arr = new_arr;
        }

        arr[len++] = elem;
    }

    // Removes the element at the specified index in this list.
    public T removeAt(int index) {
        if (index >= len && index < 0) throw new IndexOutOfBoundsException();
        T data = arr[index];
        T[] new_arr = (T[]) new Object[len-1];
        for (int i=0, j=0; i<len; i++,j++)
            if(index==i) j--;
            else new_arr[j]=arr[i];
        arr = new_arr;
        capacity = --len;
        return data;
    }

    public boolean remove(Object obj) {
        for (int i=0; i<len; i++) {
            if(arr[i]==obj) {
                removeAt(i);
                return true;
            }
        }
        return false;
    }

    public int indexOf(Object obj) {
        for (int i=0; i<len; i++) {
            if (arr[i].equals(obj)) return i;
        }
        return -1;
    }

    public boolean contains(Object obj) {
        return indexOf(obj) != -1;
    }

    @Override
    public Iterator<T> iterator() {
        return new Iterator<T>(){
            int index = 0;
            public boolean hasNext() {return index < len;}
            public T next() {return arr[index++];}
        };
    }

    @Override public String toString() {
        if(len==0) return "[]";
        else {
            StringBuilder sb = new StringBuilder(len).append("[");
            for(int i=0; i<len-1; i++)
                sb.append(arr[i]+", ");
            return sb.append(arr[len-1]+"]").toString();
        }
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
