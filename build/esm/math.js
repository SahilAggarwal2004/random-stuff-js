const probability = (p) => !!p && Math.random() <= p;
const minimumNumber = (array) => Math.min(...array);
const maximumNumber = (array) => Math.max(...array);
export { probability, minimumNumber, maximumNumber };
