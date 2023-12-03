import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";
import { part1, part2 } from "./main.js";

const part1data = Deno.readTextFileSync("part1.test").split("\n");
const part2data = Deno.readTextFileSync("part2.test").split("\n");

Deno.test(function part1Test() {
	assertEquals(part1(part1data), 142);
});

Deno.test(function part2Test() {
  assertEquals(part2(part2data), 281);
});
