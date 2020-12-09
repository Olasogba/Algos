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
