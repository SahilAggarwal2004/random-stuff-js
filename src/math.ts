const probability = (p: number): boolean => !!p && Math.random() <= p

const minimumNumber = (array: number[]): number => Math.min(...array)

const maximumNumber = (array: number[]): number => Math.max(...array)

export { probability, minimumNumber, maximumNumber }