const input = await Deno.readTextFile("input.prod");
const lines = input.split("\n");
lines.pop(); // remove last empty line

const getNumberOfStacks = (line: string) => {
  const stackRegex = line.matchAll(/\d+/g);
  const stacks = [...stackRegex].map((match) => +match[0]);
  return stacks.at(-1)!;
};

const moveSupplies = (
  count: number,
  from: number,
  to: number,
  stacks: string[][]
) => {
  const fromStack = stacks[from];
  const toStack = stacks[to];
  const supplies = fromStack.splice(0, count);

  toStack.unshift(...supplies);
};

const supplyAndStackLines = lines.splice(0, lines.indexOf(""));
const supplyLines = supplyAndStackLines.splice(
  0,
  supplyAndStackLines.length - 1
);
const stackLine = supplyAndStackLines.at(-1)!;
const numberOfStacks = getNumberOfStacks(stackLine);

const CHAR_JUMP = 4;
const groups: Array<string | null>[] = [];

supplyLines.forEach((line, lineIdx) => {
  groups.push([]);
  for (let i = 1; i < numberOfStacks * CHAR_JUMP; i += CHAR_JUMP) {
    const currentStackNumber = Math.floor(i / CHAR_JUMP);
    const group = line.slice(i, i + 1);

    groups[lineIdx][currentStackNumber] = !group.trim() ? null : group;
  }
});

const stacks: string[][] = [];

for (let i = 0; i < numberOfStacks; i++) {
  stacks.push([]);

  for (let j = 0; j < supplyLines.length; j++) {
    const group = groups[j][i];
    if (group) {
      stacks[i].push(group);
    }
  }
}

lines.shift(); // remove empty line

lines.forEach((line) => {
  const [count, from, to] = [...line.matchAll(/\d+/g)].map(
    (match) => +match[0]
  );

  moveSupplies(count, from - 1, to - 1, stacks);
});

const result = stacks.map((stack) => stack[0]).join("");

console.log(result);
