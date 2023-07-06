import Fastify from "fastify";
import AppPlugin from "../src/app";

export const createApp = () => {
  const fastify = Fastify();

  fastify.register(AppPlugin);

  return fastify;
};
