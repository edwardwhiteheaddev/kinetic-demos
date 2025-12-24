import { FastifyInstance } from "fastify";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export async function authRoutes(fastify: FastifyInstance) {
  fastify.post("/register", async (request, reply) => {
    const { email, password, tenantName } from request.body as any;
    const hashedPassword = await bcrypt.hash(password, 10);
    const tenant = await prisma.tenant.create({
      data: {
        name: tenantName,
        users: {
          create: {
            email,
            password: hashedPassword,
          },
        },
      },
    });
    reply.send(tenant);
  });

  fastify.post("/login", async (request, reply) => {
    const { email, password } = request.body as any;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return reply.status(401).send({ message: "Invalid credentials" });
    }
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return reply.status(401).send({ message: "Invalid credentials" });
    }
    const token = jwt.sign(
      { userId: user.id, tenantId: user.tenantId },
      process.env.JWT_SECRET!
    );
    reply.send({ token, user });
  });
}
