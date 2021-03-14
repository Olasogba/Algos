'''
Finding the length of connected cells of 1s (regions) in a matrix of 0s and 1s:
Given a matrix, each of which may be 1 or 0. The filled cells that are connected
form a region. Two cells are said to be connected if they are adjacent to each other
horizontally, vertically or diagonall. There may be several regions in the matrix.
How do you find the larfest region (in terms of number of cells) in the matrix?

Sample input:
11000
01100
00101
10001
01011

Sample output: 5


'''
def isValid(row, col, length, height):
    return (row<0 or row>=length or col<0 or col>= height or cntarr[row][col] == 1) is False

def getVal(matrix, row, col, length, height):
    if(row<0 or row>=length or col<0 or col>= height):
        return 0
    else: return matrix[row][col]

def findMaxBlock(matrix, row, col, length, height, sizeFound):
    global maxSize
    global cntarr
    global stopper
    if(row>=length or col>=height or stopper > 1000):
        return
    cntarr[row][col]=1

    sizeFound+=1 #updating the sizeFound found
    if(sizeFound>maxSize): #updating the maxSize
        maxSize = sizeFound
    
    # search in eight directions
    direction = [[-1,0],[-1,-1],[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1]]
    for i in range(0,7):
        newi = row+direction[i][0]
        newj = col+direction[i][1]
        # val = getVal(matrix, newi, newj, length, height)
        if(isValid(newi, newj, length, height)): # if val is not 0 (connected) and newi and newj have not been checked
            findMaxBlock(matrix, newi, newj, length, height, sizeFound)
        
    cntarr[row][col]=0 # resetting the grid element to allow for other checkers?
    stopper+=1


def getMaxOnes(matrix, rmax, colmax): # goes over each element and invokes findMaxBlock
    global maxSize
    global sizeFound
    global cntaar
    for i in range(0, rmax):
        for j in range(0, colmax):
            # if(matrix[i][j]==1):
            findMaxBlock(matrix, i,j, rmax, colmax, 0)
    return maxSize

# zarr= [[1,1,0,0,0],[0,1,1,0,0],[0,0,1,0,1],[1,0,0,0,1],[0,1,0,1,1]]
rmax = 6
colmax = 8
maxSize = 0
sizeFound = 0
stopper = 0
cntarr = rmax*[colmax*[0]] # creates a 2d array of 5 rows and 5 cols containing 0s each

print('Number of maximum 1s are: ')
# print(getMaxOnes(zarr, rmax, colmax))

input =[ [ 1, 4, 4, 4, 4, 3, 3, 1 ],
						[ 2, 1, 1, 4, 3, 3, 1, 1 ],
						[ 3, 2, 1, 1, 2, 3, 2, 1 ],
						[ 3, 3, 2, 1, 2, 2, 2, 2 ],
						[ 3, 1, 3, 1, 1, 4, 4, 4 ],
						[ 1, 1, 3, 1, 1, 4, 4, 4 ] ];
print(getMaxOnes(input,rmax,colmax))