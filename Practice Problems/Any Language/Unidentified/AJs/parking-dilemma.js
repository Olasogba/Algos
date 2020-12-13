/**
 * There are many cars parked in the parking lot. 
 * The parking is a straight very long line and a parking slot for every single 
 * meter. There are cars parked currently and you want to cover them from the rain 
 * by building a roof. The requirement is that at least k cars are covered by the 
 * roof.What's the minium length of the roof that would cover k cars?
 
    The function has the following parameters:
    - cars: integer array of length denoting the parking slots where cars are parked
    - k: integer denoting the number of cars that have to be covered by the roof
 */


/**
 * 
 * class Solution:
    """
    @param cars:  integer array of length denoting the parking slots where cars are parked
    @param k: integer denoting the number of cars that have to be covered by the roof
    @return: return the minium length of the roof that would cover k cars
    """
    def ParkingDilemma(self, cars, k):
        # write your code here
        cars.sort()
        n = len(cars)
        res = float('inf')
        for i in range(n-k+1):
            res = min(res, cars[i+k-1] - cars[i])
        return res+1
 */

    function dilemma(list, k) {
        // at least three cars
        // sort the array of indexes first
        // [2,6,7,12]
        // find the smallest of the k diffs 
        // loop over and get the first window
        // start a second loop, adjust the pointers, and compare
    
        min = Infinity
        list = list.sort((a,b) => a-b) 
        
        for (let i=0; i<list.length-k+1; i++) {
        min = Math.min(min, list[i+k-1] - list[i])
        }
    
        return min
    }

    
    function dilemma_mine(list, k) {
        // at least three cars
        // sort the array of indexes first
        // [2,6,7,12]
        // find the smallest of the k diffs 
        // loop over and get the first window
        // start a second loop, adjust the pointers, and compare
    
        min = Infinity
        list = list.sort((a,b) => a-b)
        min = list[k-1]-list[0]
        temp = min
        
        for (let i=k; i<list.length; i++) {
            temp = list[i]-list[i-k+1]
            min = Math.min(temp, min)
        }
    
        return min
    }
 
 
 console.log(dilemma([6,2,12,7], 3)) // 5
 console.log(dilemma([6,2,12,7], 2)) // 1
 console.log(dilemma([6,2,12,7,4,3,5], 3)) // 2
