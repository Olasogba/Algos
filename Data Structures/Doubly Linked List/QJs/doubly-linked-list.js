class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(value) {
        // iterate to the end of the list
        // set its next to the new node
        // set the new nodes prev to it
        let node = new ListNode(value)
        if(!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }

        this.length++
        return this
    }

    pop() {
        if(!this.head) return undefined
        let currentTail = this.tail
        if(this.length==1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = currentTail.prev
            this.tail.next = null
            currentTail.prev = null
        }
        
        this.length--
        return currentTail
    }
    
    shift() {
        if(this.length === 0) return undefined;
        let oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    unshift(val) {
        let newNode = new ListNode(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if(index < 0 || index >= this.length) return null;
        let count, current;
        if(index <= this.length/2){
            count = 0;
            current = this.head;
            while(count !== index){
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while(count !== index){
                current = current.prev;
                count--;
            }
        }
        return current;
    }

    set(index, val){
        let foundNode = this.get(index);
        if(foundNode != null){
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);

        let newNode = new ListNode(val);
        let beforeNode = this.get(index-1);
        let afterNode = beforeNode.next;
        
        beforeNode.next = newNode, newNode.prev = beforeNode;
        newNode.next = afterNode, afterNode.prev = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.shift();
        if(index === this.length) return !!this.pop();

        let removedNode = this.get(index)
        removedNode.prev.next = removedNode.next
        removedNode.next.prev - removedNode.next
        removedNode.next = null
        removedNode.prev = null
        
        this.length--
        return removedNode
    }

    reverse() {
        // start from the head
        // loop as long as there is something to loop over
        // store the previous in a variable
        // make the previous the next,
        // make the next stored previous
        // make the current the previous
        // if there is a temp, make it's previous the new head

        let current = this.head
        let temp = null

        while(current) {
            temp = current.prev
            current.prev = current.next
            current.next = temp
            current = current.prev
        }

        if(temp)
            this.head = temp.prev
        
        return this
    }

    print() {
        let current = this.head
        while(current) {
            console.log(current.val)
            current = current.next
        }
    }
}


let list = new DoublyLinkedList()
list.push("Harry")
list.push("Ron")
list.push("Hermione")

list.print()

console.log()

list.reverse()
list.print()