// Simple wrapper around Math.random
export function getRandom(min:number, max:number) {
  return min + Math.random() * (max - min);
}