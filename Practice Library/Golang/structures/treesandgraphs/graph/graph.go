package main

import (
	"fmt"
)

// The graph object keeps a list of vertexes. Each vertex keeps a list of its connected vertices
// Methods; addEdge, removeEdge, addVertex, removeVertex, contains, getVertex

// Graphs structure
// Vertex structure

// Add vertex
// Add Edge

// Graph represents an adjacency list graph
type Graph struct {
	vertices []*Vertex
}

// Vertex represents a graph vertex
type Vertex struct {
	key      int
	adjacent []*Vertex
}

func (g *Graph) AddVertex(k int) {
	if contains(g.vertices, k) {
		err := fmt.Errorf("Vertex %v not added because it is an existing key", k)
		fmt.Println(err.Error())
	} else {

		g.vertices = append(g.vertices, &Vertex{key: k})
	}
}

func contains(s []*Vertex, k int) bool {
	for _, v := range s {
		if v.key == k {
			return true
		}
	}
	return false
}

func (g *Graph) Print() {
	for _, v := range g.vertices {
		fmt.Printf("\nVertex %v : ", v.key)
		for _, v := range v.adjacent {
			fmt.Printf(" %v ", v.key)
		}
	}
}

func (g *Graph) AddEdge(from, to int) {
	// get vertex
	fromVertex := g.getVertex(from)
	toVertex := g.getVertex(to)

	//check error: throw if any is nill
	if fromVertex == nil || toVertex == nil {
		err := fmt.Errorf("invalid edge (%v -> %v)", from, to)
		fmt.Println(err.Error())
	} else if contains(fromVertex.adjacent, to) {
		err := fmt.Errorf("edge already exists (%v -> %v)", from, to)
		fmt.Println(err.Error())
	} else {
		// add edge
		fromVertex.adjacent = append(fromVertex.adjacent, toVertex)
		toVertex.adjacent = append(toVertex.adjacent, fromVertex)
	}

}

func (g *Graph) getVertex(k int) *Vertex {
	for i, v := range g.vertices {
		if v.key == k {
			return g.vertices[i]
		}
	}
	return nil
}

func (g *Graph) DfsRecursive() {
	dfsRecursive(g.vertices[7], []int{}, make(map[*Vertex]bool))
}

func dfsRecursive(v *Vertex, results []int, visited map[*Vertex]bool) []int {
	results = append(results, v.key)
	visited[v] = true
	fmt.Println(v.key)
	for _, x := range v.adjacent {
		if !visited[x] {
			dfsRecursive(x, results, visited)
		}
	}

	return results
}

func (g *Graph) Bfs(start *Vertex) {
	queue := []*Vertex{}
	visited := make(map[*Vertex]bool)
	visited[start] = true
	queue = append(queue, start)

	for len(queue) > 0 {
		vertex := queue[len(queue)-1]
		queue = queue[:len(queue)-1]
		fmt.Println(vertex.key)
		for _, v := range vertex.adjacent {
			if !visited[v] {
				visited[v] = true
				queue = append(queue, v)
			}
		}
	}
}

func main() {
	test := &Graph{}

	for i := 0; i < 10; i++ {
		test.AddVertex(i)
	}
	test.AddEdge(0, 1)
	test.AddEdge(0, 3)
	test.AddEdge(2, 3)
	test.AddEdge(2, 1)
	test.AddEdge(2, 4)
	test.AddEdge(6, 7)
	test.AddEdge(8, 9)
	test.AddEdge(9, 1)
	test.AddEdge(5, 4)
	test.AddEdge(9, 7)

	test.DfsRecursive()
	fmt.Println()
	test.Bfs(test.vertices[0])

	test.Print()
}
