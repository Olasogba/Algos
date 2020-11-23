log = (val) => console.log(val)

class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(name) {
        if(!this.adjacencyList[name]) this.adjacencyList[name] = []
    }

    addEdge(vertex1, vertex2) {
        !!this.adjacencyList[vertex1] && !!this.adjacencyList[vertex2] && this.adjacencyList[vertex1].push(vertex2)
        !!this.adjacencyList[vertex2] && !!this.adjacencyList[vertex1] && this.adjacencyList[vertex2].push(vertex1)        
    }

    removeEdge(vertex1, vertex2) {
        !!this.adjacencyList[vertex1] &&
        (this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            c => c != vertex2
        ))

        !!this.adjacencyList[vertex2] &&
        (this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            c => c != vertex1
        ))
    }

    removeVertex(vertex) {
        while(this.adjacencyList[vertex].length) {
            const removed = this.adjacencyList[vertex].pop()
            this.removeEdge(removed, vertex)
        }
        delete this.adjacencyList[vertex]
    }

    dfsRecursive(vertex, results = [], visited = {}) {
        if(!this.adjacencyList[vertex]) return
        results.push(vertex)
        visited[vertex] = true
        for(let n of this.adjacencyList[vertex]) {
            if(!visited[n]) {
                this.dfsRecursive(n, results, visited)
            }
        }

        return results
    }

    dfsIterative(vertex) {
        let s = []
        let visited = []
        let result = []
        s.push(vertex)
        while(!!s.length) {
            const node = s.pop()
            if(!visited[node]) {
                result.push(node)
                visited[node] = true
                for(let n of this.adjacencyList[node]) {
                    s.push(n)
                }
            }
        }

        return result
    }

    dfs(start) {
        let queue = [start]
        let results = []
        let visited = {}

        visited[start] = true
        while(!!queue.length) {
            let first = queue.shift()
            results.push(first)
            for(let n of this.adjacencyList[first]) {
                if(!visited[n]) {
                    visited[n] = true
                    queue.push(n)
                }
            }
        }

        return results
    }
}

let g = new Graph()
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')

g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('B', 'D')
g.addEdge('C', 'E')
g.addEdge('D', 'E')
g.addEdge('D', 'F')
g.addEdge('E', 'F')

log(g.dfsRecursive('A'))
//log(g.dfsIterative('A'))
