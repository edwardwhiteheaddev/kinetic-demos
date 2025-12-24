import { FastifyRequest, FastifyReply } from "fastify";
import jwt from "jsonwebtoken";

export async function authMiddleware(
  request: FastifyRequest,
  reply: FastifyReply
) {
  if (
    request.routerPath.startsWith("/auth") ||
    (request.routerPath === "/ai/query" && request.method === "POST")
  ) {
    return;
  }

  const token = request.headers.authorization?.replace("Bearer ", "");
  if (!token) {
    return reply.status(401).send({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    (request as any).user = decoded;
  } catch (error) {
    reply.status(401).send({ message: "Unauthorized" });
  }
}
