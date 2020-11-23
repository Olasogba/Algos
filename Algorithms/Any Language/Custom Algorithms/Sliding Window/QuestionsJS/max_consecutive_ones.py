'''
Given a binary array, find the maximum number of consecutive 1s in this array
'''

def max_ones(array):
    # iterate over the array
    # if the current element is 1
    # start a second loop that runs for as long as the current element is 1
    # increment the counter in this second loop
    # after the loop, record the highest variable
    counter = 0
    i = 0

    while i < len(array):
        el = array[i]
        if el == 1:
            inner_counter = 1
            j = i+1
            while (j<len(array)) & (array[j]==1):
                inner_counter+=1
                j+=1
            counter = max(counter, inner_counter)
            i=j        
        i+=1
    return counter

            




print(max_ones([0,1,1,0,1,1,1,1,0,0]))
    
        

