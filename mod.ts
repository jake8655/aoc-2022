const input = await Deno.readTextFile("input.prod");

const pairs = input.split("\n").map((line) => line.split(","));
pairs.pop();

let overlap = 0;

for (const pair of pairs) {
  const [la, ra] = pair[0].split("-").map((n) => +n);
  const [lb, rb] = pair[1].split("-").map((n) => +n);

  if (la >= lb && ra <= rb) overlap++;
  else if (la <= lb && ra >= rb) overlap++;
}

console.log(overlap);
