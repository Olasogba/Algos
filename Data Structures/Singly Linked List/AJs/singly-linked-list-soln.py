class Node:
    def __init__(self, value):
        self.info = value
        self.next = None
    
    def __repr__(self):
        return "Node()"

    def __str__(self):
        return str(self.__class__) + ": " + str(self.__dict__)

class SinglyLinkedList:
    def __init__(self):
        self.start = None
        self.end = None
        self.size = 0

    def print(self):
        current = self.start
        while current is not None:
            print(current.info)
            current = current.next
        self.count_nodes()
    
    def __str__(self):
        return str(self.__class__) + ": " + str(self.__dict__)
    
    def count_nodes(self):
        print("Number of nodes in the list =", self.size)

    def push(self, value):
        node = Node(value)
        if self.start is None:
            self.start = node
            self.end = node
        else:
            self.end.next = node
            self.end = node
        self.size+=1
        return self

    def pop(self):
        # if no head return None
        # if one head, set head and tail to None
        # else loop till the second to the last
        # set it's next to be None
        # make it the new end
        # decrement size and return the value of the old tail

        if self.start is None:
            return None
        if self.size==1:
            self.start=None
            self.end=None
        else:
            current = self.start
            prev=None
            while current.next:
                prev = current
                current = current.next # this is the last
            prev.next = None
            self.end = prev
            self.size-=1
            return current.info




    def get(self, index):
        if self.start is None: return None
        count = 0
        current = self.start
        while(current is not None):
            if count == index:
                return current
            count+=1
            current = current.next
        return None
    
    def setValue(self, key, value):
        node = self.get(key)
        if node is not None:
            node.info = value
            return True
        else:
            return False

    def shift(self): # remove the first element
        if self.start is None: return None
        oldHead = self.start
        if self.size == 1:
            self.start = None
            self.end = None
        else:
            self.start = self.start.next
        
        self.size -= 1
        return oldHead.info
    
    def unshift(self, value): # adds a new value at the beginning of the list
        node = Node(value)
        if(self.start is None):
            self.start = node
            self.end = node
        else:
            node.next = self.start
            self.start = node
        self.size+=1
        return self
        

    def insert(self, index, value):
        if index > self.size or index < 0:
            return False
        if index == self.size:
            return (self.push(value) is not None)
        if  index == 0:
            return (self.unshift(value) is not None)
        
        node = Node(value)

        prevNode = self.get(index-1)
        currNext = prevNode.next
        if prevNode is not None:
            node.next = currNext
            prevNode.next = node

        self.size+=1
        return True
    
    def remove(self, index):
        if self.size == 0: return None
        if index < 0 or index >= self.size:
            return None
        if index == 0: return (self.shift() is not None)
        if index == self.size-1: return (self.pop() is not None)

        previous = self.get(index-1)
        removed = previous.next
        newNext = removed.next
        previous.next = newNext

        self.size -= 1
        return removed

    def reverse(self):
        #  swap the head and tail
        current = self.start
        self.start = self.end
        self.end = current

        _next = None
        prev = None

        while(current != None):
            _next = current.next
            current.next = prev
            prev = current
            current = _next
        
        return self






l_list = SinglyLinkedList()
(l_list.push('Mike'))
(l_list.push('Blessed'))
(l_list.push('John'))
(l_list.push('Akin'))

l_list.print()
print()
l_list.reverse()
l_list.print()


