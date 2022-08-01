import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient()
// const prismaClient = new PrismaClient({
//     //log: ["error", "info", "query", "warn"],
// });

export { prismaClient };