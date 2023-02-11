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
      if (current.value === newNode.value) return undefined;
      if (current.value > newNode.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        } else {
          current = current.left;
        }
      }

      if (current.value < newNode.value) {
        if (!current.right) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
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
}
