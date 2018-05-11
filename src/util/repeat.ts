// Generate an array by calling a function X times
export function repeat<T>(func:(i:number) => T, num:number):T[] {
  let results:T[] = [];
  if (num <= 0) return results;
  for (let i = 0; i < num; i++) {
    results.push(func(i));
  }
  return results;
}