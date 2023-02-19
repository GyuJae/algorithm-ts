interface IBinarySearchTreeNode {
  value: number;
  left: IBinarySearchTreeNode | null;
  right: IBinarySearchTreeNode | null;
}

interface IBinarySearchTree {
  root: IBinarySearchTreeNode | null;
}

class BinarySearchTreeNode implements IBinarySearchTreeNode {
  left: IBinarySearchTreeNode | null;
  right: IBinarySearchTreeNode | null;

  constructor(public value: number) {
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree implements IBinarySearchTree {
  root: IBinarySearchTreeNode | null;

  constructor() {
    this.root = null;
  }

  insert(value: number) {
    const newNode = new BinarySearchTreeNode(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (true) {
      if (current.value === newNode.value) return;
      if (current.value > newNode.value) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = newNode;
          return this;
        }
      }

      if (current.value < newNode.value) {
        if (current.right) {
          current = current.right;
        } else {
          current.right = newNode;
          return this;
        }
      }
    }
  }

  exist(value: number) {
    if (!this.root) return false;

    let current = this.root;

    while (true) {
      if (current.value === value) return true;
      if (current.value < value) {
        if (!current.right) return false;
        current = current.right;
      }

      if (current.value > value) {
        if (!current.left) return false;
        current = current.left;
      }
    }
  }

  BFS() {
    let node: IBinarySearchTreeNode | null | undefined = this.root;
    const data = [],
      queue = [];

    queue.push(node);

    while (queue.length > 0) {
      node = queue.shift();
      data.push(node?.value);
      if (node?.left) queue.push(node.left);
      if (node?.right) queue.push(node.right);
    }

    return data;
  }

  DFSPreOrder() {
    const visited: number[] = [];
    const node: IBinarySearchTreeNode | null | undefined = this.root;

    const traverse = (newNode: IBinarySearchTreeNode) => {
      visited.push(newNode.value);
      if (newNode.left) traverse(newNode.left);
      if (newNode.right) traverse(newNode.right);
    };

    if (node) traverse(node);

    return visited;
  }

  DFSPostOrder() {
    const visited: number[] = [];
    const node: IBinarySearchTreeNode | null | undefined = this.root;

    const traverse = (newNode: IBinarySearchTreeNode) => {
      if (newNode.left) traverse(newNode.left);
      if (newNode.right) traverse(newNode.right);
      visited.push(newNode.value);
    };

    if (node) traverse(node);

    return visited;
  }

  DFSInOrder() {
    const visited: number[] = [];
    const node: IBinarySearchTreeNode | null | undefined = this.root;

    const traverse = (newNode: IBinarySearchTreeNode) => {
      if (newNode.left) traverse(newNode.left);
      visited.push(newNode.value);
      if (newNode.right) traverse(newNode.right);
    };

    if (node) traverse(node);

    return visited;
  }
}
