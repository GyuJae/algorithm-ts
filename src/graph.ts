type AdjacencyList = Record<string, string[]>;

export class Graph {
  adjacencyList: AdjacencyList;

  constructor() {
    this.adjacencyList = {};
  }

  addVertex(value: string) {
    if (this.adjacencyList[value]) return;
    this.adjacencyList[value] = [];
  }

  addEdge(v1: string, v2: string) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return;

    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1: string, v2: string) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return;
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(
      (item) => item !== v2
    );
  }

  removeVertex(vertex: string) {
    if (!this.adjacencyList[vertex]) return;

    while (this.adjacencyList[vertex].length > 0) {
      const adjacencyVertex = this.adjacencyList[vertex].pop()!;
      this.removeEdge(vertex, adjacencyVertex);
    }

    delete this.adjacencyList[vertex];
  }

  depthFirstRecursive(vertex: string) {
    if (!this.adjacencyList[vertex]) return;

    const result: string[] = [];
    const visited: Record<string, boolean> = {};

    result.push(vertex);
    visited[vertex] = true;

    const helper = (newVertex: string) => {
      for (const edge of this.adjacencyList[newVertex]) {
        if (visited[edge]) continue;
        result.push(edge);
        visited[edge] = true;
        helper(edge);
      }
    };

    helper(vertex);

    return result;
  }

  depthFirstIterative(startVertex: string) {
    const result: string[] = [];
    const stack = [startVertex];
    const visited: Record<string, boolean> = {};

    while (stack.length !== 0) {
      const vertex = stack.pop()!;

      if (visited[vertex]) continue;

      visited[vertex] = true;
      result.push(vertex);

      this.adjacencyList[vertex].forEach((item) => {
        if (!visited[item]) stack.push(item);
      });
    }

    return result;
  }

  breadthFirst(startVertex: string) {
    const queue = [startVertex];
    const result: string[] = [];
    const visited: Record<string, boolean> = {};
    visited[startVertex] = true;

    while (queue.length > 0) {
      const vertex = queue.shift()!;
      result.push(vertex);

      this.adjacencyList[vertex].forEach((item) => {
        if (!visited[item]) {
          visited[item] = true;
          queue.push(item);
        }
      });
    }

    return result;
  }
}
