import sys
import math
sys.path.append('C:/Users/User/Desktop/Algorithm Mastery/Data Structures/Python_JS - Data Structures/Priority Queue/AJs')

import priority_queue

class WeightedGraph:
    def __init__(self):
        self.adjacency_list = {}

    def addVertex(self, name):
        # adds an unconnected node
        if (name in self.adjacency_list) is False: self.adjacency_list[name] = []
    
    def addEdge(self, vertex1, vertex2, weight):
        if ((vertex1 in self.adjacency_list) is False) | ((vertex2 in self.adjacency_list) is False): return False
        self.adjacency_list[vertex1].append({"node":vertex2, "weight":weight})
        self.adjacency_list[vertex2].append({"node":vertex1, "weight":weight})

    def __str__(self):
        return str(self.__class__) + ": " + str(self.__dict__)

    def Dijkstra(self, start, finish):
        distances = {} # map to store distances of start to other nodes
        path = [] # used to cummulate our shortest path results
        previous = {} # map to store the shortest connected node
        queue = priority_queue.PriorityQueue() # priority queue to store nodes along with priority weights
        smallest = None # node will start with

        for vertex in self.adjacency_list:
            if vertex == start:
                distances[vertex] = 0
                queue.insert(vertex, 0)
            else:
                distances[vertex] = math.inf
                queue.insert(vertex, math.inf)
            previous[vertex] = None

        while len(queue.values) > 0:
            smallest = queue.extract_min().val
            if smallest == finish:
                # COLLATE RESULTS
                while previous[smallest]:
                    path.insert(len(path), smallest)
                    smallest = previous[smallest]
                break
            
            if (smallest is not None) | distances[smallest] != math.inf:
                # for every vertice connected to our guy
                for i, vertex in enumerate(self.adjacency_list[smallest]):
                    
                    candidate = distances[smallest] + vertex["weight"]
                    nodeValue = vertex["node"]
                    if candidate < distances[nodeValue]:
                        distances[nodeValue] = candidate
                        previous[nodeValue] = smallest
                        queue.insert(nodeValue, candidate)

        path.append(smallest)
        return path
        return list(reversed(path))






g = WeightedGraph()
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')

g.addEdge("A","B", 4);
g.addEdge("A","C", 2);
g.addEdge("B","E", 3);
g.addEdge("C","D", 2);
g.addEdge("C","F", 4);
g.addEdge("D","E", 3);
g.addEdge("D","F", 1);
g.addEdge("E","F", 1);

print(g.Dijkstra("A", "F"))