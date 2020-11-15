#pop, push, get, set, insert, remove, reverse, print, shift, unshift
class Node:
    def __init__(self, value):
        self.prev = None
        self.next = None
        self.value = value

    def __repr__(self): #"node()"
        return "Node()"
        #return self.__str__()

    def __str__(self):
        return str(self.__class__) + ": " + str(self.__dict__)

class DoublyLinkedList:
    def __init__(self):
        self.head: Node = None
        self.tail: Node = None
        self.size = 0
    
    def __str__(self):
        return str(self.__class__) + ": " + str(self.__dict__)
    
    def print(self):
        current = self.head
        while current:
            print(current.value)
            current = current.next
        print('Size:', self.size)

    def push(self, value):
        node = Node(value)

        if self.size == 0:
            self.head = node
            self.tail = node
        else:
            node.prev = self.tail
            self.tail.next = node
            self.tail = node
        self.size += 1

        return self
            

    def pop(self):
        if self.size == 0: return None
        old_tail = self.tail
        if self.size == 1:
            self.head = None
            self.tail = None
        else:
            current_prev = old_tail.prev
            current_prev.next = None
            self.tail = current_prev
        old_tail.prev = None
        self.size -= 1
        return old_tail

    def get(self, index):
        counter = 0
        current = self.head
        while current:
            if counter == index:
                return current
            counter+=1
            current = current.next
        return None

    def shift(self):
        if self.size == 0: return None
        old_head = self.head
        if(self.size == 1):
            self.head = None
            self.tail = None
        else:
            second_node = old_head.next
            second_node.prev = None
            self.head = second_node

        self.size -= 1
        return old_head.value
    
    def unshift(self, value):
        node = Node(value)
        if self.size == 0:
            self.head = node
            self.tail = node
        else:
            old_head = self.head
            old_head.prev = node
            node.next = old_head
            self.head = node
        self.size+=1
        return self
    
    def setValue(self, index, value):
        node = self.get(index)
        if node:
            node.value = value
            return True
        else:
            return False
    
    def insert(self, index, value):
        node = Node(value)
        if index < 0 or index > self.size: return False
        if index == 0: return (self.unshift(value) is not None)
        if index == self.size: return (self.push(value) is not None)

        prev = self.get(index-1)
        old_next = prev.next
        node.prev = prev
        node.next = old_next
        prev.next = node
        old_next.prev = node

        self.size+=1
        return True
    
    def remove(self, index):
        if index < 0 or index >= self.size: return None
        if index == 0: return (self.shift() is not None)
        if index == self.size-1: return (self.pop() is not None)

        current = self.get(index)
        current.prev.next = current.next
        current.next.prev = current.prev

        self.size -= 1
        return True

    def reverse(self):
        if(self.size<=1):return True
        current = self.head
        temp = None

        # swap next and prev for all nodes
        while current is not None:
            temp = current.prev
            current.prev = current.next
            current.next = temp
            current = current.prev
        
        self.head = temp.prev


    

dll = DoublyLinkedList()
dll.push('Michael')
dll.push('Blessed')
dll.push('Akin')
dll.push('Olasogba')
dll.print()
print()
dll.insert(2, 'John')
dll.print()
print(dll.get(3).prev)

