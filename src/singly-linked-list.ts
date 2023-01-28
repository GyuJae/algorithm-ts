interface INodeItem {
  val: string;
  next: INodeItem | null;
}

class NodeItem implements INodeItem {
  next: INodeItem | null;

  constructor(public val: string) {
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

  push(val: string) {
    const newNode = new NodeItem(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }

    this.length += 1;

    return newNode;
  }

  pop() {
    if (!this.head) return undefined;
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
    let current = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return current;
  }

  unshift(val: string) {
    const newNode = new NodeItem(val);
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

  get(targetIdx: number) {
    if (targetIdx < 0 || this.length <= targetIdx) {
      return null;
    }

    let counter = 0;
    let current = this.head;

    while (counter !== targetIdx) {
      current = current!.next;
      counter++;
    }

    return current;
  }

  set(val: string, index: number) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }

    return false;
  }

  insert(val: string, index: number) {
    if (index < 0 || this.length < index) return false;

    if (index === this.length) {
      this.push(val);
      return true;
    }

    if (index === 0) {
      this.unshift(val);
      return true;
    }
    const newNode = new NodeItem(val);
    const prevNode = this.get(index - 1);
    const nextNode = this.get(index);

    prevNode!.next = newNode;
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

    const prevNode = this.get(index - 1);
    const nextNode = this.get(index + 1);

    prevNode!.next = nextNode;
    this.length--;
    return true;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node!.next;
      node!.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }
}
