import { MaxBinaryHeap } from './heaps';

const heaps = new MaxBinaryHeap();

heaps.insert(41);
heaps.insert(39);
heaps.insert(33);
heaps.insert(18);
heaps.insert(27);
heaps.insert(12);

heaps.extractMax();

console.log(heaps);
