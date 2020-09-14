log = (val) => console.log(val)

class MaxBinaryHeap {
    constructor() {
        this.values = []
    }

    insert(value) {
        // You add to the end of the values array, and bubble up by swapping
        this.values.push(value)
        let index = this.values.length - 1
        let v = this.values[index]

        const bubble = () => {
            let parentIndex = Math.floor((index-1)/2)
            let val = this.values[index]
            let parentVal = this.values[parentIndex]
            if (v == 100) {
                console.log(index, parentIndex)
                console.log(val, parentVal, this.values)
                console.log()
            }

            if(this.values[parentIndex] < this.values[index]) {
                [this.values[parentIndex], this.values[index]] = [this.values[index], this.values[parentIndex]]
                index = parentIndex
                bubble()
            }
        }

        bubble()
        return this
    }

    extractMax() {
        const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]]
        
        swap(this.values, 0, this.values.length-1)        
        const poppedValue = this.values.pop()

        let parentIndex = 0

        const sinkDown = () => {
            let currentValue = this.values[parentIndex]
            let leftChildIndex = 2*(parentIndex+1)
            let rightChildIndex = 2*(parentIndex+2)
            let leftChildValue = !!this.values[leftChildIndex] && this.values[leftChildIndex]
            let rightChildValue = !!this.values[rightChildIndex] && this.values[rightChildIndex]

            if(leftChildValue < currentValue && rightChildValue < currentValue) return

            if(leftChildValue > currentValue && rightChildValue > currentValue) {
                const max = Math.max(leftChildValue, rightChildValue)
                if(max == leftChildValue) {
                    swap(this.values, parentIndex, leftChildIndex)
                    parentIndex = leftChildIndex
                } else if(max == rightChildValue) {
                    swap(this.values, parentIndex, rightChildIndex)
                    parentIndex = rightChildIndex
                }
            } else if(leftChildValue > currentValue) {
                swap(this.values, leftChildIndex, parentIndex)
                parentIndex = leftChildIndex
            } else if(rightChildValue > currentValue) {
                swap(this.values, rightChildIndex, parentIndex)
                parentIndex = rightChildIndex
            }
            sinkDown()
        }

        sinkDown()
        return poppedValue
    }
}

let heap = new MaxBinaryHeap();
heap.insert(12);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(41);
heap.insert(100);
//log(heap.extractMax())
log(heap)
