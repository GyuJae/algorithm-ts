import { BinarySearchTree } from './binary-search-tree';

const tree = new BinarySearchTree();

console.log(tree.insert(3));
console.log(tree.insert(4));
console.log(tree.insert(5));
console.log(tree.insert(2));
console.log(tree.insert(1));
console.log(tree.insert(10));

console.log(tree.exist(18));
console.log(tree.exist(1));
console.log(tree.exist(10));
console.log(tree.exist(7));
console.log(tree.exist(6));
console.log(tree.exist(5));
console.log(tree.exist(15));
