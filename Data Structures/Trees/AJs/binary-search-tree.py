# insert, dfs, bfs, find, contains
import sys
sys.path.append('C:/Users/User/Desktop/Algorithm Mastery/Data Structures/Stacks and Queues/AJs')
import my_queue
print(my_queue.Queue())

class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
    
    def __repr__(self):
        # return self.__str__()
        return "Node()"

    def __str__(self):
        return str(self.__class__) + ": " + str(self.__dict__)

class BinarySearchTree:
    def __init__(self):
        self.root = None
    
    def __repr__(self):
        return "BinarySearchTree()"

    def __str__(self):
        return str(self.__class__) + ": " + str(self.__dict__)
    
    def insertRecursive(self, value):
        node = Node(value)
        if self.root is None:
            self.root = node
            return self
        def inserter(parent: Node, child: Node):
            if parent.value == child.value: return None
            if child.value > parent.value:
                if parent.right:
                    return inserter(parent.right, child)
                else:
                    parent.right = child
            if child.value < parent.value:
                if parent.left:
                    return inserter(parent.left, child)
                else:
                    parent.left = child
            return self
        
        return inserter(self.root, node)

    def insertIterative(self, value):
        node = Node(value)
        if self.root is None:
            self.root = node
            return self
        else:
            current = self.root
            while True:
                if current.value == node.value: return None
                current = current.right if (node.value > current.value) else current.left
                if current is None:
                    current = node
                    break
        return self

    def contains(self, value):
        if self.root is None:
            return False
        else:
            current = self.root
            while True:
                if current.value == value: return True
                current = current.right if (value > current.value) else current.left
                if current is None:
                    break
        return False

    def find(self, value):
        if self.root is None: return None
        else:
            current = self.root
            while True:
                if current.value == value: return current
                current = current.left if (value < current.value) else current.right
                if current == None:
                    return None

    #def bfs(self):
        # traverses the tree, touching each node only once
        # create a queue to store our elements to traverse (push + shift)
        # create a results array to store traversed nodes
        # put the first node in the queue
        # start a loop that continue as long as there are nodes left in the queue to traverse
        # pop the queue
        # add the element to the results array
        # if there is a left element, add it to the queue
        # same for the right
        # return the results after the loop
        #queue = 
        #return None

                    



bst = BinarySearchTree()
(bst.insertIterative(10))
(bst.insertRecursive(6))
bst.insertRecursive(15)
bst.insertRecursive(3)
bst.insertRecursive(20)
(bst.insertRecursive(8))
print(bst.find(100))
