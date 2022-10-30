declare const randomNumber: (min?: number, max?: number) => number;
declare const minimumNumber: (array: number[]) => number;
declare const maximumNumber: (array: number[]) => number;
declare const randomElement: (array: any[]) => any;
declare const randomAdjective: () => string;
declare const randomAnimal: () => string;
declare const randomName: (separator?: string) => string;
declare function generateOTP(digits?: number): string;
export { randomNumber, minimumNumber, maximumNumber, randomElement, randomAdjective, randomAnimal, randomName, generateOTP };
