log = (val) => console.log(val)
class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insertRecursive(value) {
        let node = new Node(value)

        const insertNode = (parent, child) => {
            if(child.value > parent.value) {
                if(!parent.right) {
                    parent.right = child
                } else {
                    return insertNode(parent.right, child)
                }            
            }
            if(child.value < parent.value) {
                if(!parent.left) {
                    parent.left = child
                } else {
                    return insertNode(parent.left, child)
                }
            } 
            
            if(parent.value == child.value) return undefined
            
            return this   
        }

        // starts at the root
        if(!this.root) {
            this.root = node
            return this
        } else {
            return insertNode(this.root, node)
        }       
    }

    insertIterative(value) {
        let node = new Node(value)
        // handle no root edge case
        // set current node
        // while current node.left }} .right is undefined
        // set node based on the conditions
        if(!this.root) {
            this.root = node
        } else {
            let currentNode = this.root

            while(true) {
                if(currentNode.value < value) {
                    if(!currentNode.right) {
                        currentNode.right = node
                        break
                    }
                    else currentNode = currentNode.right
                }

                if(currentNode.value > value) {
                    if(!currentNode.left) {
                        currentNode.left = node
                        break
                    } 
                    else currentNode = currentNode.left
                }

                if(currentNode.value == value) return undefined
            }
        }
        return this
    }

    find(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
    
    contains(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }


    bfs() {
        let queue = []
        let store = []
    
        queue.push(this.root)
        while(queue.length > 0) {
            let node = queue.shift()
            store.push(node)
            if(node.left) {
                queue.push(node.left)
            }
            if(node.right) {
                queue.push(node.right)
            }
        }
    
        return store.map(c => c.value)
    }

    dfsPreOrder() {
        let store = []
        let current = this.root

        // pick the root
        // push its value into the store
        // if it has a right, call seach
        // same with left
        const search = (node) => {
            store.push(node.value)
            if(node.left) search(node.left)
            if(node.right) search(node.right)
        }

        search(current)
        return store
    }

    dfsPostOrder() {
        let store = []
        let current = this.root

        // pick the root
        // push its value into the store
        // if it has a right, call seach
        // same with left
        const search = (node) => {
            if(node.left) search(node.left)
            if(node.right) search(node.right)
            store.push(node.value)
        }

        search(current)
        return store
    }

    dfsInOrder() {
        let store = []
        let current = this.root

        // pick the root
        // push its value into the store
        // if it has a right, call seach
        // same with left
        const search = (node) => {
            if(node.left) search(node.left)
            store.push(node.value)
            if(node.right) search(node.right)
        }

        search(current)
        return store
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
