package linkedlist

import (
	"errors"
	"fmt"
)

type node struct {
	data int
	next *node
}

// get set pop, shift, removeAt, reverse
type linkedList struct {
	head   *node
	tail   *node
	length int
}

// attaching prepend to the linkedList type (method receiving), n is the node parameter
func (l *linkedList) prepend(val int) {
	node := &node{data: val}
	if l.length == 0 {
		l.tail = node
		l.head = node
	} else {
		node.next = l.head
		l.head = node
	}
	l.length++
}

func (l linkedList) printListData() {
	toPrint := l.head
	for toPrint != nil {
		fmt.Printf("%d ", toPrint.data)
		toPrint = toPrint.next
	}
	fmt.Print("\n")
}

func (l *linkedList) append(val int) {
	node := &node{data: val}
	if l.length == 0 {
		l.head = node
		l.tail = node
	} else {
		l.tail.next = node
		l.tail = node
	}
	l.length++
}

func (l *linkedList) shift() *node {
	if l.length == 0 {
		return nil
	}
	current := l.head
	if l.length == 1 {
		l.head = nil
		l.tail = nil
	} else {
		l.head = l.head.next
	}

	l.length--
	return current
}

func (l *linkedList) pop() *node {
	if l.length == 0 {
		return nil
	}
	current := l.head
	toReturn := current
	if l.length == 1 {
		l.head = nil
		l.tail = nil
	} else {
		for current.next.next != nil {
			current = current.next
		}
		l.tail = current
		toReturn = current.next
		current.next = nil
	}

	l.length--
	return toReturn
}

func (l *linkedList) deleteAt(value int) (*node, error) {
	// get the prev and next's next
	if l.length == 0 {
		return nil, errors.New("list is empty")
	}
	if value == 0 {
		return l.shift(), nil
	}
	if value == l.length-1 {
		return l.pop(), nil
	}

	count := 0
	current := l.head
	for count < value-1 {
		current = current.next
		count++
	}
	toDelete := current.next
	current.next = current.next.next

	return toDelete, nil
}

func (l *linkedList) contains(value int) bool {
	current := l.head
	for current != nil {
		if current.data == value {
			return true
		}
		current = current.next
	}

	return false
}

func (l *linkedList) reverse() {
	// swap and reverse
	var current = l.head
	l.head = l.tail
	l.tail = current

	var prev *node = nil

	for current != nil {
		next := current.next
		current.next = prev
		prev = current
		current = next
	}
}

func main() {
	myList := linkedList{}
	myList.append(0)
	myList.append(1)
	myList.append(2)
	myList.append(3)
	myList.append(4)
	myList.printListData()
	myList.pop()
	myList.printListData()
	myList.shift()
	myList.printListData()
	myList.append(7)
	myList.deleteAt(1)
	myList.printListData()
	fmt.Print(myList.contains(71))
	fmt.Print("\n")
	myList.reverse()
	myList.printListData()
}
