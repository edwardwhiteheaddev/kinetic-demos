import { FastifyInstance } from "fastify";

export async function dashboardRoutes(fastify: FastifyInstance) {
  fastify.get("/metrics", async (request, reply) => {
    // In a real application, you would fetch this data from the database
    const metrics = [
      { id: 1, name: "Revenue", value: 100000 },
      { id: 2, name: "Users", value: 5000 },
      { id: 3, name: "Churn", value: 0.05 },
    ];
    reply.send(metrics);
  });
}
