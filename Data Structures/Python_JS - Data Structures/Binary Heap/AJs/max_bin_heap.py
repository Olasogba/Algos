# implemented using a list
# all child nodes are lesser in value than parent nodes
# values get push into the array and are immediately bubbled up to their correct place
# for every element at index n, its potential parent node is at the (n-1/2)th place in the array
class MaxBinaryHeap:
    def __init__(self):
        self.values = []
    
    def insert(self, node):
        self.values.insert(len(self.values), node)
        idx = len(self.values)-1
        v = self.values[idx]
    
        def bubble_up():
            nonlocal idx    
            parentIdx = (idx-1)//2
            val = self.values[idx]
            parentVal = self.values[parentIdx]
            if (parentVal < val) & (idx > 0):
                self.values[idx] = parentVal
                self.values[parentIdx] = val

                idx = parentIdx
                bubble_up()
        
        bubble_up()
        return self

    def insertIterative(self, node):
        self.values.insert(len(self.values), node)
        idx = len(self.values)-1
        self.bubble_up()

    def bubble_up(self):
        idx = len(self.values)-1
        while idx > 0:
            parentIdx = (idx-1)//2
            val = self.values[idx]
            parentVal = self.values[parentIdx]
            if(val > parentVal):
                self.values[idx] = parentVal
                self.values[parentIdx] = val
                idx = parentIdx
            else:
                break

        return self

    def extractMax(self):
        max = self.values[0]
        tail = self.values.pop()
        self.values[0] = tail
        self.sink_down()
        return max
    

    def sink_down(self):
        length = len(self.values)
        index = 0
        element = self.values[index]

        while(True):
            left_index = (2*index)+1
            right_index = (2*index)+2
            to_swap = None
            if left_index < length:
                if self.values[left_index] > element:
                    to_swap = left_index
            
            if right_index < length:
                if ((to_swap == None) & (self.values[right_index] > element)) | ((to_swap != None) & (self.values[right_index] > self.values[left_index])):
                    to_swap = right_index
            
            if to_swap == None: break
            # SWAP HERE
            self.values[index], self.values[to_swap] = self.values[to_swap], self.values[index]

            index = to_swap
        
        return self






heap = MaxBinaryHeap()
heap.insertIterative(12);
heap.insertIterative(39);
heap.insertIterative(33);
heap.insertIterative(18);
heap.insertIterative(27);
heap.insertIterative(41);
heap.insertIterative(100);
print(heap.extractMax())
print(heap.values)
print(heap.extractMax())
print(heap.values)