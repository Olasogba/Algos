//package com.acme.greeter;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.TreeSet;

// methods: enqueue(push, bubbleup), dequeue(shift, sinkdown), remove, removeAt, contains

public class MikesBinaryHeap<T extends Comparable<T>> {

    // have a map that'll save the items for easy retrieval
    List<T> heap = null;
    private int heapCapacity = 0;
    private int heapSize = 0;

    // map to enable faster retrieval of data
    private Map<T, TreeSet<Integer>> map = new HashMap<>();
    
    public MikesBinaryHeap() {
        this(1);
    }

    public MikesBinaryHeap(int size) {
        heap = new ArrayList<>(size);
    }

    public MikesBinaryHeap(Collection<T> elems) {
        for(var item:elems) {
            enqueue(item);
        }
    }

    public boolean contains(T elem) {
        if(elem==null)return false;
        // linear time
        // for(var i=0; i<heapSize; i++) {
        //     if(heap.get(i).equals(elem)) return true;
        // }
        // return false;

        // logarithmic time
        return map.containsKey(elem);
    }

    public void clear() {
        for(var i=0; i<heapCapacity; i++) heap.set(i, null);
        heapSize = 0;
        map.clear();
    }

    public boolean isValidHeap(int index) {
        if(index>=heapSize) return true;
        var left = 2*index+1;
        var right = 2*index+2;

        if(left<heapSize && !hasMorePriority(index, left)) return false;
        if(right<heapSize && !hasMorePriority(index, right)) return false;

        return (isValidHeap(left) && isValidHeap(right));
    }

    public void enqueue(T item) {
        if(item==null) throw new IllegalArgumentException();

        if(heapSize<heapCapacity) { // in the event that a removal has caused heapSize reduction
            heap.set(heapSize, item);
        } else {
            // heapSize==heapCapacity
            heap.add(item);
            heapCapacity++;
        }

        // add to map
        mapAdd(item, heapSize);
        // bubble up
        bubbleUp(heapSize);

        heapSize++;
    }

    public void bubbleUp(int index) {        
        var parent = Math.abs((index-1)/2);

        while(parent>0 && hasMorePriority(index, parent)) {
            // swap
            swap(index, parent);

            index = parent;

            parent = (index-1)/2;
        }
    }

    public void dequeue() {
        // get the item to dequeue
        // swap it with the last element
        // set the last element to null
        // sink down the swaped element.
        // remove element from the map

        removeAt(0);
    }

    public boolean remove(T item, boolean linearTime) {
        if(item==null) throw new IllegalArgumentException();
        
        if(linearTime) {
            for(var i=0; i<heap.size(); i++) {
                if(heap.get(i)==item) {
                    removeAt(i);
                    return true;
                }
            }
            return false;
        } else {
            var index = mapGetIndex(item);
            if(index!=null) removeAt(index);    
            return index!=null;        
        }
    }

    public Integer mapGetIndex(T item) {
        var set = map.get(item);
        return set==null?null:set.last();
    }

    public T removeAt(int index) {
        var itemToRemove = heap.get(index);

        heapSize--;
        // swap with last value
        swap(index, heapSize);

        heap.set(heapSize, null);
        mapRemove(itemToRemove, index);

        if(index==heapSize) return itemToRemove;

        // get elem for sinking or bubblingup
        var elem = heap.get(index);
        // try sinking
        sinkDown(index);

        if(heap.get(index).equals(elem)) bubbleUp(index);

        return itemToRemove;        
    }

    public void sinkDown(int index) {
        while(true) {
            var left = 2*index+1;
            var right = 2*index+2;

            var smallest = left;

            if(hasMorePriority(right, smallest) & right<heapSize) smallest=right;

            if(hasMorePriority(index, smallest) || left>=heapSize) break;

            swap(index, smallest);

            index = smallest;
        }
    }

    public void mapAdd(T item, int index) {
        var set = map.get(item);

        if(set==null) {
            var newSet = new TreeSet<Integer>();
            newSet.add(index);
            map.put(item, newSet);
        } else set.add(index);
    }

    public void mapRemove(T item, int index) {
        var set = map.get(item);
        set.remove(index);
        if(set.size()==0) map.remove(item);
    }   

    public void swap(int idx1, int idx2) {
        var val1 = heap.get(idx1);
        var val2 = heap.get(idx2);

        heap.set(idx1, val2);
        heap.set(idx2, val1);

        mapSwap(val1, val2, idx1, idx2);
    }

    public void mapSwap(T val1, T val2, int idx1, int idx2) {
        var set1 = map.get(val1);
        var set2 = map.get(val2);

        set1.remove(idx1);
        set2.remove(idx2);

        set1.add(idx2);
        set2.add(idx1);
    }


    public int size() {
        return this.heapSize;
    }

    public boolean isEmpty() {
        return heapSize == 0;
    }
    
    public boolean hasMorePriority(int idx1, int idx2) {
        var val1 = heap.get(idx1);
        var val2 = heap.get(idx2);

        return val1.compareTo(val2) <= 0;
    }
    
}

