package main

import (
	"fmt"
)

/*
	Given an array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.

	Return the indices of the two numbers (1-indexed) as an integer array answer of size 2, where 1 <= answer[0] < answer[1] <= numbers.length.

	The tests are generated such that there is exactly one solution. You may not use the same element twice.
*/

func main() {
	fmt.Println(solve2([]int{2, 7, 11, 15}, 9))
	fmt.Println(solve2([]int{2, 3, 4}, 6))
}

func solve(str string) string {
	ans := ""
	for i := len(str) - 1; i >= 0; i-- {
		ans += (string(str[i]))
	}

	return ans
}

func solve2(ls []int, targ int) []int {
	// map => {target-value: index}
	// map => {difference: index}
	store := make(map[int]int)
	for i, v := range ls {
		if _, ok := store[v]; ok {
			//do something here
			return []int{i + 1, store[v] + 1}
		} else {
			store[targ-v] = i
		}
	}

	return []int{}

}
