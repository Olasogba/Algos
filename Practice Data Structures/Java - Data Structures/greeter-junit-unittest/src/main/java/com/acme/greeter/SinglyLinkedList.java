package com.acme.greeter;

import java.util.Iterator;



public class SinglyLinkedList<T> implements Iterable<T> {

    private class SinglyLinkedListNode<NT> {
        NT value;
        SinglyLinkedListNode<NT> next;
        SinglyLinkedListNode<NT> prev;
        
        public SinglyLinkedListNode(NT value) {
            this.value = value;
            this.prev = null;
            this.next = null;

        }

        @Override
        public String toString() {
            return value.toString();
        }
    }

    SinglyLinkedListNode<T> head;
    SinglyLinkedListNode<T> tail;
    int size = 0;

    // methods: unshift, shift, push, pop, remove, removeAt, indexOf, reverse, getAt, peekHead, peekTail, 

    public void unshift(T value) {
        if(value ==null) throw new RuntimeException("Value cannot be null!");
        SinglyLinkedListNode<T> nodeToAdd = new SinglyLinkedListNode<T>(value);

        if(isEmpty()) {
            head = nodeToAdd;
            tail = nodeToAdd;
        } else {
            SinglyLinkedListNode<T> oldHead = head;
            nodeToAdd.next = oldHead;
            head = nodeToAdd;
        }

        ++size;
    }

    public T shift() {
        if(head==null) throw new RuntimeException("Empty list!");
        SinglyLinkedListNode<T> oldHead = head;
        head = head.next;
        --size;

        if(isEmpty())
            tail = null;

        return oldHead.value;
    }

    public void push(T value) {
        var node = new SinglyLinkedListNode<T>(value);
        if(isEmpty()) {
            head = node;
            tail = node;
        } else {
            tail.next = node;
            tail = node;
        }

        ++size;
    }

    public T pop() {
        if(isEmpty()) throw new RuntimeException("Empty list!");
        
        SinglyLinkedListNode<T> popped;
        if(size==1) {
            popped = head;
            head = null;
            tail = null;
        } else {
            var current = head;
            var prev = head;
            for(current=head; current.next!=null;current=current.next) {
                prev = current;
            }
            tail = prev;
            prev.next = null;
            popped = current;
        }
        --size;
        return popped.value;
    }

    public boolean remove(Object value) {
        if(isEmpty()) throw new RuntimeException("Empty list!");

        var current = head;
        SinglyLinkedListNode<T> prev = null;

        while(current!=null) {
            if(value.equals(current.value)) {
                if(prev==null) {
                    // we wanna remove head
                    shift();
                } else {
                    prev = current.next;
                    if(prev.next==null) tail = prev;
                    --size;
                }
                return true;
            }
            current = current.next;
        }

        return false;
    }

    public int indexOf(Object value) {
        var count = 0;
        var current = head;
        while(current!=null) {
            if(value.equals(current.value)) {
                return count;
            }
            ++count;
            current = current.next;
        }

        return -1;
    }

    public void reverse() {
        // swap the head and tail;
        var current = head;
        head = tail;
        tail = current;

        SinglyLinkedListNode<T> prev = null;
        SinglyLinkedListNode<T> next = null;

        while(current!=null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
    }

    public T getAt(int index) {
        if(index<0 || index>=size) throw new RuntimeException("Index out of bounds!");
        if(isEmpty()) throw new RuntimeException("Empty list!");

        var current = head;
        var count = 0;
        while(current!=null) {
            if(count==index) break;
            current = current.next;
            ++count;
        }
        return current.value;
    }

    public T peekHead() {
        if(isEmpty()) throw new RuntimeException("Empty list!");
        return head.value;
    }

    public T peekTail() {
        if(isEmpty()) throw new RuntimeException("Empty list!");
        return tail.value;
    }

    public int size() {
        return size;
    }

    public boolean isEmpty() {
        return size==0;
    }

    @Override
    public Iterator<T> iterator() {
        return new Iterator<T>() {
            SinglyLinkedListNode<T> trav = head;
			@Override
			public boolean hasNext() {
				return trav != null && trav.next !=null;
			}

			@Override
			public T next() {
                var data = trav.value;
                trav = trav.next;
                return data;
			}

        };
    }

    @Override
    public String toString() {
        var current = head;
        StringBuilder sb  = new StringBuilder();
        sb.append("[");
        while(current.next!=null) {
            sb.append(current.value+", ");
            current = current.next;
        }
        sb.append(tail.value+"]");
        return sb.toString();
    }

    public static void Main(String[] args) {
        var s = new SinglyLinkedList<Integer>();
        s.push(1);
        s.push(1);
        s.push(1);
        s.push(1);
        s.push(1);
        System.out.println(s.toString());
    }

}
