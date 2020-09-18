function bfs(tree) {
    let queue = []
    let store = []

    queue.push(tree.root)
    while(queue.length > 0) {
        let node = queue.shift()
        store.push(value)
        if(node.left) {
            queue.push(node.left.value)
        }
        if(node.right) {
            queue.push(node.right.value)
        }
    }

    return store
}