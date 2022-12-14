const input = await Deno.readTextFile("./input.prod");

const pairs = input.split("\n").map((line) => line.split(","));
pairs.pop();

let overlap = 0;

for (const pair of pairs) {
  const rangeA = pair[0].split("-").map((n) => +n);
  const rangeB = pair[1].split("-").map((n) => +n);

  const hasOverlap = rangeA[0] <= rangeB[1] && rangeB[0] <= rangeA[1];
  if (hasOverlap) overlap++;
}

console.log(overlap);
