const input = await Deno.readTextFile("./input.prod");

const lines = input.split("\n");
lines.pop();
const parsed = lines.map((line) => line.split(" ") as [string, string]);

let score = 0;
const translate = {
  X: "A",
  Y: "B",
  Z: "C",
};
const translate2 = {
  A: 1,
  B: 2,
  C: 3,
};

parsed.forEach((item) => {
  let [them, me] = item;

  me = translate[me as keyof typeof translate];
  let s = translate2[me as keyof typeof translate2];

  if (me === them) s += 3;

  if (
    (me === "A" && them === "C") ||
    (me === "B" && them === "A") ||
    (me === "C" && them === "B")
  )
    s += 6;

  score += s;
});

console.log(score);
