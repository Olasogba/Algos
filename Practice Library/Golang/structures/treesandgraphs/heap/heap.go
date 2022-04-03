package main

import (
	"errors"
	"fmt"
)

// extractMin, insert, isEmpty, bubbleUp, sinkDown
type Heap struct {
	items []int
}

func (h *Heap) ExtractMin() (int, error) {
	// error if heap is empty
	// extract and empty if heap is 1
	// swap and sinkDown
	if len(h.items) == 0 {
		return 0, errors.New("heap is empty")
	}
	var val = h.items[0]
	if len(h.items) == 1 {
		h.items = []int{}
	} else {
		var last = h.items[len(h.items)-1]
		h.items[len(h.items)-1] = 0
		h.items = h.items[:len(h.items)-1]
		h.items[0] = last
		h.sinkDown(0)
	}

	return val, nil
}

func (h *Heap) Insert(val int) {
	h.items = append(h.items, val)
	if len(h.items) > 0 {
		h.bubbleUp(len(h.items) - 1)
	}
}

func (h *Heap) IsEmpty() bool {
	return cap(h.items) == 0
}

func (h *Heap) bubbleUp(index int) {
	var parent = (index - 1) / 2
	for parent >= 0 && h.items[parent] > h.items[index] {
		// swap
		temp := h.items[parent]
		h.items[parent] = h.items[index]
		h.items[index] = temp

		index = parent
		parent = (index - 1) / 2
	}
}

func (h *Heap) sinkDown(index int) {
	for {
		var left = index*2 + 1
		var right = index*2 + 2

		var smallest = left
		if right < len(h.items) && h.items[right] < h.items[left] {
			smallest = right
		}

		if smallest >= len(h.items) || h.items[smallest] > h.items[index] {
			break
		}

		temp := h.items[smallest]
		h.items[smallest] = h.items[index]
		h.items[index] = temp

		index = smallest
	}
}

func main() {
	var h = Heap{}
	h.Insert(2)
	h.Insert(1)
	h.Insert(3)
	h.Insert(4)
	h.Insert(-1)

	fmt.Println(h.ExtractMin())
	fmt.Println(h.ExtractMin())
	fmt.Println(h.ExtractMin())
	fmt.Println(h.ExtractMin())
	fmt.Println(h.ExtractMin())
}
