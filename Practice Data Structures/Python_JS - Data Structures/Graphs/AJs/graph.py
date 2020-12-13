# addVertex, addEdge, removeVertex, removeEdge
class Graph:
    def __init__(self):
        self.adjacencyList = {}
    
    def __str__(self):
        return str(self.__class__) + ": " + str(self.__dict__)
    
    def addVertex(self, name):
        # adds an unconnected node
        if (name in self.adjacencyList) is False: self.adjacencyList[name] = []
    
    def addEdge(self, vertex1, vertex2):
        if ((vertex1 in self.adjacencyList) is False) | ((vertex2 in self.adjacencyList) is False): return False
        self.adjacencyList[vertex1].append(vertex2)
        self.adjacencyList[vertex2].append(vertex1)
    
    def removeVertex(self, vertex):
        # to remove a vertex you pop out every connection it has
        # and then remove the edge between them
        node = self.adjacencyList[vertex]
        if node is None: return None
        while len(node) > 0:
            removed = node.pop()
            self.removeEdge(removed, vertex)
        self.adjacencyList.pop(vertex)
    
    def removeEdge(self, vertex1, vertex2):
        if (vertex1 in self.adjacencyList):
            self.adjacencyList[vertex1] = list(filter(lambda item: item != vertex2, self.adjacencyList[vertex1]))
        if (vertex2 in self.adjacencyList):
            self.adjacencyList[vertex2] = list(filter(lambda item: item != vertex1, self.adjacencyList[vertex2]))

    def dfsIterative(self, vertex):
        # we're picking a node
        # if we haven't visited that node before
        # we add it as visited
        # we pick all its connections, and repeat the above operation
        state = []
        result = []
        visited = {}
        state.insert(len(state), vertex)
        while len(state) > 0:
            node = state.pop()
            if visited.__contains__(node) is False:
                visited[node] = True
                result.insert(len(result), node)
                for vertx in self.adjacencyList[node]:
                    state.insert(len(state), vertx)
            
        return result

    def dfsRecursive(self, vertex, result=[], visited={}):
        if (vertex in self.adjacencyList) is False: return None
        result.insert(len(result), vertex)
        visited[vertex] = True
        for vertx in self.adjacencyList[vertex]:
            if (vertx in visited) is False:
                self.dfsRecursive(vertx, result, visited)
        return result

g = Graph()
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

print(g.adjacencyList)
print()
print(g.dfsRecursive('A'))
print(g.dfsIterative('A'))


            
