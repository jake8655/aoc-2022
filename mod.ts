const input = await Deno.readTextFile("input.prod");

const output = input
  .split("\n")
  .join("-")
  .split("--")
  .map((line) => line.split("-"))
  .map((line) => line.map((number) => +number))
  .map((line) => line.filter((number) => number))
  .map((line) => line.reduce((a, b) => a + b, 0))
  .sort((a, b) => a - b)
  .at(-1);

console.log(output);
