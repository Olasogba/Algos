# first in, first out -> push, shift
class Node:
    def __init__(self,value):
        self.value = value
        self.next = None
        
    def __repr__(self):
        return "Node()"

    def __str__(self):
        return str(self.__class__) + ": " + str(self.__dict__)
    
class Queue:
    def __init__(self):
        self.first = None
        self.last = None
        self.size = 0

    def __str__(self):
        return str(self.__class__) + ": " + str(self.__dict__)
    
    def dequeue(self): #shift
        if self.first is None: return None
        old_first = self.first
        if self.size == 1:
            self.first == None
            self.last = None
        else:
            self.first = self.first.next
        self.size-=1
        return old_first
    
    def enqueue(self, value): #push
        node = Node(value)
        if self.size == 0:
            self.first = node
            self.last = node
        self.last.next = node
        self.last = node
        self.size += 1
        return self
    
    def print(self):
        current = self.first
        while current:
            print(current.value)
            current = current.next
        print('Size is:', self.size)
        

queue = Queue()
queue.enqueue('1')
queue.enqueue('2')
queue.enqueue('3')
queue.enqueue('4')
queue.enqueue('5')
queue.print()
print()
queue.dequeue()
queue.print()