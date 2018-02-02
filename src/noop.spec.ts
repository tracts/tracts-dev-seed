import { test } from "ava";
import { Noop } from "./noop";

test("Should return Hello World", (t) => {
  const noop = new Noop();
  t.is(noop.hi(), "Hello World");
});
