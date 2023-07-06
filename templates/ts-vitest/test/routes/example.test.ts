import { expect, test } from "vitest";
import { createApp } from "../helper";

const app = createApp();

test("example is loaded", async () => {
  const res = await app.inject({
    url: "/example",
  });

  expect(res.payload).toBe("this is an example");
});
