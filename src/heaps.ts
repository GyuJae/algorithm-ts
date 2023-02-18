// * For any index of an array n...
// * The left child is stored a 2n + 1
// * The right child is as 2n + 2

// * For any child node at index n...
// * Its parent is at index (n-1)/2 -> floor;

export class MaxBinaryHeap {
  values: number[];

  constructor() {
    this.values = [];
  }

  insert(value: number) {
    if (this.values.includes(value)) return this.values;
    if (this.values.length === 0) return this.values.push(value);

    this.values.push(value);
    let currentIndex = this.values.length - 1;

    while (currentIndex !== 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);

      if (this.values[parentIndex] > this.values[currentIndex]) break;

      const parentValue = this.values[parentIndex];
      this.values[parentIndex] = this.values[currentIndex];
      this.values[currentIndex] = parentValue;

      currentIndex = parentIndex;
    }

    return this.values;
  }

  extractMax() {
    this.values[0] = this.values[this.values.length - 1];
    this.values.pop();

    let currentIdx = 0;

    while (currentIdx < this.values.length - 1) {
      const leftIdx = currentIdx * 2 + 1;
      const rightIdx = currentIdx * 2 + 2;

      if (this.values[leftIdx] > this.values[rightIdx]) {
        if (this.values[currentIdx] < this.values[leftIdx]) {
          const leftValue = this.values[leftIdx];
          this.values[leftIdx] = this.values[currentIdx];
          this.values[currentIdx] = leftValue;
        }
        currentIdx = leftIdx;
      } else {
        if (this.values[currentIdx] < this.values[rightIdx]) {
          const rightValue = this.values[rightIdx];
          this.values[rightIdx] = this.values[currentIdx];
          this.values[currentIdx] = rightValue;
        }
        currentIdx = rightIdx;
      }
    }

    return this.values;
  }
}
