
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }    
}

class Stack {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    push(value) {
        let node = new Node(value)
        if(this.size == 0) {
            this.first = node
            this.last = node
        } else {
            let currentHead = this.first
            this.first = node
            this.first.next = currentHead
        }
        return ++this.size
    }

    pop() {
        if(!this.first) return null
        let oldhead = this.first

        if(this.size==1) {
            this.first = null
            this.last = null
        } else {
            this.first = this.first.next
        }
        this.size--

        return oldhead.value
    }
}


let stack = new Stack()
stack.push('First')
stack.push("Second")
stack.push("Third")

log = (val) => console.log(val)
log(stack.pop())
log(stack.push('Hello there!'))
log(stack)