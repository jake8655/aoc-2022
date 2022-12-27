const input = await Deno.readTextFile("./input.prod");

const output = input
  .split("\n\n")
  .map((group) => group.split("\n"))
  .map((group) => group.map((num) => +num))
  .map((group) => group.reduce((a, b) => a + b, 0))
  .sort((a, b) => a - b)
  .splice(-3)
  .reduce((a, b) => a + b, 0);

console.log(output);
