def TowersOfHanoi(numberOfDisks, startPeg=1, endPeg=3):
    if numberOfDisks:
        TowersOfHanoi(numberOfDisks-1, startPeg, 6-startPeg-endPeg)
        print('Move disk {} from peg {} to peg {}'.format(numberOfDisks, startPeg, endPeg))
        TowersOfHanoi(numberOfDisks-1, 6-startPeg-endPeg, endPeg)

TowersOfHanoi(6)