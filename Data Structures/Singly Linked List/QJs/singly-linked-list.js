// piece of data - val
// reference to next node - next

class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0
        this.head = null
        this.tail = null
    }

    push(value) {
        let node = new ListNode(value)
        if(!this.head) {
            this.head = node
            this.tail = this.head
        } else {
            this.tail.next = node;
            this.tail = node
        }
        this.length++
        return this
    }

    pop() {
        if(!this.head) return undefined

        let current = this.head
        let tail = current

        while(current.next) { 
            tail = current
            current = current.next
        }

        current.next = null
        this.length--

        if(this.length == 0) {
            this.head = null
            this.tail = null
        }

        return current
    }

    shift() {
        if(!this.length) return undefined

        const currentHead = this.head
        this.head = currentHead.next
        this.length--

        if(this.length == 0) this.tail = null
        
        return currentHead
    }

    unshift(value) {
        let newHead = new ListNode(value)
        if(this.length == 0) {
            this.head = newHead
            this.tail = newHead
            this.length++
        }
        this.newHead.next = this.head
        this.head = newHead
        this.length++

        return this
    }

    get(index) {
        if(this.length == 0) return undefined
        if(index < 0 || index >= this.length) return null;

        let current = this.head 
        let count = 0
        while(current) {
            if(count == index) {
                return current
            }
            current = current.next
            count++
        }

        return undefined
    }

    set(index, value) {
       let found = this.get(index)
       if(found) {
           found.value = value
           return true
       }
       return false
    }

    insert(index, value) {
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);

        let newNode = new Node(value)
        let prev = this.get(index-1)
        let temp = prev.next
        if(prev) {
            prev.next = newNode
            newNode.next = temp
        }
        this.length++
        return true
    }

    remove(index) {
        if(index < 0 || index > this.length) return false;
        if(index === this.length-1) return !!this.pop(val);
        if(index === 0) return !!this.shift(val);

        let prev = this.get(index-1)
        let removed = prev.next
        let after = removed.next

        prev.next = after
        this.length--
        return removed
    }

    reverse() {
        // swap the head and tail
        // loop, starting with the head
        // save the next node into a variable
        // make the actual next become the previous
        // make the previous the current
        // make the current the next node that had been saved

        let node = this.head
        this.head = this.tail
        this.tail = node

        let next;
        let prev = null

        for(let i=0; i<this.length; i++) {
            next = node.next
            node.next = prev
            prev = node
            node = next
        }

        return this
    }

    print(){
        var arr = [];
        var current = this.head
        while(current){
            arr.push(current.val)
            current = current.next
        }
        console.log(arr);
        return this
    }
    
}


let list = new SinglyLinkedList()

list.push(100)
list.push(201)
list.push(250)
list.push(350)
list.push(999)

log = (val) => console.log(val)

//log(list.get(4))
list.print().reverse().print()