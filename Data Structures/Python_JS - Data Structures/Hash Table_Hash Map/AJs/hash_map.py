# utilizes an array
# hash values of keys are form an index that is then used to register the values in the array.
# => values => [], value => []
# collisions are handled by pushing values into the same spot (called seperate chaining)
# functions -> hash, get set, keys, values
# hashing formula -> total = (total * prime_no + charCode) - 96

class HashMap:
    def __init__(self, size = None):
        if size is None:
            size = 5
        self.size = size
        self.values = [None] * size

    def __str__(self):
        return str(self.__class__) + ": " + str(self.__dict__)
    
    def _hash(self, key):
        return key % self.size

    def get(self, key):
        _key = self._hash(key)
        if(self.values[_key] is None): return None

        for i, el in enumerate(self.values[_key]):
            if el[0] == key: return el[1]

    def insert(self, key, value):
        _hash = self._hash(key)
        to_insert = [key, value]
        if self.values[_hash] is None:
            self.values[_hash] = []
        for i, el in enumerate(self.values[_hash]):
            if el[0] == key:
                el[1]=value
                return

        self.values[_hash].append(to_insert)

    def keys(self):
        results = []
        for i, el in enumerate(self.values):
            if el:
                for el2 in el:
                    if results.__contains__(el2[0]) is False:
                        results.append(el2[0])
        return results

    def vals(self):
        results = []
        for i, el in enumerate(self.values):
            if el:
                for el2 in el:
                    if results.__contains__(el2[1]) is False:
                        results.append(el2[1])
        return results

hm = HashMap()
hm.insert(1,2)
hm.insert(2,3)
hm.insert(45, "shola")
print(hm.get(1))
print(hm)
print(hm.keys())
print(hm.vals())

