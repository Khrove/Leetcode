# Implementing BFS
import collections


def bfs(graph, root):
    visited = set()
    queue = collections.deque([root])

    while queue:
        # This will dequeue the left most variable in the set
        vertex = queue.popleft()
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
