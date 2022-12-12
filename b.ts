const input = await Deno.readTextFile("input.prod");

const lines = input.split("\n");
lines.pop();
const parsed = [];
for (let i = 0; i < lines.length; i++) {
  if ((i + 1) % 3 !== 0) continue;
  parsed.push([lines[i - 2], lines[i - 1], lines[i]]);
}

const errors = parsed.map((group) => {
  const [first, second, third] = group;
  let common = "";

  for (const firstChar of first) {
    if (second.includes(firstChar) && third.includes(firstChar)) {
      common = firstChar;
    }
  }

  return common;
});

const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const translate = {
  ...letters.reduce<Record<string, number>>((acc, letter, index) => {
    acc[letter] = index + 1;
    return acc;
  }, {}),
  ...letters.reduce<Record<string, number>>((acc, letter, index) => {
    acc[letter.toUpperCase()] = index + 27;
    return acc;
  }, {}),
};

const values = errors.map((error) => translate[error]);

console.log(values.reduce((acc, value) => acc + value, 0));
