import ctypes

#  * Methods:
#  * - isEmpty()
#  * - size()
#  * - add()
#  * - get()
#  * - set()
#  * - clear()
#  * - removeAt()
#  * - remove()
#  * - indexOf()
#  * - contains()
#  * - iterator()
#  * - toString()
#  */


class DynamicArray(object):
    def __str__(self):
        return str(self.__class__) + ": " + str(self.__dict__)

    def __init__(self, capacity:int=0):
        if capacity==0: capacity=16
        self.capacity = capacity
        self.length=0
        self.array = self._initialize_(self.capacity)
    
    def _initialize_(self, capacity:int):
        return [ctypes.py_object * capacity]

    def is_empty(self):
        return self.capacity == 0

    def size(self):
        return self.capacity

    def print(self):
        to_return = "["
        return (self.array[0])
        for i in range(len(self.array)):
            if(self.array[i] is None): continue
            print(self.array, i)
            to_return += self.array[i]
            to_return.join(", ")
        to_return.join(self.array[len(self.array)-1]).join("]")
        return to_return
    
    
    def add(self, value):
        if(self.len+1 >= self.capacity):
            if self.capacity == 0: self.capacity==1
            new_array = ((2*self.capacity) * py_object)()
            for el, i in enumerate(self.array):
                new_array[i] = el
            self.array = new_array
        self.array[len] = value
        self.length+=1    
        self.capacity = self.length

    



s = DynamicArray(2)
s.print()
# print(s)

    
