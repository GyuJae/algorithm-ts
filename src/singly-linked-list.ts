interface INodeItem {
  val: string;
  next: INodeItem | null;
}

class NodeItem implements INodeItem {
  next: INodeItem | null;

  constructor(public value: string) {
    this.next = null;
  }
}

class SinglyLinkedList {
  head: INodeItem | null;
  tail: INodeItem | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }

  push(value: string) {
    const newNode = new NodeItem(value);

    if (this.head) {
      this.tail!.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }

    this.length += 1;

    return newNode;
  }

  pop() {
    if (!this.head) return;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return null;
    const current = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return current;
  }

  unshift(value: string) {
    const newNode = new NodeItem(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
      return newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return newNode;
  }

  get(targetIndex: number) {
    if (targetIndex < 0 || this.length <= targetIndex) {
      return null;
    }

    let counter = 0;
    let current = this.head;

    while (counter !== targetIndex) {
      current = current!.next;
      counter++;
    }

    return current;
  }

  set(value: string, index: number) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = value;
      return true;
    }

    return false;
  }

  insert(value: string, index: number) {
    if (index < 0 || this.length < index) return false;

    if (index === this.length) {
      this.push(value);
      return true;
    }

    if (index === 0) {
      this.unshift(value);
      return true;
    }
    const newNode = new NodeItem(value);
    const previousNode = this.get(index - 1);
    const nextNode = this.get(index);

    previousNode!.next = newNode;
    newNode.next = nextNode;
    this.length++;

    return true;
  }

  remove(index: number) {
    if (index < 0 || this.length <= index) return false;

    if (index === this.length - 1) {
      this.pop();
      return true;
    }

    if (index === 0) {
      this.shift();
      return true;
    }

    const previousNode = this.get(index - 1);
    const nextNode = this.get(index + 1);

    previousNode!.next = nextNode;
    this.length--;
    return true;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let previous = null;
    for (let index = 0; index < this.length; index++) {
      next = node!.next;
      node!.next = previous;
      previous = node;
      node = next;
    }

    return this;
  }
}
