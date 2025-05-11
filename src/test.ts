function processData(input: number[]): number[] {
  // 1. Replaced `any` with specific type
  const result: number[] = []; // 2. Replaced `var` with `const`

  if (input == null) {
    console.log("Null input!");
    return result;
  }

  for (let i = 0; i < input.length; i++) {
    result.push(input[i] * 2);
  }

  // Removed unused variable
  return result;
}

processData([1, 2, 3]);
