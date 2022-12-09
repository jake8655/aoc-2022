const input = await Deno.readTextFile("./input.prod");

const lines = input.split("\n");
lines.pop();
const parsed = lines.map((line) => line.split(" ") as [string, string]);

let score = 0;
const translate = {
  X: 0,
  Y: 3,
  Z: 6,
};
const translate2 = {
  A: "C",
  B: "A",
  C: "B",
};
const translate3 = Object.fromEntries(
  Object.entries(translate2).map(([k, v]) => [v, k])
);
const translate4 = {
  A: 1,
  B: 2,
  C: 3,
};

parsed.forEach((item) => {
  const [them, outcome] = item;

  let me;
  if (outcome === "Y") me = them;
  if (outcome === "X") me = translate2[them as keyof typeof translate2];
  if (outcome === "Z") me = translate3[them as keyof typeof translate3];

  let s = translate[outcome as keyof typeof translate];
  s += translate4[me as keyof typeof translate4];

  score += s;
});

console.log(score);
