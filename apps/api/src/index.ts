import Fastify from "fastify";
import cors from "@fastify/cors";
import { authRoutes } from "./controllers/authController";
import { dashboardRoutes } from "./controllers/dashboardController";
import { templateRoutes } from "./controllers/templateController";
import { aiRoutes } from "./controllers/aiController";
import { authMiddleware } from "./middleware/authMiddleware";

const server = Fastify({
  logger: {
    transport: {
      target: "pino-pretty",
    },
  },
});

server.register(cors);
server.register(authRoutes, { prefix: "/auth" });
server.register(dashboardRoutes, { prefix: "/dashboard" });
server.register(templateRoutes, { prefix: "/templates" });
server.register(aiRoutes, { prefix: "/ai" });

server.addHook("preHandler", authMiddleware);

const start = async () => {
  try {
    await server.listen({ port: Number(process.env.PORT) || 3002 });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
