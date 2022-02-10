export default function HeapSort() {
  return (
    <div>{`def left(i):
    '''compute indices of left child with input i being the index of the parent'''
    return 2*i
def right(i):
    '''compute indices of right child with input i being the index of the parent'''
    return (2*i) + 1
    
    def heapify(heap, i):
    
    """
    Inputs:
    - heap: a list of floats. Assume that the heap size is the length of the heap.
    
    No output is needed. This function should modify (if necessary) heap in-place.
    """
    global left
    global right
    # calling the above functions was not working
    left, right = 2*i,(2*i) + 1
    
    # comapare the left node to the parent node. if it's larger, make it the largest index 
    if (left <= len(heap)-1) and (heap[left] > heap[i]):
        largest = left
    else:
        # otherwise the largest is till the parent
        largest = i
    # if the right number is larger than the parent, switch them
    if (right <= len(heap)-1) and (heap[right] > heap[largest]):
        largest = right
    # if the index of the largest number is not the parent node, switch the  index of either left or right with the parent
    if (largest != i):
        heap[i], heap[largest] = heap[largest], heap[i]

A = [39, 85, 85, 16, 49, 7, 49, 92, 76, 15, 21, 30, 29, 31, 28]
heapify(A,0)
assert(A == [85, 49, 85, 16, 39, 7, 49, 92, 76, 15, 21, 30, 29, 31, 28])

B = [16, 4, 10, 14, 7, 9, 3, 2, 8, 1]
heapify(B, 1)
assert(B == [16, 14, 10, 8, 7, 9, 3, 2, 4, 1])`}</div>
  );
}
