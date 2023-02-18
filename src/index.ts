import { PriorityQueue } from './priority-queue';

const queue = new PriorityQueue();

queue.enqueue('감기', 3);
queue.enqueue('머리 총 맞은 사람', 13);
queue.enqueue('지우한테 맞기', 1);
queue.enqueue('우미한테 맞기', 30);
queue.dequeue();

console.log(queue.values);
