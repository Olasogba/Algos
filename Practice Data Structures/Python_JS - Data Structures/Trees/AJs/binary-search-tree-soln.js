log = (val) => console.log(val)

class Node {
    constructor(value) {
        this.value = value;
        this.left = null
        this.right = null
    }
}

/**
 * Methods:
 * - insertRecursive
 * - insertIterative
 * - find
 * - contains
 * - bfs
 * - dfsPreOrder
 * - dfsPostOrder
 * - dfsInOrder
 */

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insertRecursive(value) {
        const nodeToInsert = new Node(value)

        const insert = (node, child) => {
            if(node.value < child.value) {
                if(!node.right) {
                    node.right = child
                } else {
                    return insert(node.right, child)
                }
            }
            if(node.value > child.value) {
                if(!node.left) {
                    node.left = child
                } else {
                    return insert(node.left, child)
                }
            }
            if(node.value == child.value) return undefined

            return this
        }

        if(!this.root) {
            this.root = nodeToInsert
            return this
        } else {
            return insert(this.root, nodeToInsert)
        }
    }

    insertIterative(value) {
        const nodeToInsert = new Node(value)
        if(!this.root) {
            this.root = nodeToInsert;
            return this
        }
        let currentNode = this.root
        while(true) {
            if(currentNode.value < nodeToInsert.value) {
                if(!currentNode.right) {
                    currentNode.right = nodeToInsert
                    break
                } else {
                    currentNode = currentNode.right
                }
            }
            if(currentNode.value > nodeToInsert.value) {
                if(!currentNode.left) {
                    currentNode.left = nodeToInsert
                    break
                } else {
                    currentNode = currentNode.left
                }
            }

            if(currentNode.value == nodeToInsert.value) return undefined
        }

        return this
    }

    find(value) {
        if(!this.root) return undefined
        let current = this.root, found = false

        while(current && !found) {
            if(current.value > value) current = current.left
            else if(current.value < value) current = current.right
            else found = true
        }

        return found ? current : undefined
    }

    contains(value) {
        if(!this.root) return false
        let current = this.root, found = false
        while(current && !found) {
            if(current.value > value) current = current.left
            else if(current.value < value) current = current.right
            else found = true
        }

        return found
    }

    bfs() {
        let store = [], queue = []
        if(!this.root) return []
        queue.push(this.root)

        while(queue.length) {
            let current = queue.shift()
            store.push(current)
            if(current.left) queue.push(current.left)
            if(current.right) queue.push(current.right)
        }

        return store.map(c => c.value)
    }

    dfsPreOrder() {
        if(!this.root) return []
        let current = this.root, store = []

        const search = (node) => {
            store.push(node)
            if(node.left) search(node.left)
            if(node.right) search(node.right)
        }

        search(this.root)

        return store.map(c => c.value)
    }

    dfsPostOrder() {
        if(!this.root) return []
        let current = this.root, store = []

        const search = (node) => {
            if(node.left) search(node.left)
            if(node.right) search(node.right)
            store.push(node)
        }

        search(current)
        return store.map(c => c.value)
    }

    dfsInOrder() {
        if(!this.root) return []
        let current = this.root, store = []

        const search = (node) => {
            if(node.left) search(node.left)
            store.push(node)
            if(node.right) search(node.right)
        }

        search(current)

        return store.map(c => c.value)
    }
}
let node = new Node(1)
let tree = new BinarySearchTree()
tree.insertRecursive(10)
tree.insertRecursive(6)
tree.insertRecursive(15)
tree.insertRecursive(3)
tree.insertRecursive(20)
tree.insertRecursive(8)
log(tree.bfs())
log(tree.dfsPreOrder())
log(tree.dfsPostOrder())
log(tree.dfsInOrder())