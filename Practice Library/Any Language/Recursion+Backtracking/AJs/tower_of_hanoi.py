def tower_of_hanoi(disks, source, dest, aux):
    # move n-1 to the aux, 
    # move nth to dest
    # move n-1 to dest
    if(disks==1):
        print(f'Move disk {disks} from {source} to {dest}')
    else:
        tower_of_hanoi(disks-1, source, aux, dest)
        print(f'move disk {disks} from {source} to {dest}')
        tower_of_hanoi(disks-1, aux, dest, source)
    return


tower_of_hanoi(3, 'Tower A', 'Tower B', 'Tower C')






#  recurrence relation proof