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

# Mine
# def max_ones(array: list):
#     # loop over the array
#     # if the value is a 1
#     # start a second while loop that updates the maxcount
#     max_count = 0
#     for i, v in enumerate(array):
#         if v==1:
#             j=i
#             temp = 1
#             while(j<len(array)-1):
#                 if array[j+1]==1:
#                     temp+=1
#                     max_count = max(temp, max_count)
#                 else: j=len(array)
#                 j+=1
    
#     print(max_count)
#     return max_count

            




print(max_ones([0,1,1,0,1,1,1,1,0,0]))
    
        

