# With no collections library we can implement the queue as a list

def bfs(graph, root):
    # Step 1: Create an empty set to hold visited values
    visited = set()
    queue = [root]

    while queue:
        vertex = queue.pop(0)
        visited.add(vertex)
        for item in graph[vertex]:
            if item not in visited:
                queue.append(item)
    print(visited)


if __name__ == "__main__":
    # Dictionary to represent graph
    # This dictionary shows links between circles (see excalidraw for picture)
    graph = {0: [1, 2, 3], 1: [0, 2], 2: [0, 1, 4], 3: [0], 4: [2]}
    bfs(graph, 0)