# Hoare partition = Left most element is the pivot element
# Lemuto partition = Right most element is the pivot element

def swap(a, b, arr):
    if a != b:
        # arr[a], arr[b] = arr[b], arr[a]
        temp = arr[a]
        arr[a] = arr[b]
        arr[b] = temp


def partition(elements, start, end):
    pivot_index = start
    pivot = elements[pivot_index]

    while start < end:
        while start < len(elements) and elements[start] <= pivot:
            start += 1

        while elements[end] > pivot:
            end -= 1

        if start < end:
            swap(start, end, elements)

    swap(pivot_index, end, elements)

    return end

def quick_sort(array, start, end):
    if start < end:
        partition_index = partition(array, start, end)
        quick_sort(elements, start, partition_index - 1)  # left partition
        quick_sort(elements, partition_index + 1, end)  # right partition


elements = [11, 9, 29, 7, 2, 15, 28]
quick_sort(elements, 0, len(elements) - 1)
print(elements)