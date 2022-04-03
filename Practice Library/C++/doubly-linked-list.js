class Node {
    constructor(val) {
        this.value = val
        this.next = null
        this.prev = null
    }
}


class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0;
    }


    push(val) {
        var node = new Node(val)
        if(!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.length++
    }


    print() {
        var str = "["
        var current = this.head
        while(current) {
            console.log(current.value)
            // if(current!=this.tail)str += current.value + ", "
            // else str+= current.value
            current = current.next
        }
        // str+="]"
        // console.log(str)
    }

    reverse() {
        var current = this.head;
        var temp = null
        while(current) {
            var temp = current.prev
            current.prev = current.next
            current.next = temp
            current = current.prev
        }

        if(temp)this.head = temp.prev
    }
}



var list = new DoublyLinkedList()
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(10)
list.push(67)
list.print()

list.reverse()
console.log()

list.print()