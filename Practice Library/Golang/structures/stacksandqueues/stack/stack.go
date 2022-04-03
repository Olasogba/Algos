package main

import "fmt"

// isEmpty, shift, unshift, peek
type Stack struct {
	items []int
}

// push
func (s *Stack) push(i int) {
	s.items = append(s.items, i)
}

func (s *Stack) pop() int {
	l := len(s.items) - 1
	toRemove := s.items[l]
	s.items = s.items[:l]

	return toRemove
}

func main() {
	myStack := Stack{}
	fmt.Println(myStack)
	myStack.push(10)
	myStack.push(20)
	myStack.push(30)
	fmt.Println(myStack)
	myStack.pop()
	fmt.Println(myStack)
}
