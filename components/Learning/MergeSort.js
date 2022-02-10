export default function MergeSort() {
  return (
    <div>{`def merge(array,start,end1,last):
    global steps;
    
    #sentinals + array creation through slicing
    arr1 = array[start:end1+1] 
    arr2 = array[end1+1:last+1] 
    
    # add sentinals
    arr1.append(float('inf'))
    arr2.append(float('inf'))

    index_1, index_2 = 0, 0

    for i in range(start,last+1):
        steps += 1
        #check min value to compare. merge lowest
        minValue = min((arr1[index_1],arr2[index_2]))
        if (minValue == arr1[index_1]):
            array[i] = arr1[index_1]
            index_1 += 1
            steps += 1
        else:
            array[i] = arr2[index_2]
            index_2 += 1
            steps += 1
    return array`}</div>
  );
}
