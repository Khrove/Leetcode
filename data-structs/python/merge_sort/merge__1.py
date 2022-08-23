def merge_sort(array):
    if len(array) > 1:
        # creates a left side array that begins at index 0 and goes until the length of the array divided by 2
        # double slash (//) means round result to nearest integer
        left_arr = array[:len(array)//2]
        # creates a right side array that begins at the length of the array divided by 2 and goes until the end
        right_arr = array[len(array)//2:]

        # recursion process
        merge_sort(left_arr)
        merge_sort(right_arr)

        # merge step
        i = 0 # left arr index
        j = 0 # right arr index
        k = 0 # merged arr index

        while i < len(left_arr) and j < len(right_arr):
            if left_arr[i] < right_arr[j]:
                array[k] = left_arr[i]
                i += 1
            else:
                array[k] = right_arr[j]
                j += 1
            k += 1

        while i < len(left_arr):
            array[k] = left_arr[i]
            i += 1
            k += 1

        while j < len(right_arr):
            array[k] = right_arr[j]
            j += 1
            k += 1


arr_test = [2, 3, 5, 1, 7, 4, 4, 4, 2, 6, 0]
print(merge_sort(arr_test))
print(arr_test)