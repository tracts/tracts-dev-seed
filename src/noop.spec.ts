import test, { ExecutionContext } from "ava";
import { Noop } from "./noop";

test("Should return Hello World", (t: ExecutionContext) => {
  const noop = new Noop();
  t.is(noop.hi(), "Hello World");
});
