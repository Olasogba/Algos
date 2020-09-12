class Node:
    def __init__(self, value):
        self.info = value
        self.link = None

class SinglyLinkedList:
    def __init__(self):
        self.start = None
        self.end = None
        self.size = 0
    
    def display_list(self):
        if self.start is None:
            print("List is empty")
            return
        else:
            print("List is: ")
            p = self.start
            while p is not None:
                print(p.info, " ", end='')
                p = p.link
            print()

    def count_nodes(self):
        p = self.start
        n = 0
        while p is not None:
            n+=1
            p=p.link
        print("Number of nodes in the list =", n)

    def push(self, value):
        #make a new node
        #if there's no start, make this new node the start and the end
        # return self
        #else get to the end
        #set its next to the new node
        #make the next the new tail
        node = Node(value)
        if self.start is None:
            self.start = node
            self.end = node
        else:
            self.end.link = node
            self.end = node
        self.size+=1
        return self

    def get(self, index):
        # start from the current
        # loop over, setting the current to be the link each time
        # until the current becomes None
        if self.start is None: return None
        count = 0
        current = self.start
        while(current.link):
            if count == index:
                return current
            count+=1
            current = current.link
        return current







l_list = SinglyLinkedList()
l_list.push('Value1')
l_list.display_list()
l_list.count_nodes()
