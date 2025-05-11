function processData(input: any) {
  // 1. `any` type (TypeScript error)
  var result = []; // 2. `var` usage (ESLint: no-var)

  if (input == null) {
    // 3. Loose equality (ESLint: eqeqeq)
    console.log("Null input!"); // 4. `console.log` (ESLint: no-console)
    return;
  }

  for (let i = 0; i < input.length; i++) {
    // 5. `i` redefined (ESLint: no-redeclare)
    result.push(input[i] * 2);
  }

  let unusedVar = 42; // 6. Unused variable (ESLint: no-unused-vars)
  return result;
}

processData([1, 2, 3]);
