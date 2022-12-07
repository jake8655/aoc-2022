const input = await Deno.readTextFile("input.prod");

let output = input
  .split("\n")
  .join("-")
  .split("--")
  .map((line) => line.split("-"))
  .map((line) => line.map((number) => +number))
  .map((line) => line.filter((number) => number))
  .map((line) => line.reduce((a, b) => a + b, 0))
  .sort((a, b) => a - b)
  .reverse();

output.length = 3;

output = output.reduce((a, b) => a + b, 0);

console.log(output);
