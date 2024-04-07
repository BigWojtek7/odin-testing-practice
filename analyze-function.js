export default function analyzeArray(array) {
  const object = {
    arr: array,
    get average() {
      return this.arr.reduce((p, c) => p + c, 0) / this.arr.length;
    },
    get min() {
      return Math.min(...this.arr);
    },
    get max() {
      return Math.max(...this.arr);
    },
    get length() {
      return this.arr.length;
    },
  };
  return object;
}
