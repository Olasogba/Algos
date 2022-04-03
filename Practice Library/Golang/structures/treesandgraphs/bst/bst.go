package main

import "fmt"

// Node
// Insert
// Search

type Node struct {
	Key   int
	Left  *Node
	Right *Node
}

func (n *Node) Insert(k int) {
	if n.Key < k {
		if n.Right == nil {
			n.Right = &Node{Key: k}
		} else {
			n.Right.Insert(k)
		}
	} else if n.Key > k {
		if n.Left == nil {
			n.Left = &Node{Key: k}
		} else {
			n.Left.Insert(k)
		}
	}
}

// Search will take in a key value
// and return true if there is a node with that value
func (n *Node) Search(k int) bool {
	if n == nil {
		return false
	}
	if n.Key < k {
		return n.Right.Search(k)
	} else if n.Key > k {
		return n.Left.Search(k)
	}

	return true
}

func (n *Node) bfs() {
	var queue = []*Node{}
	queue = append(queue, n)
	for len(queue) > 0 {
		var n = queue[len(queue)-1]
		queue = queue[:len(queue)-1]
		fmt.Println(n.Key)
		if n.Right != nil {
			queue = append(queue, n.Right)
		}
		if n.Left != nil {
			queue = append(queue, n.Left)
		}
	}
}

func (n *Node) dfsPreOrder(node *Node) {
	fmt.Println(node.Key)
	if node.Left != nil {
		node.dfsPreOrder(node.Left)
	}
	if node.Right != nil {
		node.dfsPreOrder(node.Right)
	}
}

func main() {
	var tree = &Node{Key: 100}
	tree.Insert(50)
	tree.Insert(20)
	tree.Insert(30)
	tree.Insert(40)
	tree.Insert(60)
	fmt.Println(tree.Search(80))
	tree.bfs()
	fmt.Println()
	tree.dfsPreOrder(tree)
}
