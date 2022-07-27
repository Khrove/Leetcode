def bfs(graph, root, target):
    visited = set()
    queue = [root]
    # Stores the predecessor of every node visited
    predecessorNodes = {}

    # While the queue is not empty
    while queue:
        # Take the first value and pop it from the queue, set that as your vertex
        vertex = queue.pop()
        # Add the vertex to your "visited" set
        visited.add(vertex)
        # For each item in the vertex list
        for item in graph[vertex]:
            if item not in visited:
                queue.append(item)
                # When we visit a new item we add it to the predecessor set
                predecessorNodes[item] = vertex
    print(predecessorNodes)
    print(shortestPath(predecessorNodes, root, target))


def shortestPath(predecessorNodes, startNode, endNode):
    # Path is initialized with the end node
    path = [endNode]
    # We initialize the current node to end node
    currentNode = endNode
    # This loop will run until we trace a path back through the graph to the start
    while currentNode != startNode:
        currentNode = predecessorNodes[currentNode]
        print(currentNode)
        path.append(currentNode)
    path.reverse()
    return path


if __name__ == "__main__":
    # Dictionary to represent graph
    # This dictionary shows links between circles (see excalidraw for picture)
    graph = {
            0: [3, 9, 5],
            1: [4, 6, 7],
            2: [5, 10],
            3: [0],
            4: [1, 8],
            5: [0, 2, 4],
            6: [1],
            7: [1],
            8: [4],
            9: [0],
            10: [2],
        }
    bfs(graph, 0, 6)