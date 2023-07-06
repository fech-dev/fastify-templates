import { expect, test } from "vitest";
import { createApp } from "../helper";

const app = createApp();

test("default root route", async () => {
  const res = await app.inject({
    url: "/",
  });

  expect(res.json()).toEqual({ root: true });
});
