const input = await Deno.readTextFile("input.prod");

const lines = input.split("\n");
lines.pop();
const parsed = lines.map((line) => [
  line.substring(0, line.length / 2),
  line.substring(line.length / 2),
]);

const errors = parsed.map((line) => {
  const [first, second] = line;
  let common = "";

  for (const char of first) {
    if (second.includes(char)) {
      common = char;
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
