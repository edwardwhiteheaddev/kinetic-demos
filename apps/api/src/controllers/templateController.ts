import { FastifyInstance } from "fastify";

const templates = [
  { id: 1, name: "Growth Engine Builder" },
  { id: 2, name: "Cashflow Waterfall" },
  { id: 3, name: "Expense Ratio Analyzer" },
];

export async function templateRoutes(fastify: FastifyInstance) {
  fastify.get("/", async (request, reply) => {
    reply.send(templates);
  });
}
