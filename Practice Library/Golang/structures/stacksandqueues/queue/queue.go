package main

import "fmt"

type Queue struct {
	items []int
}


func (q *Queue) Enqueue(i int) {
	q.items = append(q.items, i)
}


// Dequeue
func (q *Queue) Dequeue() int  {
	toRemove := q.items[0]
	q.items = q.items[1:]
	return toRemove
}


func main() {
	var q = Queue{}
	fmt.Println(q)
	q.Enqueue(10)
	q.Enqueue(20)
	q.Enqueue(30)
	fmt.Println(q)
	q.Dequeue()
	fmt.Println(q)
	q.Enqueue(40)
	fmt.Println(q)
}