import { FastifyInstance } from "fastify";

export async function aiRoutes(fastify: FastifyInstance) {
  fastify.post("/query", async (request, reply) => {
    const { query } = request.body as any;
    reply.send({ response: `You asked: ${query}` });
  });
}
