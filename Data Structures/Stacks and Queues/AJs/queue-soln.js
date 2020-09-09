class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    enqueue(value) {
        // add to the end
        let node = new Node()
        if(!this.first) {
            this.first = node
            this.last = node
        } else {
            this.last.next = node
            this.last = node
        }
        return ++this.size
    }

    dequeue() {
        // remove from the beginning
        if(!this.first) return null

        let oldHead = this.first
        if(this.size == 1) {
            this.first = null
            this.last = null
        } else {
            this.first = this.first.next
        }

        this.size--
        return oldHead.value
    }
}