# insert, dfs, bfs, find, contains
import sys
sys.path.append('C:/Users/User/Desktop/Algorithm Mastery/Data Structures/Stacks and Queues/AJs')


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

    def bfs(self):
        # if there is no root, return None
        # create a queue and a results variable
        # enqueue the root
        # start a loop for as long as anything is in the queue
        # dequeue the queue and store the item in the list
        # if the item has a right property, enqueue it
        # if the item has a left property, enqueue it
        if self.root is None: return None
        queue = []
        results = []
        root = self.root
        queue.insert(len(queue), root)
        while len(queue) > 0:
            node = queue.pop(0)
            results.insert(len(results), node.value)
            if node.left:
                queue.insert(len(queue), node.left)
            if node.right:
                queue.insert(len(queue), node.right)
        return results 

    def dfsPreOrder(self):
        # searches down the depth of a node. left, then right
        if self.root is None: return None
        results = []
        def search(node: Node):
            results.insert(len(results), node.value)
            if(node.left): search(node.left)
            if(node.right): search(node.right)

        search(self.root)
        return results

    def dfsPostOrder(self):
        # searches down the depth of a node. left, then right
        if self.root is None: return None
        results = []
        def search(node: Node):
            if(node.left): search(node.left)
            if(node.right): search(node.right)
            results.insert(len(results), node.value)

        search(self.root)
        return results
    
    def dfsInOrder(self):
        # searches down the depth of a node. left, then right
        if self.root is None: return None
        results = []
        def search(node: Node):
            if(node.left): search(node.left)
            results.insert(len(results), node.value)
            if(node.right): search(node.right)

        search(self.root)
        return results
    
    def invert(self, root:Node):
        if root:
            root.left, root.right = self.invert(root.right), self.invert(root.left)
            return root
    
    def invertIterative(self):
        stack = [self.root]
        while(stack):
            node = stack.pop()
            if node:
                node.left, node.right = node.right, node.left
                stack+=node.left, node.right
        return self.root 

    def sameTree(self, root1: Node, root2: Node):
        if root1==None and root2==None: return True
        if root1!=None:
            if root2==None: return False
        if root2!=None:
            if root1==None: return False
        
        print(root1.value, root2.value)
        same = self.sameTree
        return (root1.value==root2.value) & (same(root1.left, root2.left)) & (same(root1.right, root2.right))

    def maximum_depth(self, root: Node):
        if root==None: return 0
        left = self.maximum_depth(root.left)
        right = self.maximum_depth(root.right)
        return max(left, right)+1 # 1 is for the root
                    



bst = BinarySearchTree()
bst.insertIterative(10)
bst.insertRecursive(6)
bst.insertRecursive(15)
bst.insertRecursive(3)
bst.insertRecursive(20)
bst.insertRecursive(8)


bst2 = BinarySearchTree()
bst2.insertIterative(10)
bst2.insertRecursive(6)
bst2.insertRecursive(15)
bst2.insertRecursive(3)
bst2.insertRecursive(20)
bst2.insertRecursive(8)

print(bst2.maximum_depth(bst2.root))
