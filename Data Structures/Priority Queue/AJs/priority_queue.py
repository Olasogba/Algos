# priority queue -> min binary heap
# insert, extract_min
class Node:
    def __init__(self, value, priority):
        self.val = value
        self.priority = priority

class PriorityQueue:
    def __init__(self):
        self.values = []

    def insert(self, value, priority):
        node = Node(value, priority)
        self.values.insert(len(self.values), node)
        self.bubble_up()

    def bubble_up(self):
        index = len(self.values)-1
        parent_index = (index-1)//2
        while(index > 0):
            if self.values[parent_index].priority <= self.values[index].priority: break

            self.values[parent_index], self.values[index] = self.values[index], self.values[parent_index]
            index = parent_index

    def extract_min(self):
        # save min to return
        # pop end and set it at index 0
        # sink it down
        # return min
        minm = self.values[0]
        end = self.values.pop()
        self.values[0] = end
        self.sink_down()
        return minm
    
    def sink_down(self):
        length = len(self.values)-1
        index = 0
        node = self.values[index]

        while True:
            to_swap = None
            left_index = (index*2)+1
            right_index = (index*2)+2
            if(left_index < length):
                if self.values[left_index].priority < node.priority:
                    to_swap = left_index
            
            if right_index < length:
                if ((to_swap == None) & (self.values[right_index].priority < node.priority)) | ((to_swap != None) & ((self.values[right_index].priority) < (self.values[left_index].priority))):
                    to_swap = right_index
            
            if to_swap == None: break

            self.values[index], self.values[to_swap] = self.values[to_swap], self.values[index]
            index = to_swap

    def print(self):
        res = []
        for i in range(len(self.values)):
            res.insert(len(res), self.values[i].priority)
        print(res)        

                



heap = PriorityQueue()
heap.insert(1,100);
heap.insert(2,12);
heap.insert(3,39);
heap.insert(4,33);
heap.insert(5,18);
heap.insert(6,27);
heap.insert(7,41);
heap.insert(8,42);
heap.print()
print()
print(heap.extract_min().priority)
heap.print()
        
