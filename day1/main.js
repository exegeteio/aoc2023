// function to remove all non-digits from a string
export function part1(content) {
  let result = 0;
  for (const line in content) {
    let str = content[line];
    if (str === "") {
      continue;
    }

    // Remove digits from str.
    str = str.replace(/\D+/g, "");
    result = result + parseInt(`${str.at(0)}${str.at(-1)}`)
  }
  return result;
}

const ENGLISH_NUMBERS = {
  "one": 1,
  "two": 2,
  "three": 3,
  "four": 4,
  "five": 5,
  "six": 6,
  "seven": 7,
  "eight": 8,
  "nine": 9
};

// function to replace English numbers with digits
function replaceEnglishNumbers(str) {
  // stream is added to with each character in str.
  //   Resets after a match, or when hits an actual digit.
  let stream = "";
  // Result stores the new string.
  let result = ""

  for (let i = 0; i < str.length; i++) {
    // Reset and continue if the current character is a digit.
    if (!isNaN(str[i])) { // Is a digit!
      result = result + stream + str[i];
      stream = "";
      continue;
    }

    // Append current character and check if the current string is the
    //   English representation of a number.
    stream = stream + str[i];
    for (const key in ENGLISH_NUMBERS) {
      if (stream.match(new RegExp(`${key}$`))) {
        result = result + stream.replace(key, ENGLISH_NUMBERS[key]);
        stream = "";
      }
    }
  }

  return result;
}

export function part2(content) {
  let result = 0;
  for (const line in content) {
    let str = content[line];
    if (str === "") {
      continue;
    }

    str = replaceEnglishNumbers(str);

    let full_str = str;
    str = str.replace(/\D+/g, "");
    console.log(content[line], full_str, str, parseInt(`${str.at(0)}${str.at(-1)}`));
    result = result + parseInt(`${str.at(0)}${str.at(-1)}`);
  }
  return result;
}

if (import.meta.main) {
  const content = Deno.readTextFileSync("part1.txt").split("\n");
  console.log("Part 1:", part1(content));
  console.log("Part 2:", part2(content));
}
