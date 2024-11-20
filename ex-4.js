/**Write a recursive function to get all possible subsets of length 3 of the given
 array. Assume that all elements in the array are unique.
      Input                                                 Output

       [4]                                                   [4]
     [19, 6]                                               [19, 6]
 [5, 9, 23, 0, -2, -1]                 [[5, 9, 23], [5, 9, 0], [5, 9, -2], [5, 9, -1],
                                        [5, 23, 0], [5, 23, -2], [5, 23, -1], [5, 0, -2],
                                        [5, 0, -1], [5, -2, -1], [9, 23, 0], [9, 23, -2],
                                        [9, 23, -1], [9, 0, -2], [9, 0, -1], [9, -2, -1],
                                        [23, 0, -2], [23, 0, -1], [23, -2, -1], [0, -2, -1]]
 */
function allPossibleSubsets(arr, i = 0, j = i + 1, k = j + 1, newArr = []) {
    if (arr.length <= 3) {
        return newArr.concat([arr])
    } else if (j === arr.length - 1) {
        return allPossibleSubsets(arr.slice(1), i, j = i + 1, k = j + 1, newArr)
    } else if (k === arr.length) {
        return allPossibleSubsets(arr, i, j + 1, k = j + 2, newArr)
    }

    newArr.push([arr[i], arr[j], arr[k]])
    return allPossibleSubsets(arr, i, j, k + 1, newArr)

}

console.log(allPossibleSubsets([]))
console.log(allPossibleSubsets([19, 6]))
console.log(allPossibleSubsets([4]))
console.log(allPossibleSubsets([5, 9, 23, 0, -2, -1]))
