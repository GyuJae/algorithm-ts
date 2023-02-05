import { DoublyLinkedList } from './doubly-linked-list';

const linkedList = new DoublyLinkedList();
linkedList.pop();

linkedList.push('zero');
linkedList.push('first');
linkedList.push('second');
linkedList.push('third');
console.log(linkedList.remove(2));
console.log(linkedList.get(1));
console.log(linkedList.get(2));
console.log(linkedList);
