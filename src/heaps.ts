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

    let currentIndex = 0;

    while (currentIndex < this.values.length - 1) {
      const leftIndex = currentIndex * 2 + 1;
      const rightIndex = currentIndex * 2 + 2;

      if (this.values[leftIndex] > this.values[rightIndex]) {
        if (this.values[currentIndex] < this.values[leftIndex]) {
          const leftValue = this.values[leftIndex];
          this.values[leftIndex] = this.values[currentIndex];
          this.values[currentIndex] = leftValue;
        }
        currentIndex = leftIndex;
      } else {
        if (this.values[currentIndex] < this.values[rightIndex]) {
          const rightValue = this.values[rightIndex];
          this.values[rightIndex] = this.values[currentIndex];
          this.values[currentIndex] = rightValue;
        }
        currentIndex = rightIndex;
      }
    }

    return this.values;
  }
}
