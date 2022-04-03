class Node {
    constructor(val) {
        this.value = val
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        var node = new Node(val)
        if(!this.head) {
            this.head = node;
            this.tail = node 
        } else {
            this.tail.next = node
            this.tail = node;
        }

        this.length+=1
    }

    print = () => {
        var str = "["
        var current = this.head
        while(current) {
            if(current!=this.tail)str += current.value + ", "
            else str+= current.value
            current = current.next
        }
        str+="]"
        console.log(str)
    }


    reverse() {
        var prev = null
        var current = this.head
        this.head = this.tail
        this.tail = current;

        while(current) {
            var dNext = current.next;
            current.next = prev;
            prev = current
            current = dNext
        }
    }
}


var list = new LinkedList()
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.print()

list.reverse()
console.log()

list.print()
