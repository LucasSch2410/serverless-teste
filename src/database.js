import { PrismaClient } from '@prisma/client';

const prismaClientDatabase = new PrismaClient();

export default {
  prismaClientDatabase,
};
