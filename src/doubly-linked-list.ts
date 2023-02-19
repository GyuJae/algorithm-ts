interface IDoublyNode {
  value: string;
  next: IDoublyNode | null;
  prev: IDoublyNode | null;
}

interface IDoublyLinkedList {
  head: IDoublyNode | null;
  tail: IDoublyNode | null;
  length: number;
}

class DoublyNode implements IDoublyNode {
  next: IDoublyNode | null;
  prev: IDoublyNode | null;

  constructor(public value: string) {
    this.next = null;
    this.prev = null;
  }
}

export class DoublyLinkedList implements IDoublyLinkedList {
  head: IDoublyNode | null;
  tail: IDoublyNode | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value: string) {
    const newNode = new DoublyNode(value);

    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return newNode;
  }

  pop() {
    const poppedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return poppedNode;
    }

    if (!this.head || !this.tail || !this.tail.prev || !poppedNode) return;

    this.tail.prev.next = null;
    this.tail = this.tail.prev;
    this.length--;
    poppedNode.prev = null;
    return poppedNode;
  }

  shift() {
    const shiftedNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return shiftedNode;
    }

    if (!this.head || !this.head.next || !shiftedNode) return;

    this.head.next.prev = null;
    this.head = this.head.next;
    shiftedNode.next = null;
    this.length--;

    return shiftedNode;
  }

  unshift(value: string) {
    if (this.length === 0 || !this.head || !this.tail) {
      return this.push(value);
    }

    const newNode = new DoublyNode(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;

    return newNode;
  }

  get(index: number) {
    if (index < 0 || index >= this.length) return;

    if (index <= this.length / 2) {
      let counter = 0;
      let current = this.head;
      while (index !== counter && current) {
        counter++;
        current = current.next;
      }

      return current;
    } else {
      let counter = this.length - 1;
      let current = this.tail;
      while (index !== counter && current) {
        counter--;
        current = current.prev;
      }

      return current;
    }
  }

  set(index: number, value: string) {
    const targetNode = this.get(index);
    if (!targetNode) return false;
    targetNode.value = value;

    return true;
  }

  insert(index: number, value: string) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      this.unshift(value);
      return true;
    }
    if (index === this.length) {
      this.push(value);
      return true;
    }

    const newNode = new DoublyNode(value);
    const beforeNode = this.get(index - 1)!;
    const afterNode = beforeNode.next!;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    beforeNode.next = newNode;
    afterNode.prev = newNode;
    this.length++;
    return true;
  }

  remove(index: number) {
    if (index < 0 || index >= this.length) return;

    if (index === 0) return this.shift();

    if (index === this.length - 1) return this.pop();

    const removedNode = this.get(index)!;

    const beforeNode = removedNode.prev!;
    const afterNode = removedNode.next!;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }
}
