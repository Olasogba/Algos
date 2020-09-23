# last in, first out -> push, pop would be more time for pop, so shift, unshift
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None
    
    def __repr__(self):
        return self.__str__()
        return "Node()"

    def __str__(self):
        return str(self.__class__) + ": " + str(self.__dict__)

class Stack:
    def __init__(self):
        self.first = None
        self.last = None
        self.size = 0

    def get(self, index: int):
        if index > (self.size-1): return -1
        count = 0
        current = self.first
        while count<index:
            current = current.next
            count+=1
        return current.value

    def __str__(self):
       return str(self.__class__) + ": " + str(self.__dict__)
    
    def push(self, value): # adds to the beginning
        node = Node(value)
        if self.first is None:
            self.first = node
            self.last = node
        else:
            node.next = self.first
            self.first = node
        self.size+=1
        return self

    def pop(self): # removes from the beginning
        if self.size == 0: return None
        first = self.first
        if self.size == 1:
            self.first = None
            self.last = None
        else:
            self.first = self.first.next
        self.size-=1
        return first.value

    def print(self):
        current = self.first
        while current:
            print(current.value)
            current = current.next
        print('Size is:', self.size)
stack = Stack()
stack.push('1')
stack.push('2')
stack.push('3')
stack.push('4')
stack.push('5')
        